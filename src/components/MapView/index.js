import React, { useState, useEffect } from 'react'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useEvent } from '../../contexts/EventContext'

export const MapView = (props) => {
  const { UIComponent } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [events] = useEvent()
  const [businessMarkers, setBusinessMarkers] = useState([])
  const [isLoadingBusinessMarkers, setIsLoadingBusinessMakers] = useState(true)
  const [markerGroups, setMarkerGroups] = useState({})
  const [customerMarkerGroups, setCustomerMarkerGroups] = useState({})
  const [alertState, setAlertState] = useState({ open: false, content: [], key: null })

  const getBusinessLocations = async () => {
    try {
      setIsLoadingBusinessMakers(true)
      const options = {
        query: {
          where: [
            {
              attribute: 'status',
              value: [0, 13, 7, 4, 3, 8, 9, 14, 18, 19, 20, 21, 23, 26]
            }
          ]
        }
      }
      const { content: { result, error } } = await ordering.setAccessToken(session.token).orders().asDashboard().get(options)
      if (error) {
        setAlertState(result)
      }
      const markerGroupsObject = result.reduce((acc, order) => {
        acc[order.business_id] = acc[order.business_id] ? [...acc[order.business_id], order] : [order]
        return acc
      }, {})
      const customerMarkerGroupsObject = result.reduce((acc, order) => {
        acc[order.customer_id] = acc[order.customer_id] ? [...acc[order.customer_id], order] : [order]
        return acc
      }, {})

      setMarkerGroups(markerGroupsObject)
      setCustomerMarkerGroups(customerMarkerGroupsObject)
      setBusinessMarkers(result)
    } catch (error) {
      setAlertState({ open: true, content: [error.message] })
    } finally {
      setIsLoadingBusinessMakers(false)
    }
  }

  const setDriverLocation = async (location) => {
    try {
      await ordering
        .setAccessToken(session.token)
        .users(session.user.id)
        .driverLocations()
        .save(location)
    } catch (error) {
      console.log(error?.message)
    }
  }

  useEffect(() => {
    const handleUpdateOrder = (order) => {
      getBusinessLocations()
      // setIsLoadingBusinessMakers(true)
      // console.log('emited', order)
      // console.log('same driver', order?.driver_id, session?.user?.id)
      // const markers = markerGroups?.[order?.business_id] ?? []
      // const customerMakers = customerMarkerGroups?.[order?.customer_id] ?? []
      // console.log('groups', markerGroups)
      // setMarkerGroups({
      //   ...markerGroups,
      //   [order?.business_id]: order?.driver_id !== session?.user?.id ? markers.filter(_order => order?.id === _order?.id) : [...markers, order]
      // })
      // markerGroups[order?.business_id] = order?.driver_id !== session?.user?.id ? markers.filter(_order => order?.id === _order?.id) : [...markers, order]
      // setCustomerMarkerGroups({
      //   ...customerMarkerGroups,
      //   [order?.customer_id]: order?.driver_id !== session?.user?.id ? customerMakers.filter(_order => order?.id === _order?.id) : [...customerMakers, order]
      // })
      // customerMarkerGroups[order?.customer_id] = order?.driver_id !== session?.user?.id ? customerMakers.filter(_order => order?.id === _order?.id) : [...customerMakers, order]
      // setIsLoadingBusinessMakers(false)
    }
    events.on('order_updated', handleUpdateOrder)
    events.on('order_added', handleUpdateOrder)
    return () => {
      events.off('order_updated', handleUpdateOrder)
      events.off('order_added', handleUpdateOrder)
    }
  }, [])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            businessMarkers={businessMarkers}
            customerMarkerGroups={customerMarkerGroups}
            isLoadingBusinessMarkers={isLoadingBusinessMarkers}
            markerGroups={markerGroups}
            getBusinessLocations={getBusinessLocations}
            setDriverLocation={setDriverLocation}
            alertState={alertState}
            setAlertState={setAlertState}
            setMarkerGroups={setMarkerGroups}
            setCustomerMarkerGroups={setCustomerMarkerGroups}
          />
        )
      }
    </>
  )
}
