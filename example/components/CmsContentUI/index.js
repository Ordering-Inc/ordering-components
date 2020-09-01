import React from 'react'
// import parse from 'html-react-parser'
export const CmsContentUI = (props) => {
  const {
    body,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props
  return (
    <>
      <h1>CMS</h1>
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
      <div dangerouslySetInnerHTML={{
        __html: body
      }}
      />
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
