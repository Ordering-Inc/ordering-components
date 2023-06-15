import React, { useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../../contexts/SessionContext'
import { useOrder } from '../../../contexts/OrderContext'
import { useApi } from '../../../contexts/ApiContext'
import { useToast, ToastType } from '../../../contexts/ToastContext'
import { useLanguage } from '../../../contexts/LanguageContext'

/**
 * Component to manage custom order details behavior without UI component
 */
export const CustomOrderDetails = (props) => {
  const {
    UIComponent,
    businessPropsToFetch
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [{ carts }, { updateProduct }] = useOrder()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedBusiness, setSelectedBusiness] = useState(null)
  const [phone, setPhone] = useState('')
  const [customersPhones, setCustomersPhones] = useState({ users: [], loading: false, error: null })
  const [businessList, setBusinessList] = useState({ loading: false, businesses: [], error: null })
  const [productList, setProductList] = useState({ loading: false, products: [], error: null })

  const cart = useMemo(() => {
    if (!carts || !selectedBusiness?.id) return null
    return carts[`businessId:${selectedBusiness?.id}`]
  }, [carts, selectedBusiness?.id])

  /**
   * Get users from API
   */
  const getUsers = async () => {
    setCustomersPhones({ ...customersPhones, loading: true })
    const conditions = {
      conector: 'AND',
      conditions: [{
        attribute: 'enabled',
        value: encodeURI(true)
      },
      {
        conector: 'OR',
        conditions: [{
          attribute: 'cellphone',
          value: {
            condition: 'ilike',
            value: encodeURI(`%${phone}%`)
          }
        },
        {
          attribute: 'phone',
          value: {
            condition: 'ilike',
            value: encodeURI(`%${phone}%`)
          }
        }]
      }]
    }
    try {
      const { content: { result } } = await ordering
        .setAccessToken(token)
        .users()
        .where(conditions)
        .get()
      setCustomersPhones({ ...customersPhones, users: result, loading: false })
    } catch (e) {
      setCustomersPhones({ ...customersPhones, loading: false, error: e.message })
    }
  }

  /**
   * Method to get business list from API
   */
  const getBusinessList = async (location) => {
    try {
      setBusinessList({
        ...businessList,
        loading: true
      })

      const parameters = {
        location
      }

      const conditions = {
        conector: 'AND',
        conditions: [{
          attribute: 'enabled',
          value: encodeURI(true)
        }]
      }

      const fetchEndpoint = ordering.businesses().where(conditions).select(businessPropsToFetch).parameters(parameters)
      const { content: { error, result } } = await fetchEndpoint.get()
      if (!error) {
        setBusinessList({
          ...businessList,
          loading: false,
          businesses: result
        })
      } else {
        setBusinessList({
          ...businessList,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setBusinessList({
        ...businessList,
        loading: false,
        error: [error?.message]
      })
    }
  }

  /**
   * Method to get products list from API
   */
  const getProducts = async (searchValue) => {
    try {
      setProductList({
        ...productList,
        loading: true
      })
      let where = null
      const searchConditions = []
      if (searchValue) {
        searchConditions.push(
          {
            attribute: 'name',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${searchValue}%`)
            }
          }
        )
      }
      where = {
        conditions: searchConditions,
        conector: 'OR'
      }
      const { content: { error, result } } = await ordering.businesses(selectedBusiness.id).products().where(where).get()
      if (!error) {
        setProductList({
          ...productList,
          loading: false,
          products: result
        })
      } else {
        setProductList({
          ...productList,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setProductList({
        ...productList,
        loading: false,
        error: [error?.message]
      })
    }
  }

  /**
   * Method to update product cart
   */
  const handeUpdateProductCart = async (product, increament) => {
    showToast(ToastType.Info, t('LOADING', 'Loading'))
    let successful = true
    const cartProduct = {
      ...product,
      quantity: increament ? product.quantity + 1 : product.quantity - 1
    }
    successful = await updateProduct(cartProduct, selectedUser?.id, selectedBusiness?.id)

    if (successful) {
      showToast(ToastType.Success, t('PRODUCT_UPDATE', 'Product updated'))
    }
  }

  useEffect(() => {
    if (phone && phone.length >= 7) {
      getUsers()
    }
    if ((phone && phone.length < 7) || !phone) {
      setCustomersPhones({ ...customersPhones, users: [] })
    }
  }, [phone])

  useEffect(() => {
    if (selectedBusiness) {
      setProductList({ loading: false, products: [], error: null })
    }
  }, [selectedBusiness])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          selectedBusiness={selectedBusiness}
          setSelectedBusiness={setSelectedBusiness}
          phone={phone}
          onChangeNumber={val => setPhone(val)}
          customersPhones={customersPhones}
          setCustomersPhones={setCustomersPhones}
          businessList={businessList}
          getBusinessList={getBusinessList}
          productList={productList}
          getProducts={getProducts}
          handeUpdateProductCart={handeUpdateProductCart}
          cart={cart}
        />
      )}
    </>
  )
}

CustomOrderDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

CustomOrderDetails.defaultProps = {
  businessPropsToFetch: ['id', 'name', 'location', 'logo', 'slug']
}
