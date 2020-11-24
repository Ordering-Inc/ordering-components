import React, { useEffect, useState } from 'react'
import { useLanguage } from '../../../src/contexts/LanguageContext'
import { useApi } from '../../../src/contexts/ApiContext'

export const LanguagesExample = (props) => {
  const [ordering] = useApi()
  const [languagesState, setLanguageState] = useState({ loading: true, languages: [] })
  const [languageState, t, setLanguage, refreshTranslations] = useLanguage()

  const loadLanguages = async () => {
    try {
      setLanguageState({ ...languagesState, loading: true })
      const { content: { error, result } } = await ordering.languages().get()
      setLanguageState({
        ...languagesState,
        loading: false,
        languages: error ? [] : result
      })
    } catch (err) {
      setLanguageState({ ...languagesState, loading: false })
    }
  }

  const handleChangeLanguages = (e) => {
    const language = languagesState.languages.find(language => language.code === e.target.value)
    setLanguage(language)
  }

  useEffect(() => {
    loadLanguages()
  }, [])

  return (
    <>
      <h1>Translations</h1>
      <select value={languageState.language?.code} onChange={handleChangeLanguages} disabled={languagesState.loading || languageState.loading}>
        <option value=''>Select a language</option>
        {
          languagesState.languages.map(language => (
            <option key={language.id} value={language.code}>{language.name}</option>
          ))
        }
      </select>
      <p>Word `About` translation: {t('ABOUT')}</p>
      <p>Translation with fallback: {t('ABOUT_THIS', 'About this')}</p>
      <p>Direction: {languageState.language?.rtl ? 'RTL' : 'LTR'}</p>
      <br />
      <button type='button' onClick={() => refreshTranslations()} disabled={languageState.loading}>Refresh translations</button>
    </>
  )
}
