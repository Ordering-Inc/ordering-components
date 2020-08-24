import React from 'react'

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const MenuControlUI = (props) => {
  const {
    timeSelected,
    business,
    handleSchedule,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  return (
    <div className='menu-control'>
      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}

      {beforeComponents.map(
        (BeforeComponent, i) => <BeforeComponent key={i} {...props} />
      )}

      {Object.keys(business).length > 0 && (
        <>
          <h1>Preorder</h1>

          <img src={business.logo} alt='logo' width='80' height='80' />
          <span style={{ marginLeft: '5px' }}>{business.name}</span>

          <h3>1. Choose the menu you would like to see: </h3>

          <div style={{ border: '1px solid black', padding: '10px', width: '480px' }}>
            <p>Everyday Menu ✔️</p>
            {business.schedule?.length > 0 && business.schedule.map((item, i) => (
              <button key={i} onClick={() => handleSchedule(item.lapses[0])}>{daysOfWeek[i]}</button>
            ))}
          </div>

          <span>Time selected: {timeSelected}</span>
        </>
      )}

      {afterComponents.map(
        (AfterComponent, i) => <AfterComponent key={i} {...props} />
      )}

      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </div>
  )
}
