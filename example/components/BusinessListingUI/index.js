import React from 'react'
import BusinessCard from '../BusinessCardUI'

export const BusinessListingUI = (props) => {
  const { shops } = props
  return (
    <>
      <div>
        {
          shops.length !== 0 && (
            shops.map((business) =>
              <BusinessCard
                key={business.id}
                name={business.name}
                openingHours={business.today.lapses}
                minimum={business.minimum}
                deliveryPrice={business.delivery_price}
                description={business.description}
                distance={business.distance}
                deliveryTime={business.delivery_time}
                reviews={business.reviews.total}
              />
            )
          )
        }
      </div>
    </>
  )
}
