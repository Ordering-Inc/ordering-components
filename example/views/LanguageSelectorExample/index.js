import React from 'react'

import { LanguageSelectorUI } from '../../components/LanguageSelectorUI'
import { LanguageSelector } from '../../../src/components/LanguageSelector'
import { TestComponent } from '../../components/TestComponent'

export const LanguageSelectorExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: LanguageSelectorUI,
    /**
     * currentLanguage, this must be containt current language to show in the app
     */
    currentLanguage: '',
    /**
     * languages, this array must be containt a list of available languages
     */
    languages: [
      { code: 'EN', name: 'English' },
      { code: 'FR', name: 'French' }
    ],
    /**
     * Return language selected
     */
    onChangeLanguage: (e) => { console.log(e) },
    /**
     * handlerCustomChangeLanguage, handler change behavior
     */
    handlerCustomChangeLanguage: null,
    /**
     * Components types before language selector
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after language selector
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before language selector
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after language selector
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }

  return <LanguageSelector {...props} />
}
