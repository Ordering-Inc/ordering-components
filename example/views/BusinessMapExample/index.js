import React from 'react'

import { BusinessMap } from '../../../src/components/BusinessMap'
import { BusinessMapUI } from '../../components/BusinessMapUI'

export const BusinessMapExample = () => {
  const props = {
    UIComponent: BusinessMapUI,

    /**
     * Business list must have locations
     */
    businessList: [
      {
        location: { lat: 40.94677350000001, lng: -73.98595739999996, zipcode: -1, zoom: 15 },
        logo: 'https://res.cloudinary.com/ordering2/image/upload/v1562277711/bk6kvzrnfkvqgav9qi7j.png'
      },
      {
        location: { lat: 40.80196739999999, lng: -73.94575050000003, zipcode: -1, zoom: 15 },
        logo: 'https://res.cloudinary.com/ordering2/image/upload/v1562275904/rtsxbq0sblemyu6bxehq.jpg'
      },
      {
        location: { lat: 37.791370300000004, lng: -122.39876809999998, zipcode: -1, zoom: 15 }
      }
    ],
    /**
     * User location is used for place center of the map
     */
    userLocation: { lat: 40.7751052, lng: -73.9651148 }
  }

  return (
    <BusinessMap {...props} />
  )
}
