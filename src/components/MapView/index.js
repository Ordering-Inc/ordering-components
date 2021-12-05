import React, { useState } from 'react'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'

export const MapView = (props) => {
  const { UIComponent } = props

  const [ordering] = useApi()
  const [{ auth, token }] = useSession()
  const [businessMarkers, setBusinessMarkers] = useState([])
  const [isLoadingBusinessMarkers, setIsLoadingBusinessMakers] = useState(true)
  const [markerGroups, setMarkerGroups] = useState([])
  const [customerMarkerGroups, setCustomerMarkerGroups] = useState([])
  const [alertState, setAlertState] = useState({ open: false, content: [], key: null })

  const getBusinessLocations = async () => {
    const markerGroups = {}
    const customerMarkerGroups = {}
    setIsLoadingBusinessMakers(true)
    const options = {
      query: {
        where: [
          {
            attribute: 'status',
            value: [0, 13, 7, 4, 3, 8, 9, 14, 18, 19, 20, 21]
          }
        ]
      }
    }
    const { content: { result, error } } = await ordering.setAccessToken(auth | token).orders().asDashboard().get(options)
    if (!error) {
      result.map(order => {
        markerGroups[order?.business_id] = markerGroups?.[order?.business_id] ? [...markerGroups[order?.business_id], order] : [order]
        customerMarkerGroups[order?.customer_id] = customerMarkerGroups?.[order?.customer_id] ? [...customerMarkerGroups[order?.customer_id], order] : [order]
      })
      setMarkerGroups(markerGroups)
      setCustomerMarkerGroups(customerMarkerGroups)
      setIsLoadingBusinessMakers(false)
      setBusinessMarkers(result)
    } else {
      setAlertState(result)
      setIsLoadingBusinessMakers(false)
    }
  }

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
            alertState={alertState}
            setAlertState={setAlertState}
          />
        )
      }
    </>
  )
}
