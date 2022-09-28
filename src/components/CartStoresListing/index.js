import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useOrder } from '../../contexts/OrderContext'
import { useEvent } from '../../contexts/EventContext'

export const CartStoresListing = (props) => {
  const {
    UIComponent,
    cartuuid,
    cartStoresList,
    pageChangeStore,
    isStore,
    handleCustomStoreRedirect
  } = props

  const [ordering] = useApi()
  const [orderState, { setStateValues }] = useOrder()
  const [{ token }] = useSession()
  const [events] = useEvent()

  const [searchValue, setSearchValue] = useState(null)
  const [businessIdSelect, setBusinessIdSelect] = useState(null)
  const [state, setState] = useState({ loading: !cartStoresList, result: null, error: null, original: null })
  const [changeStoreState, setChangeStore] = useState({ loading: false, result: null, error: null })
  const requestsState = {}

  const getCartStores = async () => {
    try {
      setState({ ...state, loading: true })
      const source = {}
      requestsState.businesses = source
      const { content: { error, result } } = await ordering
        .setAccessToken(token)
        .carts(cartuuid)
        .getBusinesses({ cancelToken: source })

      setState({
        ...state,
        result: error ? [error] : result,
        original: error ? [error] : result,
        error: error ? true : null,
        loading: false
      })
    } catch (err) {
      setState({
        ...state,
        error: [err],
        loading: false
      })
    }
  }

  const handleCartStoreChange = async (businessId) => {
    setBusinessIdSelect(businessId)
    try {
      setChangeStore({ ...changeStoreState, loading: true })
      const { content: { error, result } } = await ordering
        .setAccessToken(token)
        .carts(cartuuid)
        .set({ business_id: businessId })

      if (!error) {
        const carts = orderState.carts
        const cartFinded = Object.values(orderState?.carts ?? {}).find(_cart => _cart?.uuid === result.uuid)
        if (cartFinded) {
          delete carts[`businessId:${cartFinded?.business_id}`]
        }
        carts[`businessId:${result?.business_id}`] = result
        setStateValues({ carts })
        const route = window.location.pathname
        if (isStore) {
          if (handleCustomStoreRedirect) {
            handleCustomStoreRedirect(result?.business?.slug)
          } else if (route.includes('/store/') && pageChangeStore) {
            events.emit('go_to_page', { page: pageChangeStore, params: { store: result?.business?.slug } })
          }
        }
      }
      setChangeStore({
        ...state,
        result: error ? [error] : result,
        error: error ? true : null,
        loading: false
      })
      if (!error) {
        props.onClose && props.onClose()
      }
    } catch (err) {
      setChangeStore({
        ...state,
        error: [err],
        loading: false
      })
    }
  }

  useEffect(() => {
    if (!cartStoresList) {
      getCartStores()
    } else {
      setState({
        ...state,
        result: cartStoresList,
        error: null,
        loading: false
      })
    }
    return () => {
      if (requestsState.businesses) {
        requestsState.businesses.cancel()
      }
    }
  }, [cartStoresList])

  useEffect(() => {
    if (!searchValue) {
      setState({
        ...state,
        loading: false,
        result: state.original
      })
    } else {
      setState({
        ...state,
        loading: false,
        result: state.original?.length
          ? state.original.filter(business => business.name.toLowerCase().includes(searchValue.toLowerCase()))
          : null
      })
    }
  }, [searchValue])

  return (
    <UIComponent
      {...props}
      storesState={state}
      businessIdSelect={businessIdSelect}
      searchValue={searchValue}
      changeStoreState={changeStoreState}
      handleCartStoreChange={handleCartStoreChange}
      handleChangeSearch={setSearchValue}
    />
  )
}

CartStoresListing.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
  * cartuuid to fetch allowed businesses
  */
  cartuuid: PropTypes.string.isRequired,
}
