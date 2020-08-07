import React from 'react'
import { range } from 'lodash'

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

  const handlerLoadMoreBusinesses = () => {
    props.onLoadBusinesses(true)
  }

  return (
    <>
      <h1>Businesses List</h1>

      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}

      {beforeComponents.map(
        (BeforeComponent, i) => <BeforeComponent key={i} {...props} />
      )}

      {!businessesList.loading && !businessesList.error ? (
        <div>
          {businessesList.businesses && businessesList.businesses.length > 0 ? (
            businessesList.businesses.map(business => (
              <div key={business.id}>
                <br />
                <h1>{business.name}</h1>
                <p>Minimun order: ${business.minimum}.00</p>
                <p>Delivery Fee: ${business.delivery_price}.00</p>
                <p>Description: {business.description}</p>
                <p>Distance: {business.distance}</p>
                <p>Delivery time: {business.delivery_time}</p>
                <hr />
              </div>
            ))
          ) : (
            <p>No have businesses 😥</p>
          )}
        </div>
      ) : (
        <div>
          {businessesList.error && businessesList.error.length > 0 ? (
            businessesList.error.map((e, i) => (
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
