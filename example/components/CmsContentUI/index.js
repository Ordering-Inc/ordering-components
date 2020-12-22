import React from 'react'
// import parse from 'html-react-parser'
export const CmsContentUI = (props) => {
  const {
    cmsState,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props
  return (
    <>
      <h1>Pages</h1>
      {
        beforeElements.map((BeforeElement, i) => (
          <React.Fragment key={i}>
            {BeforeElement}
          </React.Fragment>
        ))
      }
      {
        beforeComponents.map((BeforeComponent, i) => <BeforeComponent key={i} {...props} />)
      }
      {
        cmsState.loading && 'Loading...'
      }
      {
        cmsState.body && (
          <div
            className='page'
            dangerouslySetInnerHTML={{
              __html: cmsState.body
            }}
          />
        )
      }
      {
        (!cmsState.loading && cmsState.error) && 'Ups... An error has ocurred'
      }
      {
        afterComponents.map((AfterComponent, i) => <AfterComponent key={i} {...props} />)
      }
      {
        afterElements.map((AfterElement, i) => (
          <React.Fragment key={i}>
            {AfterElement}
          </React.Fragment>
        ))
      }
    </>
  )
}
