import React from 'react'

import { GoogleMapsMap } from '../../../../src/components/GoogleMaps'
import { useConfig } from '../../../../src/contexts/ConfigContext'

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const BusinessOptionUI = (props) => {
  const {
    label,
    contentData,
    optionToShow,
    locationData,
    formatUrlVideo,
    openingTime,
    name,
    handleClickOption,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const [{ configs }] = useConfig()

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

      <button onClick={() => handleClickOption(label)} name={name}>{label}</button>
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
                <iframe src={formatUrlVideo(item.video)} width='560' height='315' frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen />
              )}
            </div>
          ))}
        </>
      )}
      {optionToShow === 'Business Location' && label === 'Business Location' && (
        <>
          <span>{locationData.address}</span>
          <span>{locationData.address_notes}</span>
          <GoogleMapsMap
            apiKey={configs?.google_maps_api_key?.value}
            location={locationData.location}
            mapControls={locationData.googleMapsControls}
            maxLimitLocation={500}
            setErrors={(e) => { console.log(e) }}
          />
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
