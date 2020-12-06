import React from 'react'

export const ExportCSVUI = (props) => {
  const {
    actionStatus,
    handleGetCsvExport,
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

      <div className='csv-export'>
        <p>CSV Export</p>
        <button onClick={() => handleGetCsvExport()}>Export</button>
        {actionStatus.loading && (
          <p>loading...</p>
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
