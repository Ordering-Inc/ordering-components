import React, { useEffect, useState } from 'react'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useOrder } from '../../contexts/OrderContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const PromotionsController = (props) => {
  const {
    UIComponent,
    paramsToFetch,
    franchiseId
  } = props

  const [session] = useSession()
  const [ordering] = useApi()
  const socket = useWebsocket()
  const [{ options }] = useOrder()

  const [searchValue, setSearchValue] = useState('')
  const [offerSelected, setOfferSelected] = useState(null)
  const [offersState, setOffersState] = useState({
    loading: true,
    error: null,
    offers: []
  })
  const location = JSON.stringify(options?.address?.location)

  const getOffers = async () => {
    let params = `?enabled=true&params=${paramsToFetch.join()}&location=${location}&order_type_id=${options?.type}`
    if (franchiseId) {
      params = params + `&franchise_id=${franchiseId}`
    }
    const url = `${ordering.root}/offers/public${params}`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.token}`,
        'X-App-X': ordering.appId,
        'X-Socket-Id-X': socket?.getId()
      }
    })
    return await response.json()
  }

  const loadOffers = async () => {
    try {
      setOffersState({ ...offersState, loading: true })
      const { error, result } = await getOffers()
      setOffersState({
        ...offersState,
        loading: false,
        error: error ? result : null,
        offers: error ? [] : result
      })
    } catch (err) {
      setOffersState({
        ...offersState,
        loading: false,
        error: [err?.message ?? 'ERROR']
      })
    }
  }

  const handleSearchValue = (value) => {
    setSearchValue(value)
  }

  useEffect(() => {
    loadOffers()
  }, [JSON.stringify(location), options?.type])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          offersState={offersState}
          searchValue={searchValue}
          offerSelected={offerSelected}
          loadOffers={loadOffers}
          handleSearchValue={handleSearchValue}
          setOfferSelected={setOfferSelected}
        />
      )}
    </>
  )
}

PromotionsController.defaultProps = {
  paramsToFetch: [
    'id',
    'name',
    'description',
    'businesses',
    'sites',
    'image',
    'end',
    'start',
    'paymethods',
    'type',
    'minimum',
    'rate_type',
    'rate',
    'coupon',
    'limit',
    'enabled',
    'label',
    'rank',
    'condition_type',
    'target',
    'max_discount',
    'stackable',
    'auto',
    'public',
    'limit_per_user',
    'user_order_count',
    'user_order_count_condition',
    'valid_from_after_user_last_order_minutes',
    'valid_until_after_user_last_order_minutes',
    'include_products_with_offer'
  ]
}
