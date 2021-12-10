import React, { useEffect, useState } from 'react'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'

export const PromotionsController = (props) => {
  const {
    paginationSettings,
    UIComponent,
  } = props

  const [session] = useSession()
  const [ordering] = useApi();

  const [offersState, setOffersState] = useState({
    loading: true,
    error: null,
    offers: [],
    pagination: {
      currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1)
        ? paginationSettings.initialPage - 1
        : 0,
      pageSize: paginationSettings.pageSize ?? 10,
      total: null
    }
  })

  const getOffers = async ({ page = 1, pageSize = paginationSettings.pageSize }) => {
    const url = `${ordering.root}/offers?page=${page}&page_size=${pageSize}`

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.token}`
      },
    })
    return await response.json()
  }

  const loadOffers = async () => {
    if (
      offersState.pagination?.currentPage === offersState.pagination?.totalPages &&
      offersState.pagination?.total !== null
    ) {
      return
    }

    try {
      setOffersState({ ...offersState, loading: true })
      const { error, result, pagination } = await getOffers()
      setOffersState({
        ...offersState,
        loading: false,
        error: error ? result : null,
        offers: error ? [] : result,
        pagination: !error
          ? {
            ...offersState.pagination,
            currentPage: pagination.current_page,
            pageSize: pagination.page_size,
            totalPages: pagination.total_pages,
            total: pagination.total,
            from: pagination.from,
            to: pagination.to
          }
          : offersState.pagination
      })
    } catch (err) {
      setOffersState({
        ...offersState,
        loading: false,
        error: [err?.message ?? 'ERROR']
      })
    }
  }

  const loadMoreOffers = async () => {
    try {
      setOffersState({ ...offersState, loading: true })
      const { error, result, pagination } = await getOffers({
        page: offersState.pagination.currentPage + 1,
      })
      setOffersState({
        ...offersState,
        loading: false,
        error: error ? result : null,
        offers: error ? offersState.offers : offersState.offers.concat(result),
        pagination: !error
          ? {
            ...offersState.pagination,
            currentPage: pagination.current_page,
            pageSize: pagination.page_size,
            totalPages: pagination.total_pages,
            total: pagination.total,
            from: pagination.from,
            to: pagination.to
          }
          : offersState.pagination
      })
    } catch (err) {
      setOffersState({
        ...offersState,
        loading: false,
        error: [err?.message ?? 'ERROR']
      })
    }
  }

  useEffect(() => {
    loadOffers()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          offersState={offersState}
          loadMoreOffers={loadMoreOffers}
        />
      )}
    </>
  )
}

PromotionsController.defaultProps = {
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  },
}
