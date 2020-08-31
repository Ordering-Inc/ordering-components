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
  const [languageSelected, setLanguageSelected] = useState(null)

  /**
   * This method is used for change the current language
   */
  const onChangeLanguage = (code) => {
    const language = languagesState.languages.find(language => language.code === code)
    if (props.handlerCustomChangeLanguage) {
      props.handlerCustomChangeLanguage(language)
      setLanguageSelected(language)
      return
    }
    props.onChangeLanguage(language)
    setLanguage(language)
  }

  /**
   * this method is used for load languages from API
   */
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

  /**
   * Selecting default if exist and there is not one in local storage
   */
  useEffect(() => {
    if (currentLanguage) {
      const language = languages.find(language => language.code === currentLanguage)
      setLanguage(language)
      setLanguageSelected(language)
    } else if (!languageState?.language?.code || !languageSelected?.code) {
      const language = languageState?.language?.code
        ? languageState?.language
        : languagesState?.languages?.find(language => language.default)
      if (language) {
        setLanguage(language)
        setLanguageSelected(language)
      }
    }
  }, [languages, languagesState])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          currentLanguage={props.handlerCustomChangeLanguage ? languageSelected?.code : languageState?.language?.code}
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
   * Return language selected
   */
  onChangeLanguage: PropTypes.func,
  /**
   * handlerCustomChangeLanguage, handler change behavior
   */
  handlerCustomChangeLanguage: PropTypes.func,
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
