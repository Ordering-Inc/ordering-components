import React, { useEffect, useState } from 'react'
import { useApi } from '../../contexts/ApiContext'
import { useOrder } from '../../contexts/OrderContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useSession } from '../../contexts/SessionContext'
export const PlaceSpot = (props) => {
  const {
    UIComponent,
    cart
  } = props

  const [orderState] = useOrder()
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()

  /**
   * Places state (Curbside, eat in)
   */
  const [placesState, setPlacesState] = useState({ loading: false, places: [], placeGroups: [], error: null })

  const getPlaces = async () => {
    try {
      setPlacesState({
        ...placesState,
        loading: true
      })

      const responsePlaceGroups = await fetch(`${ordering.root}/business/${cart?.business_id}/place_groups`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      const { result: resultPlaceGroups, error: errorPlaceGroups } = await responsePlaceGroups.json()

      const responsePlaces = await fetch(`${ordering.root}/business/${cart?.business_id}/places`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      const { result: resultPlaces, error: errorPlaces } = await responsePlaces.json()

      if (!errorPlaces && !errorPlaceGroups) {
        setPlacesState({
          places: resultPlaces,
          placeGroups: resultPlaceGroups,
          loading: false,
          error: null
        })
        return
      }

      setPlacesState({
        places: [],
        placeGroups: [],
        loading: false,
        error: errorPlaceGroups ? resultPlaceGroups : resultPlaces
      })
    } catch (err) {
      setPlacesState({
        ...placesState,
        loading: false,
        error: err.message
      })
    }
  }

  const handleChangePlace = async (place) => {
    try {
      const uuid = cart?.uuid
      const response = await fetch(`${ordering.root}/carts/${uuid}`, {
        'Content-Type': 'application/json',
        method: 'PUT',
        body: JSON.stringify({
          place: place,
          place_id: place?.id

        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const { result, error } = await response.json()
      if (error) {
        showToast(ToastType.Error, result)
        return
      }
    } catch (err) {
      showToast(ToastType.Error, err.message)
    }
  }

  useEffect(() => {
    if (orderState?.options?.type === 4) {
      getPlaces()
    }
  }, [orderState?.options?.type])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          placesState={placesState}
          handleChangePlace={handleChangePlace}
          getPlacesList={getPlaces}
        />
      )}
    </>
  )
}
