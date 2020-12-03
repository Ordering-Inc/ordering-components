import React from 'react'

export const OrdersOverviewUI = (props) => {
  const {
    ordersOverviewList,
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

      <div className='orders-overview'>
        {!ordersOverviewList.loading && !ordersOverviewList.error ? (
          <>
            <div style={{border: '1px solid gray'}}>
              {ordersOverviewList.overview && Object.keys(ordersOverviewList.overview).length > 0 ? (
                <div>
                  <p>Orders overview</p>
                  <p>Total: {ordersOverviewList?.overview?.total || 0}</p>
                  <p>Pending: {ordersOverviewList?.overview?.pending || 0}</p>
                  <p>In progress: {ordersOverviewList?.overview?.inProgress || 0}</p>
                  <p>Completed: {ordersOverviewList?.overview?.completed || 0}</p>
                  <p>Cancelled: {ordersOverviewList?.overview?.cancelled || 0}</p>
                </div>
              ) : (
                <p>No have orders 😥</p>
              )}
            </div>
          </>
        ) : (
          <div>
            {ordersOverviewList.error && ordersOverviewList.error.length > 0 ? (
              ordersOverviewList.error.map((e, i) => (
                <p key={i}>ERROR: [{e}]</p>
              ))
            ) : (
              <p>Loading overview...</p>
            )}
          </div>
        )}
      </div>

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
