import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { useOrder } from '../../contexts/OrderContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useConfig } from '../../contexts/ConfigContext'

dayjs.extend(utc)

export const BusinessAndProductList = (props) => {
  const {
    isSearchByName,
    isSearchByDescription,
    slug,
    categoryId,
    productId,
    isInitialRender,
    ordering,
    businessProps,
    menusProps,
    isGetMenus,
    UIComponent,
    location
  } = props

  const [orderState] = useOrder()
  const [{ configs }] = useConfig()
  const [languageState, t] = useLanguage()

  const [categorySelected, setCategorySelected] = useState({ id: null, name: t('ALL', 'All') })
  const [searchValue, setSearchValue] = useState(null)
  const [sortByValue, setSortByValue] = useState(null)
  const [filterByMenus, setFilterByMenus] = useState(null)
  const [businessState, setBusinessState] = useState({ business: {}, menus: null, loading: true, error: null })
  const [categoriesState, setCategoriesState] = useState({})
  const [orderOptions, setOrderOptions] = useState()
  const [requestsState, setRequestsState] = useState({})
  const [productModal, setProductModal] = useState({ product: null, loading: false, error: null })
  const [featuredProducts, setFeaturedProducts] = useState(false)

  const categoryStateDefault = {
    loading: true,
    pagination: { currentPage: 0, pageSize: 20, totalItems: null, totalPages: 0, nextPageItems: 10 },
    products: []
  }

  const [categoryState, setCategoryState] = useState(categoryStateDefault)
  const [errors, setErrors] = useState(null)
  const [errorQuantityProducts, setErrorQuantityProducts] = useState(false)

  const isUseParentCategory = configs?.use_parent_category?.value === 'true'
    || configs?.use_parent_category?.value === '1'

  /**
   * Change category selected
   * @param {Object} category Category object
   */
  const handleChangeCategory = (category) => {
    if (category?.id === categorySelected?.id) return
    setCategorySelected(category)
  }

  const handleChangeSearch = (search) => {
    setSearchValue(search)
  }

  const handleChangeSortBy = (val) => {
    setSortByValue(val)
  }

  const handleChangeFilterByMenus = (val) => {
    setFilterByMenus(val)
  }

  const isMatchSearch = (name, description) => {
    if (!searchValue) return true
    return (name && (name.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByName)) ||
      (description && (description.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByDescription))
  }

  const isValidMoment = (date, format) => dayjs.utc(date, format).format(format) === date

  const isFeaturedSearch = (product) => {
    if (product.featured) {
      if (!searchValue) return true
      return (product.name && (product.name.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByName)) ||
        (product.description && (product.description.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByDescription))
    }
    return false
  }

  const sortProductsArray = (option, array) => {
    if (option === 'rank') {
      return array.sort((a, b) => b.rank - a.rank)
    }
    if (option === 'a-z') {
      return array.sort((a, b) =>
        (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
      )
    }
    return array
  }

  const subCategoriesList = []

  const iterateCategories = (categories) => {
    categories.forEach(category => {
      subCategoriesList.push(category)
      iterateCategories(category.subcategories)
    });
  }

  const getProducts = async ({ isNextPage, newFetch } = {}) => {
    if (!businessState?.business?.lazy_load_products_recommended) {
      for (let i = 0; i < businessState?.business?.categories?.length ?? 0; i++) {
        const category = businessState?.business?.categories[i]
        const isFeatured = category?.products?.some((product) => product.featured)
        if (isFeatured) {
          setFeaturedProducts(isFeatured)
          break
        }
      }
      const categoryState = {
        ...categoryStateDefault,
        loading: false
      }
      if (categorySelected.id !== 'featured' && categorySelected.id !== null) {
        iterateCategories(businessState?.business?.categories)
        const categoriesList = [].concat(...businessState?.business?.categories.map(category => category.children))
        const categories = isUseParentCategory ? categoriesList : businessState?.business?.categories
        const parentCategory = categories?.find(category => category.category_id === categorySelected.id) ?? {}
        const categoryFinded = subCategoriesList.find(subCat => subCat.id === parentCategory.category_id)  ?? {}

        const productsFiltered = businessState?.business?.categories
          ?.find(category => category.id === (isUseParentCategory ? parentCategory?.parent_category_id : categorySelected.id))
          ?.products
          .filter(product => isUseParentCategory
            ? (categoryFinded?.children?.some(cat => cat.category_id === product?.category_id) && isMatchSearch(product.name, product.description))
            : isMatchSearch(product.name, product.description))

        categoryState.products = productsFiltered || []
      } else if (categorySelected.id === 'featured') {
        const productsFiltered = businessState?.business?.categories?.reduce(
          (products, category) => [...products, ...category.products], []
        ).filter(
          product => isFeaturedSearch(product)
        )
        categoryState.products = productsFiltered || []
      } else {
        const productsFiltered = businessState?.business?.categories?.reduce(
          (products, category) => [...products, ...category.products], []
        ).filter(
          product => isMatchSearch(product.name, product.description)
        )
        categoryState.products = productsFiltered || []
      }
      categoryState.products = sortProductsArray(sortByValue, categoryState.products)
      setCategoryState({ ...categoryState })
      return
    }

    const categoryKey = searchValue
      ? 'search'
      : categorySelected.id === 'featured'
        ? 'featured'
        : categorySelected.id
          ? `categoryId:${categorySelected.id}`
          : 'all'

    const categoryState = categoriesState[categoryKey] ?? categoryStateDefault
    categoryState.products = sortProductsArray(sortByValue, categoryState.products)
    const pagination = categoryState.pagination
    if (!newFetch && !isNextPage &&
      (
        (pagination.currentPage > 0 && pagination.currentPage === pagination.totalPages) ||
        categoryState.products.length > 0 && pagination.totalPages > 0
      )
    ) {
      setCategoryState({ ...categoryState, loading: false })
      return
    }

    setCategoryState({ ...categoryState, loading: true })

    const parameters = {
      type: orderState.options?.type ?? 1,
      page: (!isNextPage || newFetch) ? 1 : pagination.currentPage + 1,
      page_size: pagination.pageSize
    }

    if (orderState.options?.moment && isValidMoment(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss')) {
      const moment = dayjs.utc(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss').local().unix()
      parameters.timestamp = moment
    }

    if (sortByValue) {
      parameters.orderBy = sortByValue === 'a-z' ? 'name' : sortByValue
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

    if (categorySelected.id === 'featured') {
      parameters.params = 'features'
    }

    if (categorySelected.id === 'featured' && searchValue) {
      parameters.params = 'features'
      where = {
        conditions: [
          {
            conditions: searchConditions,
            conector: 'OR'
          }
        ],
        conector: 'AND'
      }
    }

    try {
      const functionFetch = categorySelected.id && categorySelected.id !== 'featured'
        ? ordering.businesses(businessState.business.id).categories(categorySelected.id).products()
        : !isUseParentCategory
          ? ordering.businesses(businessState.business.id).products()
          : ordering.businesses(businessState.business.id).categories()
      const source = {}
      requestsState.products = source
      setRequestsState({ ...requestsState })
      let productEndpoint = where.conditions.length > 0
        ? functionFetch.parameters(parameters).where(where)
        : functionFetch.parameters(parameters)
      const { content: { error, result, pagination } } = await productEndpoint.get({ cancelToken: source })

      let featuresResponse = null
      if (isUseParentCategory && (!categorySelected.id || categorySelected.id === 'featured')) {
        parameters.params = 'features'
        productEndpoint = where.conditions.length > 0
          ? ordering.businesses(businessState.business.id).products().parameters(parameters).where(where)
          : ordering.businesses(businessState.business.id).products().parameters(parameters)
        try {
          featuresResponse = await productEndpoint.get({ cancelToken: source })
          if (!featuresResponse?.content?.error) {
            const oldFeatured = categoriesState?.featured
            const featureState = {
              pagination: {
                ...categoryState.pagination,
                currentPage: featuresResponse?.content?.pagination?.current_page,
                totalItems: featuresResponse?.content?.pagination?.total,
                totalPages: featuresResponse?.content?.pagination?.total_pages
              },
              loading: false,
              products: newFetch
                ? [...featuresResponse?.content?.result]
                : [...oldFeatured.products, ...featuresResponse?.content?.result]
            }
            categoriesState.featured = featureState
          }
        } catch (err) {
          setErrors([err.message])
        }
      }

      if (!error && (categorySelected.id && categorySelected.id !== 'featured' || !isUseParentCategory)) {
        const newcategoryState = {
          pagination: {
            ...categoryState.pagination,
            currentPage: pagination.current_page,
            totalItems: pagination.total,
            totalPages: pagination.total_pages
          },
          loading: false,
          products: newFetch ? [...result] : [...categoryState.products, ...result]
        }

        categoriesState[categoryKey] = newcategoryState
        setCategoryState({ ...newcategoryState })
        setCategoriesState({ ...categoriesState })

        const isFeatured = categoriesState.all.products.some(product => product.featured)
          || categoriesState?.featured?.products?.some(product => product.featured)
        setFeaturedProducts(isFeatured)
      } else if (!error && isUseParentCategory && (!categorySelected.id || categorySelected.id === 'featured')) {
        const productsList = [].concat(...result.map(category => category?.products)).filter(item => item)
        const productsListFeatured = featuresResponse?.content?.result ?? []
        const newcategoryState = {
          pagination: {
            ...categoryState.pagination,
            currentPage: categorySelected.id === 'featured'
              ? featuresResponse?.content?.pagination?.current_page
              : pagination.current_page,
            totalItems: categorySelected.id === 'featured'
              ? featuresResponse?.content?.pagination?.total
              : pagination.total,
            totalPages: categorySelected.id === 'featured'
              ? featuresResponse?.content?.pagination?.total_pages
              : pagination.total_pages
          },
          loading: false,
          products: newFetch ? [...productsList] : [...categoryState.products, ...productsListFeatured, ...productsList]
        }

        categoriesState[categoryKey] = newcategoryState
        setCategoryState({ ...newcategoryState })
        setCategoriesState({ ...categoriesState })

        const isFeatured = categoriesState.all.products.some(product => product.featured)
          || categoriesState?.featured?.products?.some(product => product.featured)
        setFeaturedProducts(isFeatured)
      } else {
        setErrors(result)
      }
    } catch (err) {
      setErrors([err.message])
    }
  }

  const getProduct = async () => {
    if ((categoryId && productId && businessState.business.id) || (props.product?.businessId && props.product?.categoryId && props.product?.id)) {
      try {
        setProductModal({
          ...productModal,
          loading: true
        })
        const source = {}
        requestsState.product = source
        const parameters = {
          type: orderState.options?.type || 1,
          moment: orderState.options?.moment || null
        }

        if (orderState.options?.moment && isValidMoment(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss')) {
          const moment = dayjs.utc(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss').local().unix()
          parameters.timestamp = moment
        }

        const { content: { result } } = await ordering
          .businesses(businessState.business.id || props.product?.businessId)
          .categories(categoryId || props.product?.categoryId)
          .products(productId || props.product?.id)
          .parameters(parameters)
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

  useEffect(() => {
    if (isInitialRender) {
      getProduct()
    }
  }, [JSON.stringify(businessState.business?.id), isInitialRender])

  const getBusiness = async () => {
    try {
      setBusinessState({ ...businessState, loading: true })
      const source = {}
      requestsState.business = source
      setRequestsState({ ...requestsState })
      const parameters = {
        type: orderState.options?.type || 1,
        location: location
          ? `${location?.lat},${location?.lng}`
          : orderState.options?.address?.location
            ? `${orderState.options?.address?.location?.lat},${orderState.options?.address?.location?.lng}`
            : null
      }
      if (orderState.options?.moment && isValidMoment(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss')) {
        const moment = dayjs.utc(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss').local().unix()
        parameters.timestamp = moment
      }

      if (filterByMenus) {
        parameters.menu_id = filterByMenus
      }

      const { content: { result } } = await ordering
        .businesses(slug)
        .select(businessProps)
        .parameters(parameters)
        .get({ cancelToken: source })

      if (!result?.categories || result?.categories?.length === 0) {
        setErrorQuantityProducts(true)
      }

      const data = {
        ...businessState,
        business: result,
        loading: false
      }

      if (menusProps && isGetMenus) {
        const { content: { result: menus } } = await ordering
          .businesses(result.id)
          .menus()
          .select(menusProps)
          .get()

        data.menus = menus
      }

      setBusinessState(data)
    } catch (err) {
      setBusinessState({
        ...businessState,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    if (!businessState.loading) {
      getProducts({ newFetch: true })
    }
  }, [businessState])

  useEffect(() => {
    getProducts({ newFetch: !!searchValue })
  }, [searchValue])

  useEffect(() => {
    getProducts({ newFetch: !!searchValue })
  }, [categorySelected.id])

  useEffect(() => {
    getProducts({ newFetch: !!searchValue })
  }, [sortByValue])

  useEffect(() => {
    getProducts()
  }, [slug])

  useEffect(() => {
    if (!orderState.loading && orderOptions && !languageState.loading) {
      getBusiness()
    }
  }, [orderOptions, languageState.loading, slug, filterByMenus])

  /**
   * getBusiness if orderState is loading the first time when is rendered
   */
  useEffect(() => {
    if (props.product && !orderState.loading && !Object.keys(businessState.business)?.length) {
      getBusiness()
    }
  }, [orderState.loading])

  /**
   * getProduct when login after guest
   */
  useEffect(() => {
    if (props.product?.businessId && props.product?.categoryId && props.product?.id && !orderState.loading) {
      getProduct()
    }
  }, [props.product])

  useEffect(() => {
    if (!orderState.loading) {
      setOrderOptions({
        type: orderState?.options?.type,
        moment: orderState?.options?.moment,
        location: orderState?.options?.address?.location
      })
    }
  }, [orderState?.options?.type, orderState?.options?.moment, JSON.stringify(orderState?.options?.address?.location)])

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

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          errors={errors}
          categorySelected={categorySelected}
          searchValue={searchValue}
          sortByValue={sortByValue}
          filterByMenus={filterByMenus}
          categoryState={categoryState}
          businessState={businessState}
          productModal={productModal}
          featuredProducts={featuredProducts}
          errorQuantityProducts={errorQuantityProducts}
          categoriesState={categoriesState}
          handleChangeCategory={handleChangeCategory}
          handleChangeSearch={handleChangeSearch}
          handleChangeSortBy={handleChangeSortBy}
          handleChangeFilterByMenus={handleChangeFilterByMenus}
          getNextProducts={getProducts}
          updateProductModal={(val) => setProductModal({ ...productModal, product: val })}
        />
      )}
    </>
  )
}

BusinessAndProductList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

BusinessAndProductList.defaultProps = {
}
