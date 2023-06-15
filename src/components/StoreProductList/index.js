import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const StoreProductList = (props) => {
  const {
    isSearchByName,
    isSearchByDescription,
    UIComponent,
    businessProps,
    slug,
    asDashboard,
    paginationSettings
  } = props

  const [ordering] = useApi()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [productSearch, setProductSearch] = useState(null)
  const [categorySearch, setCategorySearch] = useState('')
  const [category, setCategory] = useState(null)
  const [businessState, setBusinessState] = useState({ business: {}, loading: true, error: false })
  const [categories, setCategories] = useState([])
  const [productsList, setProductsList] = useState({
    products: [],
    loading: false,
    error: false,
    pagination: {
      currentPage: 1,
      pageSize: paginationSettings.pageSize ?? 15,
      totalItems: null,
      totalPages: null
    }
  })

  /**
   * Method to get products from API
   */
  const getCategoryProducts = async (newFetch) => {
    try {
      if (newFetch) {
        setProductsList({
          ...productsList,
          loading: true
        })
      }
      const parameters = {
        page: newFetch ? 1 : productsList?.pagination?.currentPage + 1,
        page_size: productsList?.pagination?.pageSize
      }
      
      let where = null
      const conditions = []
      if (productSearch) {
        const searchConditions = []
        if (isSearchByName) {
          searchConditions.push(
            {
              attribute: 'name',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${productSearch}%`)
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
                value: encodeURI(`%${productSearch}%`)
              }
            }
          )
        }
        conditions.push({
          conector: 'OR',
          conditions: searchConditions
        })
      }
      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }
      const fetchEndpoint = where
        ? ordering.businesses(businessState?.business?.id).categories(category?.id).products().parameters(parameters).where(where)
        : ordering.businesses(businessState?.business?.id).categories(category?.id).products().parameters(parameters)
      const { content: { result, error, pagination } } = await fetchEndpoint.get()
      setProductsList({
        loading: false,
        error: error ? result : null,
        products: newFetch ? result : [...productsList?.products, ...result],
        pagination: {
          ...productsList?.pagination,
          currentPage: pagination?.current_page,
          totalItems: pagination?.total,
          totalPages: pagination?.total_pages
        }
      })
    } catch (error) {
      setProductsList({
        ...productsList,
        loading: false,
        error
      })
    }
  }

  const getBusiness = async () => {
    try {
      setBusinessState({ ...businessState, loading: true })

      const fetchEndpoint = asDashboard
        ? ordering.businesses(slug).asDashboard().select(businessProps)
        : ordering.businesses(slug).select(businessProps)

      const { content: { result, error } } = await fetchEndpoint.get()

      setBusinessState({
        loading: false,
        error: error ? result : null,
        business: result
      })
    } catch (err) {
      setBusinessState({
        ...businessState,
        loading: false,
        error: [err.message]
      })
    }
  }

  const updateCategories = (categories, result) => {
    return categories.map((category) => {
      if (category.id === result.id) {
        return {
          ...category,
          ...result
        };
      }
      if (Array.isArray(category?.subcategories) && category.subcategories.length > 0) {
        return {
          ...category,
          subcategories: updateCategories(category.subcategories, result),
        };
      }
      return category;
    });
  };

  const updateStoreProduct = async (categoryId, productId, updateParams = {}) => {
    try {
      const { content: { result, error } } = await ordering.businesses(businessState?.business?.id).categories(categoryId).products(productId).save(updateParams);

      if (!error) {
        const updatedProducts = productsList?.products.map(product => {
          if (product.id === result.id) {
            return {
              ...product,
              ...result
            }
          }
          return product
        }) 
        setProductsList({ ...productsList, products: updatedProducts })
        showToast(ToastType.Success, result?.enabled
          ? t('ENABLED_PRODUCT', 'Enabled product')
          : t('DISABLED_PRODUCT', 'Disabled product'))
      } else {
        showToast(ToastType.Error, result)
      }
    } catch (err) {
      showToast(ToastType.Error, err.message)
    }
  }
  

  const updateStoreCategory = async (categoryId, updateParams = {}) => {
    try {
      const { content: { result, error } } = await ordering.businesses(businessState?.business?.id).categories(categoryId).save(updateParams)

      if (!error) {
        const updatedCategories = updateCategories(businessState?.business.categories, result);
        const updatedBusiness = { ...businessState?.business, categories: updatedCategories }
        setBusinessState({ ...businessState, business: updatedBusiness })
        showToast(ToastType.Success, result?.enabled
          ? t('ENABLED_CATEGORY', 'Enabled category')
          : t('DISABLED_CATEGORY', 'Disabled category'))
      } else {
        showToast(ToastType.Error, result)
      }
    } catch (err) {
      showToast(ToastType.Error, err.message)
    }
  }

  const validCategory = (cat, searchVal) => {
    if (cat?.subcategories?.length === 0) return;
    if (cat?.name?.toLowerCase().includes(searchVal)) return true;
    const subcategories = cat?.subcategories?.filter(subCat =>
      subCat?.name?.toLowerCase()?.includes(searchVal) ||
      validCategory(subCat, searchVal)
    );
    return subcategories?.length > 0;
  };

  useEffect(() => {
    getBusiness()
  }, [slug])

  useEffect(() => {
    if (category?.id) getCategoryProducts(true)
  }, [category, productSearch])

  useEffect(() => {
    if (businessState?.business?.categories?.length > 0) {
      const lowerCaseSearchVal = categorySearch.toLowerCase();
      const updateCategories = businessState?.business?.categories?.filter(cat => {
        if (cat?.name?.toLowerCase()?.includes(lowerCaseSearchVal)) return true;
        return validCategory(cat, lowerCaseSearchVal);
      });
      setCategories(updateCategories)
    }
  }, [categorySearch, businessState?.business])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessState={businessState}
          productsList={productsList}
          productSearch={productSearch}
          categorySearch={categorySearch}
          handleChangeCategory={setCategory}
          handleChangeProductSearch={setProductSearch}
          handleChangeCategorySearch={setCategorySearch}
          updateStoreProduct={updateStoreProduct}
          updateStoreCategory={updateStoreCategory}
          getCategoryProducts={getCategoryProducts}
          categories={categories}
        />
      )}
    </>
  )
}

StoreProductList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Businessid, this must be contains an business id for get data from API
   */
  businessId: PropTypes.number,
  /**
   * Enable/disable search by name
   */
  isSearchByName: PropTypes.bool,
  /**
   * Enable/disable search by description
   */
  isSearchByDescription: PropTypes.bool,
  /**
   * Components types before products listing
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after products listing
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before products listing
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after products listing
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

StoreProductList.defaultProps = {
  isSearchByName: true,
  isSearchByDescription: true,
  paginationSettings: { initialPage: 1, pageSize: 15, controlType: 'infinity' },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
