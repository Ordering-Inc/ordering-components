import React from 'react'

import { ExportCSVUI } from '../../components/ExportCSVUI'
import { ExportCSV as ExportCSVController } from '../../../src/components/ExportCSV'
import { TestComponent } from '../../components/TestComponent'

export const ExportCSVExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ExportCSVUI,
    /**
     * filter values to export filtered orders ,here just driver id
     */
    filterValues: {
      statuses: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      driverIds: [9]
    },
    /**
     * Components types before products list
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after products list
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before products list
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after products list
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }

  return <ExportCSVController {...props} />
}
