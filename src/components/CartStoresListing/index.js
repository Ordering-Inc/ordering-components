import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useOrder } from '../../contexts/OrderContext'

export const CartStoresListing = (props) => {
  const {
    UIComponent,
    cartuuid,
    cartStoresList
  } = props

  const [ordering] = useApi()
  const [orderState, { setStateValues }] = useOrder()
  const [{ token }] = useSession()

  const [businessIdSelect, setBusinessIdSelect] = useState(null);
  const [state, setState] = useState({ loading: !cartStoresList, result: null, error: null })
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
        setStateValues({
          carts: {
            ...orderState.carts,
            [`businessId:${result.business_id}`]: result
          }
        })
      }
      setChangeStore({
        ...state,
        result: error ? [error] : result,
        error: error ? true : null,
        loading: false
      })
    } catch(err) {
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

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          storesState={state}
          businessIdSelect={businessIdSelect}
          changeStoreState={changeStoreState}
          handleCartStoreChange={handleCartStoreChange}
        />
      )}
    </>
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
  /**
   * Components types before Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

CartStoresListing.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
