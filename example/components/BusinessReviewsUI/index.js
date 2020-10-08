import React from 'react'

export const BusinessReviewsUI = (props) => {
  const {
    reviewsList,
    handleClickOption,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

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

      {!reviewsList.loading && !reviewsList.error ? (
        <>
          <div className='actions'>
            <button onClick={() => handleClickOption(null)}>Date</button>
            <button onClick={() => handleClickOption('all')}>All</button>
            <button onClick={() => handleClickOption(4)}>4+⭐️</button>
            <button onClick={() => handleClickOption(3)}>3+⭐️</button>
            <button onClick={() => handleClickOption(2)}>2+⭐️</button>
            <button onClick={() => handleClickOption(1)}>1+⭐️</button>
          </div>
          {reviewsList.reviews && reviewsList.reviews.length > 0 ? (
            <>
              <ul className='list'>
                {reviewsList.reviews.map((review, i) => (
                  <div key={review.id} style={{ borderBottom: '1px solid black', marginBottom: '10px' }}>
                    <li style={{ listStyle: 'none' }}>Comment: <b style={{ color: 'red', fontWeight: 'bold' }}>{review.comment}</b></li>
                    <li>Total: {review.total} ⭐️</li>
                    <li>Quality of product: {review.quality} ⭐️</li>
                    <li>Punctuality: {review.delivery} ⭐️</li>
                    <li>Service: {review.service} ⭐️</li>
                    <li>Product packaging: {review.package} ⭐️</li>
                  </div>
                ))}
              </ul>
            </>
          ) : (
            <p>❌ Not Found ❌</p>
          )}
        </>
      ) : (
        <>
          {reviewsList.error && reviewsList.error.length > 0 ? (
            reviewsList.error.map((e, i) => (
              <p key={i}>ERROR: [{e}]</p>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </>
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
