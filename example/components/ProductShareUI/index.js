import React from 'react'

export const ProductShareUI = (props) => {
  const {
    updateShowValue,
    showShareButton,
    urlToShare,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props
  return (
    <>
      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>{BeforeElement}</React.Fragment>
      ))}

      {beforeComponents.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      <button
        onClick={() => updateShowValue(!showShareButton)}
      >
        share
      </button>
      <div
        className='a2a_kit a2a_kit_size_32 a2a_floating_style a2a_vertical_style'
        data-a2a-url={urlToShare}
        style={{ visibility: showShareButton ? 'initial' : 'hidden', left: '0px', top: '110px' }}
      >
        <a className='a2a_button_facebook' />
        <a className='a2a_button_twitter' />
        <a className='a2a_button_email' />
        <a className='a2a_button_whatsapp' />
        <a className='a2a_dd' href='https://www.addtoany.com/share' />
      </div>

      {afterComponents.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}

      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>{AfterElement}</React.Fragment>
      ))}
    </>
  )
}
