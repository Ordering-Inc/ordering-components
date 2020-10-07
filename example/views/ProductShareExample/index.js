import React, { useEffect, useState } from 'react'

import { ProductShare } from '../../../src/components/ProductShare'
import { ProductShareUI } from '../../components/ProductShareUI'
import { TestComponent } from '../../components/TestComponent'
import { useApi } from '../../../src/contexts/ApiContext'

export const ProductShareExample = () => {
  const [ordering] = useApi()
  const [bussinessName, setBussinessName] = useState('')
  const [categoryID, setCategoryID] = useState(undefined)
  const [productID, setProductID] = useState(undefined)

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    const { response } = await ordering.businesses(41).get()
    const productShown = response.data.result
    setBussinessName(productShown.name.toLowerCase())
    setCategoryID(productShown.categories[0].id)
    setProductID(productShown.categories[0].products[0].id)
  }

  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: ProductShareUI,

    /**
     * Current product business name
     */
    bussinessName,

    /**
     * product category id
     */
    categoryID,

    /**
     * product id
     */
    productID,

    /**
     * Example url to display the name, description and image properly in any social red
     */
    url: `https://orderingweb.ordering.co/${bussinessName}?category=${categoryID}&product=${productID}`,

    /**
     * url for the widget of addToAny
     */
    addtoanySrc: 'https://static.addtoany.com/menu/page.js',
    /**
     * Components types before product share
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after product share
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before product share
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after product share
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }

  return <ProductShare {...props} />
}
