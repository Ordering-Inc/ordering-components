import React, { useState, useEffect } from 'react'
import BusinessCard from '../../../src/components/BusinessCard'

const decimalAdjust = (value) => {
  const integer = value.toString().split('.')[0]
  const decimal = value.toString().split('.')[1].substring(0, 2)
  return parseFloat(`${integer}.${decimal}`)
}

const timeAdjust = (value) => {
  if (value < 10) return `0${value}`
  if (value.length >= 3) {
    return `${timeAdjust(value.split(':')[0])}:${timeAdjust(value.split(':')[1])}`
  };
  return value.toString()
}

const showShops = (list) => {
  return list.map(s =>
    <BusinessCard
      key={s.id}
      name={s.name}
      todayOpenHour={timeAdjust(s.today.lapses[0].open.hour)}
      todayOpenMinutes={timeAdjust(s.today.lapses[0].open.minute)}
      todayCloseHour={timeAdjust(s.today.lapses[0].close.hour)}
      todayCloseMinutes={timeAdjust(s.today.lapses[0].close.minute)}
      minimum={s.minimum}
      deliveryPrice={s.delivery_price}
      description={s.description}
      distance={decimalAdjust(s.distance)}
      deliveryTime={timeAdjust(s.delivery_time)}
      reviews={s.reviews.total}
    />
  )
}

export const BusinessListing = () => {
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
    <div className='biz-list'>
      {showShops(shops)}
    </div>
  )
}
