import React from 'react'

export const BussinessesComponent = ({ item, search, time }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '500px' }}>
      {search ? (
        item.name.indexOf(search) !== -1 ? (
          <li
            style={{ border: '1px solid red', margin: '10px', padding: '10px' }}
            key={item.id}
          >
            {item.name}
            <img style={{ width: '10%' }} src={item.logo} alt='bussinesses' />
            {time > item.today.lapses[0].open.hour &&
            time < item.today.lapses[0].close.hour ? <div>Open</div> : <div>close</div>}
          </li>
        ) : (
          ''
        )
      ) : (
        <li
          key={item.id}
          style={{ border: '1px solid red', margin: '10px', padding: '10px' }}
        >
          {item.name}
          <img style={{ width: '10%' }} src={item.logo} alt='bussinesses' />
          {time > item.today.lapses[0].open.hour &&
          time < item.today.lapses[0].close.hour
            ? <div>Open</div>
            : <div>close</div>}
        </li>
      )}
    </div>
  )
}
