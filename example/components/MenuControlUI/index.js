import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const MenuControlUI = (props) => {
  const {
    dateSelected,
    menuLapsesList,
    futureDaysToShow,
    business,
    startDate,
    isDisabledDay,
    scheduleSelected,
    menuSelected,
    handleMenuSelected,
    handleDate,
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

      {business && Object.keys(business).length > 0 && (
        <>
          DATE SELECTED: {dateSelected}
          <h1>Preorder</h1>

          <img src={business.logo} alt='logo' width='80' height='80' />
          <span style={{ marginLeft: '5px' }}>{business.name}</span>

          <h3>1. Choose the menu you would like to see: </h3>

          {business?.menus?.length > 0 && business?.menus?.map((menu, i) => (
            <div
              key={i}
              style={{ border: '1px solid black', padding: '10px', width: '480px', marginBottom: '10px' }}
              onClick={() => handleMenuSelected(menu)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>{menu.name}</p>
                {menu.id === menuSelected && <strong>✅</strong>}
              </div>
              {menu.schedule?.length > 0 && menu.schedule?.map((item, i) => (
                <button key={i} disabled={!item.enabled}>
                  {daysOfWeek[i]}
                </button>
              ))}
            </div>
          ))}

          <br />
          {scheduleSelected && (
            <>
              <h3>2. Select your delivery time: </h3>
              <DatePicker
                selected={startDate}
                minDate={moment().toDate()}
                showTimeSelect
                filterDate={isDisabledDay}
                timeIntervals={15}
                timeFormat='HH:mm'
                dateFormat='MMMM d, yyyy HH:mm'
                includeDates={futureDaysToShow()}
                includeTimes={menuLapsesList()}
                placeholderText='Select a date'
                onChange={date => handleDate(date)}
              />
            </>
          )}
          <br />
          <br />
          <button onClick={() => props.onSendMenuInfo()}>Go to Menu</button>
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
