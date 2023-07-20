import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../../contexts/SessionContext'
import { useApi } from '../../../contexts/ApiContext'

export const GiftCardOrdersList = props => {
  const {
    UIComponent,
    paginationSettings,
    defaultStatus
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [giftCards, setGiftCards] = useState({ loading: true, list: [], error: null })
  const [paginationProps, setPaginationProps] = useState({
    currentPage: (paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    totalItems: null,
    totalPages: null
  })
  const [activeStatus, setActiveStatus] = useState(defaultStatus || null)

  /**
   * Method to get the gift cards from API
   */
  const getGiftCards = async (page, pageSize = paginationProps.pageSize) => {
    setGiftCards({
      ...giftCards,
      loading: true
    })
    let where = null
    const conditions = []
    if (activeStatus) {
      conditions.push(
        {
          attribute: 'status',
          value: activeStatus
        }
      )
    }
    if (conditions.length) {
      where = {
        conditions,
        conector: 'AND'
      }
    }

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
    const fetchEndpoint = where
      ? `${ordering.root}/gift_cards?orderBy=-id&&page=${page}&page_size=${pageSize}&&where=${JSON.stringify(where)}`
      : `${ordering.root}/gift_cards?orderBy=-id&&page=${page}&page_size=${pageSize}`

    return await fetch(fetchEndpoint, requestOptions)
  }

  const loadMoreOrders = async () => {
    setGiftCards({
      ...giftCards,
      loading: true
    })
    try {
      const response = await getGiftCards(paginationProps.currentPage + 1)
      const { error, result, pagination } = await response.json()
      if (!error) {
        setPaginationProps({
          currentPage: pagination.current_page,
          pageSize: pagination.page_size === 0 ? paginationProps.pageSize : pagination.page_size,
          totalPages: pagination.total_pages,
          totalItems: pagination.total,
          from: pagination.from,
          to: pagination.to
        })
      }
      setGiftCards({
        loading: false,
        list: error ? giftCards.list : giftCards.list.concat(result),
        error: error ? result : null
      })
    } catch (err) {
      setGiftCards({
        ...giftCards,
        loading: false,
        error: [err.message]
      })
    }
  }

  const goToPage = async page => {
    setGiftCards({
      ...giftCards,
      loading: true
    })
    try {
      const response = await getGiftCards(page)
      const { error, result, pagination } = await response.json()
      if (!error) {
        setPaginationProps({
          currentPage: pagination.current_page,
          pageSize: pagination.page_size === 0 ? paginationProps.pageSize : pagination.page_size,
          totalPages: pagination.total_pages,
          totalItems: pagination.total,
          from: pagination.from,
          to: pagination.to
        })
      }
      setGiftCards({
        loading: false,
        list: error ? [] : result,
        error: error ? result : null
      })
    } catch (err) {
      setGiftCards({
        ...giftCards,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    goToPage(1)
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          giftCards={giftCards}
          paginationProps={paginationProps}
          activeStatus={activeStatus}
          setActiveStatus={setActiveStatus}
          loadMoreOrders={loadMoreOrders}
          goToPage={goToPage}
        />
      )}
    </>
  )
}
GiftCardOrdersList.propTypes = {
  /**
 * UI Component, this must be containt all graphic elements and use parent props
 */
  UIComponent: PropTypes.elementType
}
GiftCardOrdersList.defaultProps = {
  paginationSettings: { initialPage: 1, pageSize: 10 }
}
