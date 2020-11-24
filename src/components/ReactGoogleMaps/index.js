import React, { useState, useEffect } from 'react'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs
} from 'react-google-maps'

// const apiKey = 'AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'

// const options = {
//   zoomControl: true,
//   streetViewControl: false,
//   fullscreenControl: false,
//   mapTypeControl: false,
//   mapTypeId: 'roadmap',
//   mapTypeControlOptions: {
//     mapTypeIds: ['roadmap', 'satellite']
//   }
// }

// googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`}

// const positions = [
//   { id: 0, lat: 40.74677350000001, lng: -73.98595739999996 },
//   { id: 1, lat: 40.7751052, lng: -73.9651148 },
//   { id: 2, lat: 20.6654691, lng: -103.4202876 }
// ]

const Markers = ({ places }) => {
  return places.map(place => {
    return (
      <Marker key={place.id} position={{ lat: place.lat, lng: place.lng }} />
    )
  })
}

const Map = ({ places, zoom, center }) => {
  return (
    <GoogleMap defaultZoom={zoom} defaultCenter={center}>
      <Markers places={places} />
    </GoogleMap>
  )
}

const getRandomInRange = (from, to, fixed) => {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1
}

const MapWithMarker = (props) => {
  const [places, setPlaces] = useState([])

  const addPlace = () => {
    const newPlace = {
      id: places.length + 1,
      lat: getRandomInRange(-30.0, -35.0, 3),
      lng: getRandomInRange(110.0, 150.0, 3)
    }

    setPlaces([
      ...places,
      newPlace
    ])
  }

  useEffect(() => {
    const interval = setInterval(addPlace(), 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Map
      center={props.center}
      zoom={props.zoom}
      places={places}
    />
  )
}

export default withScriptjs(withGoogleMap(MapWithMarker))

{/* <MyMapComponent
  isMarkerShown
  positions={positionsEdited}
  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`}
  loadingElement={<div style={{ height: '100%' }} />}
  containerElement={<div style={{ height: '400px' }} />}
  mapElement={<div style={{ height: '100%' }} />}
  defaultCenter={{ lat: 20.6654691, lng: -103.4202876 }}
/> */}
