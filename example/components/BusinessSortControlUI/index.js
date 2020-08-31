import React from 'react'

export const BusinessSortControlUI = (props) => {
  const {
    orderType,
    sortOptions,
    currentOptionSelected,
    onChangeSortOption,
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

      <select className='select-list' value={currentOptionSelected} onChange={(e) => onChangeSortOption(e.target.value)}>
        {sortOptions.map((type, i) => (
          <option key={i} value={type}> {type} </option>
        ))}
      </select><br /><br />

      <span>OPTION SELECTED: {currentOptionSelected}</span><br />
      <span>ORDER TYPE: {orderType}</span>

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
