import React, { useEffect, useState } from 'react'
import PropTypes, { object, number } from 'prop-types'

import { useSession } from '../../contexts/SessionContext'

export const ProductsListing = (props) => {
  const {
    ordering,
    UIComponent,
    businessId,
    categories,
    products,
    orderBy,
    orderDirection,
    useDefaultSessionManager,
    paginationSettings
  } = props

  const [category, setCategory] = useState(categories[0]);
//   const [products, setProducts] = useState({products:[], loading: false});
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

  useEffect(() => {
    // loadProducts()
  }, [])

//   const loadMoreOrders = async () => {
//     setOrderList({ ...orderList, loading: true })
//     try {
//       const response = await getOrders(pagination.currentPage + 1)
//       setOrderList({
//         loading: false,
//         orders: response.content.error ? orderList.orders : orderList.orders.concat(response.content.result),
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
//       setOrderList({ ...orderList, loading: false, error: [err.message] })
//     }
//   }

  const onClickedCategory = (category) => {
      setCategory(category);
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          categories={categories}
          category={category}
          onClickedCategory={onClickedCategory}
          products={products}
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
  useDefualtSessionManager: PropTypes.bool,
  /**
   * Access token to update user
   * Is required when `useDefualtSessionManager` is false
   */
  accessToken: (props, propName) => {
    if (props[propName] !== undefined && typeof props[propName] !== 'string') {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`UserProfile\`, expected \`object\`.`)
    }
    if (props[propName] === undefined && !props.useDefualtSessionManager) {
      return new Error(`Invalid prop \`${propName}\` is required when \`useDefualtSessionManager\` is false.`)
    }
  },
  /**
   * Array of orders
   * This is used of first option to show list
   */
  categories: PropTypes.arrayOf(object),
  onClickedCategory: PropTypes.func,
  products: PropTypes.arrayOf(object),
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
