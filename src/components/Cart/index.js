import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'
import { useConfig } from '../../contexts/ConfigContext'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const Cart = (props) => {
  const {
    cart,
    UIComponent,
    handleEditProduct,
    businessConfigs,
    commentDelayTime
  } = props

  /**
   * Order context manager
   */
  const [orderState, { updateProduct, removeProduct, clearCart, removeOffer, setStateValues }] = useOrder()

  /**
   * Config context manager
   */
  const [stateConfig] = useConfig()

  /**
   * Api context
   */
  const [ordering] = useApi()
  const socket = useWebsocket()
  /**
   * Session content
   */
  const [{ token }] = useSession()

  /**
   * Toast state
   */
  const [, { showToast }] = useToast()

  /**
   * Comment state
   */
  const [commentState, setCommentState] = useState({ loading: false, result: cart ?? null, error: null })

  /**
   * Total product in cart
   */
  const totalBalance = stateConfig.order?.quantity || 0

  /**
   * Max total product in cart by config
   */
  const maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance
  /**
   * Timeout for update cart comment
   */
  let timeout = null
  /**
   * Cart comment stagged
   */
  let previousComment
  /**
   * Catering preorder
   */
  const cateringTypes = [7, 8]
  const cateringTypeString = orderState?.options?.type === 7
    ? 'catering_delivery'
    : orderState?.options?.type === 8
      ? 'catering_pickup'
      : null
  const splitCateringValue = (configName) => businessConfigs.find((config) => config.key === configName)?.value?.split('|')?.find((val) => val?.includes(cateringTypeString))?.split(',')[1]
  const preorderSlotInterval = businessConfigs && cateringTypeString && parseInt(splitCateringValue('preorder_slot_interval'))
  const preorderLeadTime = businessConfigs && cateringTypeString && parseInt(splitCateringValue('preorder_lead_time'))
  const preorderTimeRange = businessConfigs && cateringTypeString && parseInt(splitCateringValue('preorder_time_range'))
  const preorderMaximumDays = businessConfigs && cateringTypeString && parseInt(splitCateringValue('preorder_maximum_days'))
  const preorderMinimumDays = businessConfigs && cateringTypeString && parseInt(splitCateringValue('preorder_minimum_days'))
  /**
   * Calc balance by product id
   */
  const getProductMax = (product) => {
    const fixedMaxAmount = 999
    const productMax = (product.inventoried ? product.stock > fixedMaxAmount ? fixedMaxAmount : product.stock : maxCartProductConfig)
    const max = product.quantity + productMax - product.balance
    return max < product.quantity ? product.quantity : max
  }

  /**
   * Calc balance by product id
   */
  const offsetDisabled = (product) => {
    const productMax = (product.inventoried ? product.stock : maxCartProductConfig)
    return productMax - (product.balance - product.quantity)
  }

  /**
   * Change product quantity of the cart
   */
  const changeQuantity = (product, quantity) => {
    if (quantity === 0) {
      removeProduct(product, cart)
    } else {
      updateProduct({
        id: product.id,
        business_id: product.business_id,
        code: product.code,
        quantity: quantity
      }, cart)
    }
  }

  /**
   * change comment for cart
   */
  const handleChangeComment = (value, userId) => {
    try {
      clearTimeout(timeout)
      timeout = setTimeout(async function () {
        setCommentState({ ...commentState, loading: true })
        const uuid = cart?.uuid
        const body = { comment: value }
        if (userId) body.user_id = userId
        const response = await fetch(`${ordering.root}/carts/${uuid}`, {
          'Content-Type': 'application/json',
          method: 'PUT',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            'X-App-X': ordering.appId,
            'X-Socket-Id-X': socket?.getId()
          }
        })
        const { result, error } = await response.json()
        if (error) {
          setCommentState({ ...commentState, loading: false, error: true, result })
          showToast(ToastType.Error, result)
          return
        }
        const carts = orderState.carts
        carts[`businessId:${result.business_id}`] = result
        setStateValues({ carts })
        setCommentState({ ...commentState, loading: false, error: null, result })
      }, commentDelayTime ?? 750)
    } catch (err) {
      setCommentState({ ...commentState, loading: false, error: true, result: err.message })
      showToast(ToastType.Error, err.message)
    }
  }

  /**
   * method to manage remove offer assigned
   */
  const handleRemoveOfferClick = (id, userId) => {
    const dataOffer = {
      business_id: cart?.business_id,
      offer_id: id
    }
    if (userId) dataOffer.user_id = userId
    removeOffer(dataOffer)
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          carts={orderState.carts}
          orderState={orderState}
          clearCart={clearCart}
          removeProduct={removeProduct}
          commentState={commentState}
          preorderSlotInterval={preorderSlotInterval}
          preorderLeadTime={preorderLeadTime}
          preorderTimeRange={preorderTimeRange}
          preorderMaximumDays={preorderMaximumDays}
          preorderMinimumDays={preorderMinimumDays}
          cateringTypes={cateringTypes}
          changeQuantity={changeQuantity}
          getProductMax={getProductMax}
          offsetDisabled={offsetDisabled}
          handleEditProduct={handleEditProduct}
          handleChangeComment={handleChangeComment}
          handleRemoveOfferClick={handleRemoveOfferClick}
        />
      )}
    </>
  )
}

Cart.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Function to edit product behavior
   */
  handleEditProduct: PropTypes.func,
  /**
   * String filter to fetch validation fields
   */
  validationFieldsType: PropTypes.string
}
