import React, { useState } from 'react'

export const PaymentOptionCashUI = (props) => {
  const {
    total,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements,
    onChangeData
  } = props

  const [value, setvalue] = useState(null)

  const handleChangeCash = (e) => {
    let cash = parseFloat(e?.target?.value)
    cash = isNaN(cash) ? null : cash
    setvalue(cash)
    onChangeData && onChangeData({ cash })
  }

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

      <form>
        <div>
          <label>Don’t have exact amount? Let us know with how much will you pay </label>
          <input
            name='cash'
            type='text'
            placeholder='0'
            onChange={handleChangeCash}
          />
        </div>
        {value && parseFloat(value) < total && (
          <p className='error'>This value must be greater than order total: {total}</p>
        )}
      </form>

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
