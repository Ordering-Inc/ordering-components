import React from 'react'
import { BusinessOptionUI } from './BusinessOptionUI'
import { BusinessOption } from '../../../src/components/BusinessInformation/BusinessOption'

export const BusinessInformationUI = (props) => {
  const {
    businessSchedule,
    businessPhotos,
    businessVideos,
    businessLocation,
    optionToShow,
    onChangeOption,
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

      {businessSchedule && businessSchedule.length > 0 && (
        <BusinessOption
          UIComponent={BusinessOptionUI}
          label='Business Opening Time'
          contentData={businessSchedule}
          optionToShow={optionToShow}
          handleChangeOption={onChangeOption}
          name='time'
        />
      )}
      {businessLocation && Object.keys(businessLocation).length > 0 && (
        <BusinessOption
          UIComponent={BusinessOptionUI}
          label='Business Location'
          locationData={businessLocation}
          optionToShow={optionToShow}
          handleChangeOption={onChangeOption}
          name='location'
        />
      )}
      {businessPhotos && businessPhotos.length > 0 && (
        <BusinessOption
          UIComponent={BusinessOptionUI}
          label='Photo Gallery'
          contentData={businessPhotos}
          optionToShow={optionToShow}
          handleChangeOption={onChangeOption}
          name='photos'
        />
      )}
      {businessVideos && businessVideos.length > 0 && (
        <BusinessOption
          UIComponent={BusinessOptionUI}
          label='Video Gallery'
          contentData={businessVideos}
          optionToShow={optionToShow}
          handleChangeOption={onChangeOption}
          name='videos'
        />
      )}

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
