import React from 'react'
import BusinessCard from '../../../src/components/BusinessCard'

export const BusinessListingUI = (props) => {
  const { businesses } = props
  return (
    <>
      {
        BusinessCard && (
          businesses.length !== 0 && (
            businesses.map((business, i) =>
              <BusinessCard
                key={i}
                {...business}
              />
            )
          )
        )
      }
    </>
  )
}
