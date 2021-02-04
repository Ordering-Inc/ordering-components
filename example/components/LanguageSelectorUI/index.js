import React from 'react'

export const LanguageSelectorUI = (props) => {
  const {
    currentLanguage,
    languagesState,
    handleChangeLanguage,
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

      {!languagesState.loading ? (
        <>
          <select className='languages-select' value={currentLanguage} onChange={(e) => handleChangeLanguage(e.target.value)}>
            {languagesState.languages?.length && languagesState.languages.map(language => (
              <option key={language.code} value={language.code}>{language.name}</option>
            ))}
          </select>
          <br /><br />
          <span>LANGUAGE SELECTED: {currentLanguage}</span>
        </>
      ) : (
        <span>Loading...</span>
      )}

      {!languagesState.loading && languagesState.error && languagesState.error.length > 0 && (
        languagesState.error.map((e, i) => (
          <p key={i}>ERROR: [{e}]</p>
        ))
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
