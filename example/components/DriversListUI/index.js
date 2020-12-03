import React from 'react'

export const DriversListUI = (props) => {
  const {
    driversList,
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

      <div className='drivers-list'>
        {!driversList.loading && !driversList.error ? (
          <>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {driversList.drivers && driversList.drivers.length > 0 ? (
                driversList.drivers.map(driver => (
                  <div key={driver.id} style={{ border: '1px solid gray', width: '300px', padding: '10px', marginBottom: '10px', marginRight: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      {driver?.photo ? (
                        <img src={driver.photo} alt={driver.name} height='60' width='60' />
                        ) : (
                        <p>No photo </p>
                      )}
                      <span>{driver.name} {driver.lastname}</span>
                      <span>{driver?.cellphone}</span>
                    </div>
                    <div>
                      <p>Assigned orders: {driver?.assigned_orders_count}</p>
                      <p>score: {driver?.qualification || 0}</p>
                      <p>location: {driver?.location?.lat} {driver?.location?.lng}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No have drivers 😥</p>
              )}
            </div>
          </>
        ) : (
          <div>
            {driversList.error && driversList.error.length > 0 ? (
              driversList.error.map((e, i) => (
                <p key={i}>ERROR: [{e}]</p>
              ))
            ) : (
              <p>Loading drivers...</p>
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
