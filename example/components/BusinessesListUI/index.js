import React, { useEffect, useState } from 'react'
import { range } from 'lodash'
import { SingleBusinessCardUI } from '../../components/SingleBusinessCardUI'

const CATEGORIES = [null, 'Food', 'Alcohol', 'Groceries', 'Laundry']
const SORT_BY_OPTIONS = [
  { key: 'Distance', value: 'distance' },
  { key: 'Rating', value: 'reviews' },
  { key: 'Newest', value: 'createdAt' },
  { key: 'A to Z', value: 'alpha' },
  { key: 'Minimum Order', value: 'minimum' },
  { key: 'Pickup time', value: 'pickup_time' },
  { key: 'Delivery time', value: 'delivery_time' }
]
const BUSINESSES_TYPE = [{ key: 'Delivery', value: 'delivery_time' }, { key: 'Pick up', value: 'pickup_time' }]

export const BusinessesListUI = (props) => {
  const {
    businessesList,
    pagination,
    goToPage,
    paginationSettings,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const { loading, error, businesses, filterValues } = businessesList
  const [optionsToshow, setOptionsToShow] = useState(SORT_BY_OPTIONS)
  const [currentTime, setCurrentTime] = useState('')

  const handlerLoadMoreBusinesses = () => {
    props.onLoadBusinesses(true)
  }

  const handlerFilterValues = (value) => {
    props.onFilterValues(value)
  }

  const formatNumber = (num) => {
    return Math.round(num * 1e2) / 1e2
  }

  useEffect(() => {
    const propToDelete = filterValues.business_type === 'delivery_time' ? 'pickup_time' : 'delivery_time'
    setOptionsToShow(SORT_BY_OPTIONS.filter(option => option.value !== propToDelete))
  }, [filterValues])

  useEffect(() => {
    const interval = setInterval(() => {
      const currentHour = new Date().getHours()
      const currentMinute = new Date().getMinutes()
      setCurrentTime(`${currentHour}:${currentMinute}`)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

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

      <div>
        {!loading && businesses.length > 0 ? (
          <h1>{businesses.length} Businesses</h1>
        ) : (
          <h1>Businesses</h1>
        )}

        <div>
          {BUSINESSES_TYPE.map(type => (
            <button key={type.key} onClick={(e) => handlerFilterValues({ key: 'business_type', value: type.value })}>
              {type.key}
            </button>
          ))}
        </div>
      </div>
      <hr />

      <div>
        {CATEGORIES.map(category => (
          <button key={category} type='button' onClick={(e) => handlerFilterValues({ key: 'category', value: category })}>
            {category}
            {!category && 'All'}
          </button>
        ))}
      </div>

      <div>
        <input type='text' onChange={(e) => handlerFilterValues({ key: 'search', value: e.target.value })} />
        <select defaultValue='Sort by' onChange={(e) => handlerFilterValues({ key: 'sort_by', value: e.target.value })}>
          <option value='Sort by' disabled>Sort by</option>
          {optionsToshow.map(option => (
            <option key={option.key} value={option.value}>{option.key}</option>
          ))}
        </select>
      </div>
      <hr />

      {!loading && !error ? (
        <div>
          {businesses && businesses.length > 0 ? (
            businesses.map(business => (
              <SingleBusinessCardUI
                currentTime={currentTime}
                key={business.id}
                logo={business.logo}
                name={business.name}
                timetoOpen={business.today.lapses[0].open}
                // timeToclose={business.today.lapses[0].close}
                timeToclose={{ hour: 17, minute: 26 }}
                minimum={business.minimum}
                deliveryPrice={business.delivery_price}
                description={business.description}
                distance={formatNumber(business.distance)}
                deliveryTime={business.delivery_time}
                pickupTime={business.pickup_time}
                reviews={business.reviews.total}
              />
            ))
          ) : (
            <p>No have businesses 😥</p>
          )}
        </div>
      ) : (
        <div>
          {error && error.length > 0 ? (
            error.map((e, i) => (
              <p key={i}>ERROR: [{e}]</p>
            ))
          ) : (
            <p>Loading businesses...</p>
          )}
        </div>
      )}

      {paginationSettings.controlType === 'pages' ? (
        <div>
          Pagination control: {' '}
          {pagination.totalPages &&
            pagination.currentPage < pagination.totalPages &&
            range(1, pagination.totalPages).map(i => (
              <button key={i} type='button' onClick={() => goToPage(i)}>
                Page {i} {i === pagination.currentPage && '(Current)'}
              </button>
            ))}
        </div>
      ) : (
        <div>
          Load more control:{' '}
          {pagination.totalPages &&
            pagination.currentPage < pagination.totalPages &&
              <button type='button' onClick={handlerLoadMoreBusinesses}>
                Load More
              </button>}
        </div>
      )}

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
