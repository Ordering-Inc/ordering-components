import React from 'react'

export const BusinessTypeFilterUI = (props) => {
  const {
    businessTypes,
    currentTypeSelected,
    handleChangeBusinessType,
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

      <select className='select-list' value={currentTypeSelected} onChange={(e) => handleChangeBusinessType(e.target.value)}>
        {businessTypes.map((type, i) => (
          <option key={i} value={type.value}> {type.key} </option>
        ))}
      </select><br /><br />

      <div className='filter-list'>
        {businessTypes.map((type, i) => (
          <button key={i} onClick={() => handleChangeBusinessType(type.value)} disabled={currentTypeSelected === type.value}>
            {type.key}
          </button>
        ))}
      </div><br />

      <span>OPTION SELECTED: {currentTypeSelected}</span>

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
