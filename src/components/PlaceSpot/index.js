import React, { useEffect, useState } from 'react'
import { useApi } from '../../contexts/ApiContext'
import { useOrder } from '../../contexts/OrderContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useSession } from '../../contexts/SessionContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const PlaceSpot = (props) => {
  const {
    UIComponent,
    cart,
    spotNumberDefault,
    vehicleDefault,
    onRemoveSpotNumber
  } = props

  const [orderState] = useOrder()
  const [ordering] = useApi()
  const socket = useWebsocket()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  /**
   * Places state (Curbside, eat in)
   */
  const [placesState, setPlacesState] = useState({ loading: true, places: [], placeGroups: [], error: null })
  const [spotState, setSpotState] = useState({ loading: false, error: null })
  const [spotNumber, setSpotNumber] = useState(spotNumberDefault)
  const [vehicle, setVehicle] = useState({
    type: vehicleDefault?.type ?? '',
    model: vehicleDefault?.model ?? '',
    car_registration: vehicleDefault?.car_registration ?? '',
    color: vehicleDefault?.color ?? ''
  })

  const orderTypesAllowed = [3, 4, 5]

  const getPlaces = async () => {
    try {
      setPlacesState({
        ...placesState,
        loading: true
      })

      const responsePlaceGroups = await fetch(`${ordering.root}/business/${cart?.business_id}/place_groups`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        'X-App-X': ordering.appId,
        'X-Socket-Id-X': socket?.getId()
      })
      const { result: resultPlaceGroups, error: errorPlaceGroups } = await responsePlaceGroups.json()

      const responsePlaces = await fetch(`${ordering.root}/business/${cart?.business_id}/places`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        'X-App-X': ordering.appId,
        'X-Socket-Id-X': socket?.getId()
      })
      const { result: resultPlaces, error: errorPlaces } = await responsePlaces.json()

      const placeGroupDefault = {
        id: null,
        business_id: cart?.business_id,
        enabled: true,
        name: t('DEFAULT_PLACE_GROUP', 'Default place group')
      }
      if (!errorPlaces && !errorPlaceGroups) {
        if (resultPlaces.find(place => place.place_group_id === null)) {
          setPlacesState({
            places: resultPlaces,
            placeGroups: [placeGroupDefault, ...resultPlaceGroups],
            loading: false,
            error: null
          })
        } else {
          setPlacesState({
            places: resultPlaces,
            placeGroups: resultPlaceGroups,
            loading: false,
            error: null
          })
        }
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

  const handleChangeSpot = async ({ isCheckout = true, bodyToSend }) => {
    try {
      setSpotState({ ...spotState, loading: true })
      const id = isCheckout ? cart?.uuid : cart?.id
      const endpointToFetch = isCheckout
        ? ordering.setAccessToken(token).carts(id).set(bodyToSend)
        : ordering.setAccessToken(token).orders(id).save(bodyToSend)

      const { content: { error, result } } = await endpointToFetch

      if (!error) {
        onRemoveSpotNumber && onRemoveSpotNumber(cart?.business?.slug)
      }

      if (props.showToastMsg) {
        showToast(
          error ? ToastType.Error : ToastType.Success,
          error
            ? t('ERROR', result[0])
            : t('SPOT_CHANGE_SUCCESS_CONTENT', 'Changes applied correctly')
        )
      }

      setSpotState({
        ...spotState,
        loading: false,
        error: error ? result : null
      })
    } catch (err) {
      setSpotState({
        ...spotState,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    if (orderTypesAllowed.includes(orderState?.options?.type) && !props.isInputMode) {
      getPlaces()
    }
  }, [orderState?.options?.type])

  useEffect(() => {
    if (spotNumberDefault && spotNumberDefault !== cart?.spot_number) {
      handleChangeSpot({
        bodyToSend: { spot_number: spotNumberDefault }
      })
    }
  }, [spotNumberDefault])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          vehicle={vehicle}
          spotState={spotState}
          spotNumber={spotNumber}
          placesState={placesState}
          setVehicle={setVehicle}
          setSpotState={setSpotState}
          setSpotNumber={setSpotNumber}
          handleChangeSpot={handleChangeSpot}
          getPlacesList={getPlaces}
        />
      )}
    </>
  )
}

PlaceSpot.defaultProps = {
  showToastMsg: true
}
