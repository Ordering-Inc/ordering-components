import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useLanguage } from '../../../src/contexts/LanguageContext'

export const LanguageSelector = (props) => {
  const {
    ordering,
    currentLanguage,
    languages,
    UIComponent
  } = props

  const [languagesState, setLanguageState] = useState({ loading: true, languages })
  const [languageState, , setLanguage] = useLanguage()

  /**
   * This method is used for change the current language
   */
  const onChangeLanguage = (code) => {
    const language = languagesState.languages.find(language => language.code === code)
    setLanguage(language)
  }

  const loadLanguages = async () => {
    try {
      setLanguageState({ ...languagesState, loading: true })
      const { content: { error, result } } = await ordering
        .languages()
        .where([{ attribute: 'enabled', value: true }])
        .get()

      setLanguageState({
        ...languagesState,
        loading: false,
        languages: error ? [] : result
      })
    } catch (err) {
      setLanguageState({ ...languagesState, loading: false })
    }
  }

  useEffect(() => {
    if (languages.length) {
      setLanguageState({
        ...languagesState,
        loading: false
      })
    } else {
      loadLanguages()
    }
  }, [])

  useEffect(() => {
    if (currentLanguage) {
      const language = languages.find(language => language.code === currentLanguage)
      setLanguage(language)
    }
  }, [languages])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          currentLanguage={languageState?.language?.code}
          languages={languagesState}
          handleChangeLanguage={onChangeLanguage}
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
