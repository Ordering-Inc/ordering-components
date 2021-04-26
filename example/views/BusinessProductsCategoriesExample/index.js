import React, { useEffect, useState } from 'react'

import { BusinessProductsCategoriesUI } from '../../components/BusinessProductsCategoriesUI'
import { BusinessProductsCategories } from '../../../src/components/BusinessProductsCategories'
import { TestComponent } from '../../components/TestComponent'
import { useApi } from '../../../src/contexts/ApiContext'

export const BusinessProductsCategoriesExample = () => {
  const [ordering] = useApi()
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: BusinessProductsCategoriesUI,
    onClickCategory: (e) => { console.log(e) },
    /**
     * Components types before business products categories
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after business products categories
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before business products categories
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after business products categories
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }

  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    const { content: { result } } = await ordering.businesses(41).categories().get()
    setCategories(result)
  }

  useEffect(() => {
    getCategories()
  }, [])

  return <BusinessProductsCategories {...props} categories={categories} />
}
