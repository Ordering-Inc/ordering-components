import React from 'react'
// import parse from 'html-react-parser'
export const CmsContentUI = (props) => {
  const {
    body,
    loading,
    error,
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
        loading && 'Loading...'
      }
      {
        body && (
          <div
            className='page'
            dangerouslySetInnerHTML={{
              __html: body
            }}
          />
        )
      }
      {
        (!loading && error) && error
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
