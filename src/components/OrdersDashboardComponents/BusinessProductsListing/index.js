import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../../contexts/SessionContext'
import { useEvent } from '../../../contexts/EventContext'

export const BusinessProductsListing = (props) => {
  const {
    isSearchByName,
    isSearchByDescription,
    slug,
    categoryId,
    productId,
    isAllCategoryProducts,
    isInitialRender,
    ordering,
    UIComponent
  } = props

  const [{ token }] = useSession()
  const [events] = useEvent()
  const [categorySelected, setCategorySelected] = useState(null)
  const [searchValue, setSearchValue] = useState(null)
  const [businessState, setBusinessState] = useState({ business: {}, menus: null, loading: true, error: null })
  const [categoriesState, setCategoriesState] = useState({})
  const [requestsState, setRequestsState] = useState({})
  const [productModal, setProductModal] = useState({ product: null, loading: false, error: null })
  const [openCategories, setOpenCategories] = useState({ values: [] })
  const [businessSlug, setBusinessSlug] = useState(slug)
  const [isUpdateMode, setIsUpdateMode] = useState(false)
  const [taxes, setTaxes] = useState({})
  const [fees, setFees] = useState({})
  const [formTaxState, setFormTaxState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [formFeeState, setFormFeeState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [businessTypes, setBusinessTypes] = useState([])
  const [siteState, setSiteState] = useState({ site: null, loading: false, error: null })
  const categoryStateDefault = {
    loading: true,
    pagination: { currentPage: 0, pageSize: 10, totalItems: null, totalPages: 0, nextPageItems: 10 },
    products: []
  }

  const [categoryState, setCategoryState] = useState(categoryStateDefault)
  const [errors, setErrors] = useState(null)
  const [errorQuantityProducts, setErrorQuantityProducts] = useState(false)

  /**
   * Change category selected
   * @param {Object} category Category object
   */
  const handleChangeCategory = (e, category) => {
    if (e === null && category === null) {
      setCategorySelected(null)
    }
    const isInvalid = e?.target?.closest && (e?.target?.closest('.business_enable_control') || e.target.closest('.business_actions'))
    if (isInvalid || category?.id === categorySelected?.id) return
    setIsUpdateMode(false)
    if (category?.subcategories?.length) {
      if (!category?.parent_category_id) {
        openCategories.values = []
      }
      if (openCategories.values.includes(category?.id)) {
        openCategories.values = openCategories.values.filter(categoryId => categoryId !== category?.id)
      } else {
        openCategories.values.push(category?.id)
      }
      setOpenCategories({
        ...openCategories,
        values: openCategories.values
      })
    }
    if (category?.id === null) {
      setOpenCategories({ ...openCategories, values: [] })
    }
    setCategorySelected(category)
  }

  /**
   * Change search value
   * @param {string} search search string
   */
  const handleChangeSearch = (search) => {
    setSearchValue(search)
  }

  const isMatchSearch = (name, description) => {
    if (!searchValue) return true
    return (name && (name.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByName)) ||
      (description && (description.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByDescription))
  }

  const getProducts = async (newFetch, currentPage, currentPageSize) => {
    if (!businessState?.business?.lazy_load_products_recommended) {
      const categoryState = {
        ...categoryStateDefault,
        loading: false
      }
      if (categorySelected) {
        let categoryFinded
        const _categories = [...businessState?.business?.categories]
        _categories.forEach(function iterate (category) {
          if (category?.id === categorySelected?.id) {
            categoryFinded = category
          }
          Array.isArray(category?.subcategories) && category.subcategories.forEach(iterate)
        })

        let productsFinded = [...categoryFinded?.products]
        if (categoryFinded && categoryFinded?.subcategories) {
          categoryFinded.subcategories.forEach(function iterate (category) {
            productsFinded = [...productsFinded, ...category.products]
            Array.isArray(category?.subcategories) && category.subcategories.forEach(iterate)
          })
        }

        let productsFiltered = productsFinded?.filter(
          product => isMatchSearch(product.name, product.description)
        )

        if (!productsFiltered) {
          productsFiltered = categorySelected?.products?.filter(
            product => isMatchSearch(product.name, product.description)
          )
        }
        categoryState.products = productsFiltered || []
      } else {
        const productsFiltered = businessState?.business?.categories?.reduce(
          (products, category) => {
            if (category.products) {
              return [...products, ...category.products]
            }
            return [...products]
          }
          , []
        ).filter(
          product => isMatchSearch(product.name, product.description)
        )
        categoryState.products = productsFiltered || []
      }

      setCategoryState({
        ...categoryState,
        products: [...new Map(categoryState.products.map(item => [item.id, item])).values()]
      })
      return
    }

    const categoryKey = searchValue
      ? 'search'
      : categorySelected?.id === 'featured'
        ? 'featured'
        : categorySelected?.id
          ? `categoryId:${categorySelected?.id}`
          : 'all'

    const categoryState = categoriesState[categoryKey] || categoryStateDefault
    const pagination = categoryState.pagination

    if (!isUpdateMode) {
      setCategoryState({ ...categoryState, loading: true })
    }

    const parameters = {
      page: currentPage || (newFetch ? 1 : pagination.currentPage + 1),
      page_size: currentPageSize || pagination.pageSize
    }

    let where = null
    const searchConditions = []
    if (searchValue) {
      if (isSearchByName) {
        searchConditions.push(
          {
            attribute: 'name',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${searchValue}%`)
            }
          }
        )
      }
      if (isSearchByDescription) {
        searchConditions.push(
          {
            attribute: 'description',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${searchValue}%`)
            }
          }
        )
      }
    }

    where = {
      conditions: searchConditions,
      conector: 'OR'
    }

    try {
      const functionFetch = categorySelected?.id && categorySelected?.id !== 'featured'
        ? ordering.businesses(businessState.business?.id).categories(categorySelected?.id).products()
        : ordering.businesses(businessState.business?.id).products()
      const source = {}
      requestsState.products = source
      setRequestsState({ ...requestsState })
      const productEndpoint = where.conditions.length > 0
        ? functionFetch.parameters(parameters).where(where)
        : functionFetch.parameters(parameters)
      const { content: { error, result, pagination } } = await productEndpoint.get({ cancelToken: source })
      if (!error) {
        const newcategoryState = {
          pagination: {
            ...categoryState.pagination,
            pageSize: pagination.page_size === 0 ? categoryState.pagination.pageSize : pagination.page_size,
            currentPage: pagination.current_page,
            totalItems: pagination.total,
            totalPages: pagination.total_pages
          },
          loading: false,
          products: newFetch ? [...result] : [...categoryState.products, ...result]
        }

        categoriesState[categoryKey] = newcategoryState
        setCategoryState({
          ...newcategoryState,
          products: [...new Map(newcategoryState.products.map(item => [item.id, item])).values()]
        })
        setCategoriesState({ ...categoriesState })
      } else {
        setErrors(result)
      }
    } catch (err) {
      setErrors([err.message])
    }
  }

  const getProduct = async () => {
    if (categoryId && productId && businessState.business?.id) {
      try {
        setProductModal({
          ...productModal,
          loading: true
        })
        const source = {}
        requestsState.product = source

        const { content: { result } } = await ordering
          .businesses(businessState.business?.id)
          .categories(categoryId)
          .products(productId)
          .get({ cancelToken: source })
        const product = Array.isArray(result) ? null : result
        setProductModal({
          ...productModal,
          product,
          loading: false
        })
      } catch (e) {
        setProductModal({
          ...productModal,
          loading: false,
          error: [e]
        })
      }
    }
  }

  const getTaxes = async () => {
    const taxesObject = {}
    setFormTaxState({
      ...formTaxState,
      loading: true
    })
    const response = await fetch(`${ordering.root}/taxes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const { error, result } = await response.json()
    if (!error) {
      result.forEach(tax => (taxesObject[`id:${tax?.id}`] = tax))
      setTaxes(taxesObject)
      return
    }
    setFormTaxState({
      ...formTaxState,
      result: {
        error: true,
        result: taxesObject
      },
      loading: false
    })
  }

  const getFees = async () => {
    const feesObject = {}
    setFormFeeState({
      ...formFeeState,
      loading: true
    })
    const response = await fetch(`${ordering.root}/fees`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const { error, result } = await response.json()
    if (!error) {
      result.forEach(fee => (feesObject[`id:${fee?.id}`] = fee))
      setFees(feesObject)
      return
    }
    setFormFeeState({
      ...formFeeState,
      result: {
        error: true,
        result: feesObject
      },
      loading: false
    })
  }

  /**
   * Method to get the themes from API
   */
  const getSites = async () => {
    try {
      setSiteState({ ...siteState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/sites`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        const site = result.find(site => site.code === 'website')
        setSiteState({ ...siteState, loading: false, site: site })
      } else {
        setSiteState({ ...siteState, loading: false, error: result })
      }
    } catch (err) {
      setSiteState({ ...siteState, loading: false, error: [err.message] })
    }
  }

  const getBusinessTypes = async () => {
    try {
      const response = await fetch(`${ordering.root}/business_types?where=[{"attribute":"enabled","value":true}]`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      const { error, result } = await response.json()
      if (!error) {
        setBusinessTypes(result)
      }
    } catch (error) {
      console.log(error?.message)
    }
  }

  useEffect(() => {
    if (isInitialRender) {
      getProduct()
    }
  }, [JSON.stringify(businessState.business?.id), isInitialRender])

  useEffect(() => {
    setBusinessSlug(slug)
  }, [slug])

  const getBusiness = async () => {
    try {
      setBusinessState({ ...businessState, loading: true })
      const source = {}
      requestsState.business = source
      setRequestsState({ ...requestsState })

      const { content: { result } } = await ordering.businesses(businessSlug).asDashboard().get()

      if (!result?.categories || result?.categories?.length === 0) {
        setErrorQuantityProducts(true)
      }

      setBusinessState({
        ...businessState,
        business: result,
        loading: false
      })
    } catch (err) {
      setBusinessState({
        ...businessState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to update the business
   */
  const handleUpdateBusinessState = (result) => {
    setIsUpdateMode(true)
    const business = { ...businessState?.business }
    Object.assign(business, result)
    if (categorySelected) {
      business.categories.forEach(function iterate (category) {
        if (category?.id === categorySelected?.id) {
          setCategorySelected(category)
        }
        Array.isArray(category?.subcategories) && category.subcategories.forEach(iterate)
      })
    }
    setBusinessState({
      ...businessState,
      business: business
    })
  }

  /**
   * Method to update the category state
   */
  const handleUpdateCategoryState = (updatedCategory) => {
    setCategoryState(updatedCategory)
  }

  const handleUpdateTaxesProducts = ({ tax, isRemove, id }) => {
    const _categories = [...businessState?.business?.categories]
    const replaceSameTaxes = (categories, tax) => {
      for (let i = 0; i < categories?.length; i++) {
        const category = categories[i]
        for (let j = 0; j < category.products.length; j++) {
          const product = category.products[j]
          if (isRemove && product.tax?.id === tax?.id) {
            product.tax = null
            product.tax_id = null
          } else if (product.tax && product.tax?.id === tax?.id) {
            Object.assign(product.tax, tax)
            product.tax_id = tax?.id
          }
        }
        if (category.subcategories?.length > 0) {
          categories.subcategories = replaceSameTaxes(categories.subcategories, tax)
        }
      }
      return categories
    }
    setBusinessState({
      ...businessState,
      business: {
        ...businessState.business,
        categories: replaceSameTaxes(_categories, tax)
      }
    })
  }

  const handleUpdateFeesProducts = ({ fee, isRemove }) => {
    const _categories = [...businessState?.business?.categories]
    const replaceSameFees = (categories, fee) => {
      for (let i = 0; i < categories?.length; i++) {
        const category = categories[i]
        for (let j = 0; j < category.products.length; j++) {
          const product = category.products[j]
          if (isRemove && product.fee?.id === fee?.id) {
            product.fee = null
            product.fee_id = null
          } else if (product.fee && product.fee?.id === fee?.id) {
            Object.assign(product.fee, fee)
            product.fee_id = fee?.id
          }
        }
        if (category.subcategories?.length > 0) {
          categories.subcategories = replaceSameFees(categories.subcategories, fee)
        }
      }
      return categories
    }
    setBusinessState({
      ...businessState,
      business: {
        ...businessState.business,
        categories: replaceSameFees(_categories, fee)
      }
    })
  }

  useEffect(() => {
    if (businessState.loading) return
    if (!businessState.loading && (categorySelected || isAllCategoryProducts)) {
      getProducts(true)
    }
  }, [businessState])

  useEffect(() => {
    if (searchValue !== null) getProducts(!!searchValue)
  }, [searchValue])

  useEffect(() => {
    getProducts(!!searchValue, 1)
  }, [categorySelected?.id])

  useEffect(() => {
    if (businessSlug) {
      getBusiness()
    } else {
      setBusinessState({ ...businessState, loading: false, business: {} })
      setCategoriesState({})
      setCategoryState({ ...categoryStateDefault, loading: false })
      setCategorySelected(null)
    }
  }, [businessSlug])

  useEffect(() => {
    if (!businessState?.business) return
    if (Object.keys(businessState?.business)?.length > 0) {
      events.on('tax_changed', handleUpdateTaxesProducts)
      events.on('fee_changed', handleUpdateFeesProducts)
      events.on('tax_deleted', handleUpdateTaxesProducts)
      events.on('fee_deleted', handleUpdateFeesProducts)
      return () => {
        events.off('tax_changed', handleUpdateTaxesProducts)
        events.off('fee_changed', handleUpdateFeesProducts)
        events.off('tax_deleted', handleUpdateFeesProducts)
        events.off('fee_deleted', handleUpdateFeesProducts)
      }
    }
  }, [businessState?.business])

  /**
   * Cancel business request
   */
  useEffect(() => {
    const request = requestsState.business
    return () => {
      request && request.cancel && request.cancel()
    }
  }, [requestsState.business])

  /**
   * Cancel products request on unmount and pagination
   */
  useEffect(() => {
    const request = requestsState.products
    return () => {
      request && request.cancel && request.cancel()
    }
  }, [requestsState.products])

  useEffect(() => {
    getTaxes()
    getFees()
    getBusinessTypes()
    getSites()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          errors={errors}
          categorySelected={categorySelected}
          searchValue={searchValue}
          categoryState={categoryState}
          businessState={businessState}
          productModal={productModal}
          errorQuantityProducts={errorQuantityProducts}
          handleChangeCategory={handleChangeCategory}
          handleChangeSearch={handleChangeSearch}
          getPageProducts={getProducts}
          getBusiness={getBusiness}
          setCategorySelected={setCategorySelected}
          setBusinessState={setBusinessState}
          handleUpdateBusinessState={handleUpdateBusinessState}
          updateProductModal={(val) => setProductModal({ ...productModal, product: val })}
          openCategories={openCategories.values}
          setOpenCategories={setOpenCategories}
          setBusinessSlug={setBusinessSlug}
          handleUpdateCategoryState={handleUpdateCategoryState}
          setFormTaxState={setFormTaxState}
          formTaxState={formTaxState}
          taxes={taxes}
          setTaxes={setTaxes}
          fees={fees}
          setFees={setFees}
          businessTypes={businessTypes}
          setBusinessTypes={setBusinessTypes}
          siteState={siteState}
        />
      )}
    </>
  )
}

BusinessProductsListing.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * true, flag to decide search parmeter
   */
  isSearchByName: PropTypes.bool,
  /**
   * true, flag to decide search parmeter
   */
  isSearchByDescription: PropTypes.bool,
  /**
   * Slug from Store
   */
  slug: PropTypes.string,
  /**
   * True, flag to make initial API call
   */
  isInitialRender: PropTypes.bool

}

BusinessProductsListing.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
