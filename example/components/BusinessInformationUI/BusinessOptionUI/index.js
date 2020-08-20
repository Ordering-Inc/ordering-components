import React from 'react'

import { GoogleMapsMap } from '../../../../src/components/GoogleMaps'

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const BusinessOptionUI = (props) => {
  const {
    label,
    contentData,
    optionToShow,
    locationData,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const openingTime = ({ open, close }) => {
    const checkTime = (val) => val < 10 ? `0${val}` : val
    return `${checkTime(open?.hour)}:${checkTime(open?.minute)} - ${checkTime(close?.hour)}:${checkTime(close?.minute)}`
  }

  const videoUrl = (ytUrl) => {
    const id = ytUrl.split('/')[3]
    return `https://www.youtube.com/embed/${id}`
  }

  const handleClickOption = (option) => {
    const val = option === optionToShow ? null : option
    props.handleChangeOption(val)
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

      <button onClick={() => handleClickOption(label)}>{label}</button>
      <hr />
      {(optionToShow === label && label !== 'Business Location') && (
        <>
          {contentData.map((item, i) => (
            <div key={i}>
              {label === 'Business Opening Time' && (
                <p>{daysOfWeek[i]} {openingTime(item.lapses[0])}</p>
              )}
              {label === 'Photo Gallery' && (
                <img src={item.file} alt={`photo-${i}`} width='191' height='128' />
              )}
              {label === 'Video Gallery' && (
                <iframe src={videoUrl(item.video)} width='444' height='150' />
              )}
            </div>
          ))}
        </>
      )}
      {optionToShow === 'Business Location' && label === 'Business Location' && (
        <>
          <span>{locationData.address}</span>
          <span>{locationData.address_notes}</span>
          <span>{locationData.location.lag}</span>
          <span>{locationData.location.lng}</span>
          <span>{locationData.location.zipcode}</span>
          <span>{locationData.location.zoom}</span>
          {/* <GoogleMapsMap apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk' /> */}
          <GoogleMapsMap apiKey='' />
        </>
      )}
      <hr />

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
