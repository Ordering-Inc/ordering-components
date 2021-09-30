// React packages
import React, { useEffect, useState, useCallback } from 'react';

// Third-party packages
import PropTypes from 'prop-types';

// Contexts
import { useSession } from '../../contexts/SessionContext';
import { useApi } from '../../contexts/ApiContext';
import { useWebsocket } from '../../contexts/WebsocketContext';
import { ToastType, useToast } from '../../contexts/ToastContext';
import { useLanguage } from '../../contexts/LanguageContext';

export const CumulativeOrders = (props) => {
  const { UIComponent, paginationSettings, firstFetch, sortBy } = props;
  const orderStatus = {
    pending: [0, 13],
    inProgress: [3, 4, 7, 8, 9, 14, 18, 19, 20, 21],
    completed: [1, 11, 15],
    cancelled: [2, 5, 6, 10, 12, 16, 17],
  };

  // Hooks
  const [ordering] = useApi();
  const [{ user, token }] = useSession();
  const [, { showToast }] = useToast();
  const socket = useWebsocket();
  const [, t] = useLanguage();

  // States
  const [activeStatus, setActiveStatus] = useState(
    Object.entries(orderStatus).reduce(
      (total, [key, value]) => total.concat(value),
      []
    )
  );
  const [pending, setPending] = useState({
    orders: [],
    pagination: {
      currentPage: paginationSettings.initialPage,
      pageSize: paginationSettings.pageSize,
    },
    loading: false,
    error: null,
  });
  const [inProgress, setInProgress] = useState({
    orders: [],
    pagination: {
      currentPage: paginationSettings.initialPage,
      pageSize: paginationSettings.pageSize,
    },
    loading: false,
    error: null,
  });
  const [completed, setCompleted] = useState({
    orders: [],
    pagination: {
      currentPage: paginationSettings.initialPage,
      pageSize: paginationSettings.pageSize,
    },
    loading: false,
    error: null,
  });
  const [cancelled, setCancelled] = useState({
    orders: [],
    pagination: {
      currentPage: paginationSettings.initialPage,
      pageSize: paginationSettings.pageSize,
    },
    loading: false,
    error: null,
  });

  const getPending = async (isNextPage) => {
    setPending({
      ...pending,
      loading: true,
    });

    const options = {
      query: {
        orderBy: sortBy,
        page_size: paginationSettings.pageSize,
        page: isNextPage ? pending.pagination.currentPage + 1 : 1,
        where: [{ attribute: 'status', value: orderStatus.pending }],
      },
    };

    try {
      const {
        content: { result, pagination, error },
      } = await ordering
        .setAccessToken(token)
        .orders()
        .asDashboard()
        .get(options);

      if (!error) {
        let hash = {};
        setPending({
          ...pending,
          orders: isNextPage
            ? pending.orders
                .concat(result)
                .filter((order) =>
                  hash[order?.id] ? false : (hash[order?.id] = true)
                )
            : result,
          pagination: {
            currentPage: pagination.current_page,
            pageSize: pagination.page_size,
            totalPages: pagination.total_pages,
            total: pagination.total,
            from: pagination.from,
            to: pagination.to,
          },
          loading: false,
        });
      } else {
        setPending({ ...pending, loading: false, error: result[0] });
      }
    } catch (err) {
      setPending({ ...pending, loading: false, error: [err.message] });
    }
  };

  const getInProgress = async (isNextPage) => {
    setInProgress({
      ...inProgress,
      loading: true,
    });

    const options = {
      query: {
        orderBy: sortBy,
        page_size: paginationSettings.pageSize,
        page: isNextPage ? inProgress.pagination.currentPage + 1 : 1,
        where: [{ attribute: 'status', value: orderStatus.inProgress }],
      },
    };

    try {
      const {
        content: { result, pagination, error },
      } = await ordering
        .setAccessToken(token)
        .orders()
        .asDashboard()
        .get(options);

      if (!error) {
        let hash = {};
        setInProgress({
          ...inProgress,
          orders: isNextPage
            ? inProgress.orders
                .concat(result)
                .filter((order) =>
                  hash[order?.id] ? false : (hash[order?.id] = true)
                )
            : result,
          pagination: {
            currentPage: pagination.current_page,
            pageSize: pagination.page_size,
            totalPages: pagination.total_pages,
            total: pagination.total,
            from: pagination.from,
            to: pagination.to,
          },
          loading: false,
        });
      } else {
        setInProgress({ ...inProgress, loading: false, error: result[0] });
      }
    } catch (err) {
      setInProgress({ ...inProgress, loading: false, error: [err.message] });
    }
  };

  const getCompleted = async (isNextPage) => {
    setCompleted({
      ...completed,
      loading: true,
    });

    const options = {
      query: {
        orderBy: sortBy,
        page_size: paginationSettings.pageSize,
        page: isNextPage ? completed.pagination.currentPage + 1 : 1,
        where: [{ attribute: 'status', value: orderStatus.completed }],
      },
    };

    try {
      const {
        content: { result, pagination, error },
      } = await ordering
        .setAccessToken(token)
        .orders()
        .asDashboard()
        .get(options);

      if (!error) {
        let hash = {};
        setCompleted({
          ...completed,
          orders: isNextPage
            ? completed.orders
                .concat(result)
                .filter((order) =>
                  hash[order?.id] ? false : (hash[order?.id] = true)
                )
            : result,
          pagination: {
            currentPage: pagination.current_page,
            pageSize: pagination.page_size,
            totalPages: pagination.total_pages,
            total: pagination.total,
            from: pagination.from,
            to: pagination.to,
          },
          loading: false,
        });
      } else {
        setCompleted({ ...completed, loading: false, error: result[0] });
      }
    } catch (err) {
      setCompleted({ ...completed, loading: false, error: [err.message] });
    }
  };

  const getCancelled = async (isNextPage) => {
    setCancelled({
      ...cancelled,
      loading: true,
    });

    const options = {
      query: {
        orderBy: sortBy,
        page_size: paginationSettings.pageSize,
        page: isNextPage ? cancelled.pagination.currentPage + 1 : 1,
        where: [{ attribute: 'status', value: orderStatus.cancelled }],
      },
    };

    try {
      const {
        content: { result, pagination, error },
      } = await ordering
        .setAccessToken(token)
        .orders()
        .asDashboard()
        .get(options);

      if (!error) {
        let hash = {};
        setCancelled({
          ...cancelled,
          orders: isNextPage
            ? cancelled.orders
                .concat(result)
                .filter((order) =>
                  hash[order?.id] ? false : (hash[order?.id] = true)
                )
            : result,
          pagination: {
            currentPage: pagination.current_page,
            pageSize: pagination.page_size,
            totalPages: pagination.total_pages,
            total: pagination.total,
            from: pagination.from,
            to: pagination.to,
          },
          loading: false,
        });
      } else {
        setCancelled({ ...cancelled, loading: false, error: [result] });
      }
    } catch (err) {
      setCancelled({ ...cancelled, loading: false, error: [err.message] });
    }
  };

  const loadOrders = (tab, isNextPage, isRefresh) => {
    if (isRefresh) {
      setActiveStatus(
        Object.entries(orderStatus).reduce(
          (total, [key, value]) => total.concat(value),
          []
        )
      );
    }

    switch (tab) {
      case 'pending':
        if (isNextPage || isRefresh || !pending.pagination?.total) {
          getPending(isNextPage);
        }
        break;
      case 'inProgress':
        if (isNextPage || isRefresh || !inProgress.pagination?.total) {
          getInProgress(isNextPage);
        }
        break;
      case 'completed':
        if (isNextPage || isRefresh || !completed.pagination?.total) {
          getCompleted(isNextPage);
        }
        break;
      case 'cancelled':
        if (isNextPage || isRefresh || !cancelled.pagination?.total) {
          getCancelled(isNextPage);
        }
        break;
    }
  };

  useEffect(() => {
    loadOrders(firstFetch);
  }, []);

  useEffect(() => {
    if (!user) return;

    const ordersRoom = user?.level === 0 ? 'orders' : `orders_${user?.id}`;

    socket.join(ordersRoom);

    socket.on('disconnect', (reason) => {
      socket.join(user?.level === 0 ? 'orders' : `orders_${user?.id}`);
    });

    return () => {
      socket.leave(ordersRoom);
    };
  }, [socket, user]);

  const handleSetState = useCallback((prevState, order, status) => {
    const { orders } = prevState;

    const newOrder = orders.find((_order, index) => {
      if (_order.id === order?.id) {
        if (_order.status !== order?.status) {
          delete order?.total;
          delete order?.subtotal;
          Object.assign(_order, order);
        } else if (
          _order?.driver?.id !== order?.driver?.id &&
          user?.level === 4
        ) {
          orders.splice(index, 1);
        }

        return true;
      }

      return false;
    });

    if (!newOrder && status.includes(order?.status)) {
      orders.unshift(order);
    }

    return { ...prevState, orders };
  }, []);

  const handleOrder = useCallback(async (order, isRegister) => {
    if (!isRegister) {
      showToast(
        ToastType.Info,
        t(
          'SPECIFIC_ORDER_UPDATED',
          'Your order number _NUMBER_ has updated'
        ).replace('_NUMBER_', order.id)
      );
      setPending((prevState) =>
        handleSetState(prevState, order, orderStatus.pending)
      );
      setInProgress((prevState) =>
        handleSetState(prevState, order, orderStatus.inProgress)
      );
      setCompleted((prevState) =>
        handleSetState(prevState, order, orderStatus.completed)
      );
      setCancelled((prevState) =>
        handleSetState(prevState, order, orderStatus.cancelled)
      );
    } else {
      showToast(
        ToastType.Info,
        t('SPECIFIC_ORDER_ORDERED', 'Order _NUMBER_ has been ordered').replace(
          '_NUMBER_',
          order.id
        )
      );
      setPending((prevState) => {
        return { ...prevState, orders: [order, ...prevState.orders] };
      });
    }
  }, []);

  useEffect(() => {
    socket.on('orders_register', (order) => handleOrder(order, true));
    socket.on('update_order', (order) => handleOrder(order, false));

    return () => {
      socket.off('orders_register', (order) => handleOrder(order, true));
      socket.off('update_order', (order) => handleOrder(order, false));
    };
  }, [socket, user]);

  return (
    <UIComponent
      {...props}
      pending={pending}
      inProgress={inProgress}
      completed={completed}
      cancelled={cancelled}
      activeStatus={activeStatus}
      setActiveStatus={setActiveStatus}
      loadOrders={loadOrders}
    />
  );
};

CumulativeOrders.propTypes = {
  /**
   * UI Component, this must be contain all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,

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
    controlType: PropTypes.oneOf(['infinity', 'pages']),
  }),

  /**
   * First data fetched
   */
  firstFetch: PropTypes.string,

  /**
   * String parameter to sort the fetch
   */
  sortBy: PropTypes.string,
};

CumulativeOrders.defaultProps = {
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' },
  firstFetch: 'pending',
  sortBy: '-id',
};
