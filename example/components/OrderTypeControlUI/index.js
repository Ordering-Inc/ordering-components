import React from 'react'

export const OrderTypeControlUI = ({ typeSelected, orderTypes, handleChangeOrderType }) => {
  const typeNames = [null, 'Delivery', 'Pickup', 'Eat in', 'Drive thru', 'Curbside']

  return (
    <>
      Current order type: {typeSelected} {typeNames[typeSelected]}
      <div>
        Buttons control<br />
        {
          orderTypes.map(orderType => (
            <button key={orderType} type='button' onClick={() => handleChangeOrderType(orderType)}>
              {orderType}. {typeNames[orderType]} {orderType === typeSelected && '(Selected)'}
            </button>
          ))
        }
      </div>
      <div>
        Select control<br />
        <select name='orderType' value={typeSelected} onChange={(e) => handleChangeOrderType(e.target.value * 1)}>
          <option value='' disabled>Select an order type</option>
          {
            orderTypes.map(orderType => (
              <option key={orderType} value={orderType}>{orderType}. {typeNames[orderType]}</option>
            ))
          }
        </select>
      </div>
    </>
  )
}
