import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const LanguageSelector = (props) => {
  const {
    currentLanguage,
    languages,
    UIComponent
  } = props

  const [languageSelected, setLanguageSelected] = useState(currentLanguage)

  const onChangeLanguage = (code) => {
    setLanguageSelected(code)
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          currentLanguage={languageSelected}
          languages={languages}
          onChangeLanguage={onChangeLanguage}
        />
      )}
    </>
  )
}

LanguageSelector.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: PropTypes.object.isRequired,
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * currentLanguage, this must be containt current language to show in the app
   */
  currentLanguage: PropTypes.string,
  /**
   * languages, this array must be containt a list of available languages
   */
  languages: PropTypes.arrayOf(PropTypes.object),
  /**
   * Components types before language selector
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after language selector
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before language selector
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after language selector
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

LanguageSelector.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
