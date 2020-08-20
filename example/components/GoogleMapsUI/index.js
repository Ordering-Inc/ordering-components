import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

export const GoogleMapsUI = (props) => {
  const {
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const mapStyles = {
    width: '50%',
    height: '50%'
  }

  return (
    <>
      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}

      {beforeComponents.map(
        (BeforeComponent, i) => <BeforeComponent key={i} {...props} />
      )}

      <Map
        google={window.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176}}
      />

      {afterComponents.map(
        (AfterComponent, i) => <AfterComponent key={i} {...props} />
      )}

      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
})(GoogleMapsUI)
