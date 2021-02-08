import React, { useState } from 'react'
import { GoogleMapsMap } from '../../../src/components/GoogleMaps'
import { useConfig } from '../../../src/contexts/ConfigContext'

export const BusinessesMapUI = (props) => {
  const {
    businessLocations,
    userLocation,
    onBusinessClick,
    setErrors
  } = props

  const [configState] = useConfig()

  const [activeMap, setActiveMap] = useState(false)

  const toggleMap = () => {
    setActiveMap(!activeMap)
  }

  const googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    },
    isMarkerDraggable: false
  }

  return (
    <>
      <div onClick={toggleMap}>
        {activeMap ? (
          <p>Hide map</p>
        ) : (
          <p>Show map</p>
        )}
      </div>
      {activeMap && (
        <GoogleMapsMap
          apiKey={configState?.configs?.google_maps_api_key?.value}
          location={userLocation}
          locations={businessLocations}
          mapControls={googleMapsControls}
          maxLimitLocation={configState?.configs?.meters_to_change_address?.value}
          businessMap
          onBusinessClick={onBusinessClick}
          setErrors={setErrors}
        />
      )}
    </>
  )
}
