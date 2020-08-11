import React, { useState, useEffect } from 'react'

/**
 * Component to show the businesses list without UI component
 */
export const BusinessListing = (props) => {
  const { UIComponent } = props
  const [shops, setShops] = useState([])

  useEffect(() => {
    fetch('https://apiv4.ordering.co/v400/en/demo/business?type=1&location=40.7539143,-73.9810162&params=name,slug,logo,header,location,description,food,alcohol,groceries,laundry,zones,delivery_price,minimum,schedule,featured,reviews,about,delivery_time,pickup_time,offers')
      .then(r => r.json())
      .then((resource) => {
        const loadedShops = resource.result
        setShops(loadedShops)
      })
  }, [])
  return (
    <>
      {
        UIComponent && (
          <UIComponent {...{ shops }} />
        )
      }
    </>
  )
}
