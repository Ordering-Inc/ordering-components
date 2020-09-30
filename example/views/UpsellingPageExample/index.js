import React, { useEffect, useState } from 'react'

import { UpsellingPage } from '../../../src/components/UpsellingPage'
import { UpsellingPageUI } from '../../components/UpsellingPageUI'
import { useApi } from '../../../src/contexts/ApiContext'

export const UpsellingPageExample = () => {
  const [productsList, setProductsList] = useState({ products: [], loading: true, error: false })
  const [ordering] = useApi()

  useEffect(() => {
    getProducts()
  }, [])

  const props = {

    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: UpsellingPageUI,
    /**
     *  Products of the current business is required!
     */
    products: productsList.products,
    /**
     * Function to save event
     */
    onSave: (productCart) => {
      console.log(productCart)
    }
  }

  const getProducts = async () => {
    try {
      setProductsList({
        ...productsList,
        loading: true
      })
      const { content: { result } } = await ordering
        .businesses(41)
        .products()
        .parameters({ type: 1 })
        .get()

      setProductsList({
        ...productsList,
        loading: false,
        products: result
      })
    } catch (error) {
      setProductsList({
        ...productsList,
        loading: false,
        error
      })
    }
  }

  return (
    <UpsellingPage {...props} />
  )
}
