import React, { useEffect, useState } from 'react'
import PropTypes, { object, number } from 'prop-types'

import { useSession } from '../../contexts/SessionContext'
import { random } from 'lodash'

export const ProductsListing = (props) => {
  const {
    ordering,
    UIComponent,
    businessId,
    categories,
    orderBy,
    orderDirection,
    useDefaultSessionManager,
    paginationSettings
  } = props

  const [category, setCategory] = useState(categories[0])
  const [productList, setProducts] = useState({category_id: 0, products:[], loading: false, error: null})
  const [categoryList, setCategories] = useState({business_id: 0, categories:[], loading: false, error: null})
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10
  })
  const [session] = useSession()

  const accessToken = useDefaultSessionManager ? session.token : props.accessToken

//   const getProducts = async (page) => {
//     const options = {
//       accessToken: accessToken,
//       query: {
//         orderBy: (orderDirection === 'desc' ? '-' : '') + orderBy,
//         page: page,
//         page_size: paginationSettings.pageSize
//       }
//     }
//     if (category) {
//       options.query.where = []
//       options.query.where.push({ attribute: 'category_id', value: category.id })
//     }
//     return await ordering.products.all(options)
//   }

//   const loadProducts = async () => {
//     setProducts({ ...products, loading: true })
//     try {
//       const response = await getProducts(pagination.currentPage + 1)
//       setProducts({
//         loading: false,
//         orders: response.content.error ? [] : response.content.result,
//         error: response.content.error ? response.content.result : null
//       })
//       if (!response.content.error) {
//         setPagination({
//           currentPage: response.content.pagination.current_page,
//           pageSize: response.content.pagination.page_size,
//           totalPages: response.content.pagination.total_pages,
//           total: response.content.pagination.total,
//           from: response.content.pagination.from,
//           to: response.content.pagination.to
//         })
//       }
//     } catch (err) {
//         setProducts({ ...products, loading: false, error: [err.message] })
//     }
//   }
  const initCategory = () => {
    setCategories({ business_id: businessId, ...categoryList, loading: true, error: null })
    try {
      let all = [];
      for (let c = 1; c < categories.length; c++) {
        let products = []
        for (let i = 0; i < 100; i++) {
          let product = {
            id: i + 1,
            name: `Product ${categories[c].id}__${i + 1}`,
            description: `Product description for test components --- ${categories[c].id}__description__${i + 1}`,
            image: `https://picsum.photos/200?random=${categories[c].id * (i + 1)}`
          }
          products.push(product)
          all.push(product)
        }
        categories[c].products = products
      }
      categories[0].products = all
      setCategories({ business_id: businessId, categories, loading: true, error: null })
    } catch (err) {
      setCategories({ business_id: businessId, ...categoryList, loading: false, error: err })
    }
  }

  const loadProducts = (category) => {
    setProducts({ ...productList, loading: true, error: null });
    try {
      let ary = []
      for (let c = 0; c < categories.length; c++) {
        for (let i = 0; i < 100; i++) {
          let tmp = {
            id: i + 1,
            name: `Product ${categories[c].id}__${i + 1}`,
            description: `Product description for test components --- ${categories[c].id}__description__${i + 1}`,
            image: `https://picsum.photos/200?lock=${categories[c].id * i + 1}`
          }
          ary.push(tmp)
        }
        setProducts({
          loading: false,
          category_id: categories[c].id,
          products: ary,
          error: null
        })
      }
    } catch (err) {
      setProducts({ ...productList, loading: false, error: err });
    }
  }

  useEffect(() => {
    initCategory()
  }, [])

  const onClickedCategory = (category) => {
      setCategory(category);
  }

  const onSearchProduct = (inp_value) => {
    console.log(inp_value);
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          categories={categories}
          category={category}
          onClickedCategory={onClickedCategory}
          onSearchProduct={onSearchProduct}
          productList={productList}
          pagination={pagination}
        //   loadMoreOrders={loadMoreOrders}
        />
      )}
    </>
  )
}

ProductsListing.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: PropTypes.object.isRequired,
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefaultSessionManager: PropTypes.bool,
  /**
   * Access token to update user
   * Is required when `useDefaultSessionManager` is false
   */
  accessToken: (props, propName) => {
    if (props[propName] !== undefined && typeof props[propName] !== 'string') {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`UserProfile\`, expected \`object\`.`)
    }
    if (props[propName] === undefined && !props.useDefaultSessionManager) {
      return new Error(`Invalid prop \`${propName}\` is required when \`useDefaultSessionManager\` is false.`)
    }
  },
  /**
   * Array of orders
   * This is used of first option to show list
   */
  onSearchProduct: PropTypes.func,
  categories: PropTypes.arrayOf(object),
  onClickedCategory: PropTypes.func,
  /**
   * Order orders by some attribute. Default by `id`.
   */
  orderBy: PropTypes.string,
  /**
   * Order direction ascendent (asc) or descendent (desc). Default is `desc`.
   */
  orderDirection: PropTypes.oneOf(['asc', 'desc']),
  /**
   * Pagination settings
   * You can set the pageSize, initialPage and controlType can be by pages or infinity
   */
  paginationSettings: PropTypes.exact({
    /**
     * initialPage only work with control type `pages`
     */
    initialPage: PropTypes.number,
    pageSize: PropTypes.number,
    controlType: PropTypes.oneOf(['infinity', 'pages'])
  }),
  /**
   * Components types before Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ProductsListing.defaultProps = {
  orderBy: 'id',
  orderDirection: 'desc',
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
