import React from 'react'

import { LanguageSelectorUI } from '../../components/LanguageSelectorUI'
import { LanguageSelector } from '../../../src/components/LanguageSelector'
import { TestComponent } from '../../components/TestComponent'

export const LanguageSelectorExample = ({ ordering }) => {
  const props = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: LanguageSelectorUI,
    /**
     * currentLanguage, this must be containt current language to show in the app
     */
    currentLanguage: 'ES',
    /**
     * languages, this array must be containt a list of available languages
     */
    languages: [
      { code: 'ES', name: 'Spanish' },
      { code: 'EN', name: 'English' },
      { code: 'FR', name: 'French' }
    ],
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
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after language selector
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <LanguageSelector {...props} />
}
