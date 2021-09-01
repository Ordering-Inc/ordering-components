import React, { useState, useEffect } from 'react';
import PropTypes, { string, object } from 'prop-types';
import { useSession } from '../../contexts/SessionContext';
import { useApi } from '../../contexts/ApiContext';
import { useWebsocket } from '../../contexts/WebsocketContext';

export const Contacts = (props) => {
  const {
    UIComponent,
    firstFetch,
    orderProps,
    businessProps,
    customerProps, // not used because it stops sending "quialfication"
    driverProps,
    businessConditions,
    customerConditions,
    driverConditions,
    sortParams,
    paginationSettings,
    conditionsConector,
  } = props;

  const params = {
    orderBy: (sortParams.direction === 'desc' ? '-' : '') + sortParams.param,
  };

  const [{ token, user }] = useSession();
  const [ordering] = useApi();
  const socket = useWebsocket();

  const [sortBy, setSortBy] = useState(sortParams);
  const [orders, setOrders] = useState({
    data: [],
    loading: true,
    error: null,
  });
  const [contacts, setContacts] = useState({
    data: [],
    loading: true,
    error: null,
  });
  const [pagination, setPagination] = useState({
    currentPage:
      paginationSettings.controlType === 'pages' &&
      paginationSettings.page &&
      paginationSettings.page >= 1
        ? paginationSettings.page - 1
        : 1,
    pageSize: paginationSettings.pageSize ?? 6,
  });

  const getOrders = async (nextPage) => {
    setOrders({
      data: nextPage ? orders.data : [],
      loading: true,
      error: null,
    });

    const parameters = {
      orderBy: (sortBy.direction === 'desc' ? '-' : '') + sortBy.param,
    };
    const pageFetch = {
      page: nextPage ? pagination.currentPage + 1 : paginationSettings.page,
      page_size: pagination.pageSize || paginationSettings.pageSize,
    };

    try {
      const {
        content: { result, error, pagination: pageConfig },
      } = await ordering
        .orders()
        // .select(orderProps)
        .parameters(parameters)
        .asDashboard()
        .get({ query: pageFetch });

      if (!error) {
        setOrders({
          ...orders,
          data: nextPage ? orders.data.concat(result) : result,
          loading: false,
        });
        setPagination({
          currentPage: pageConfig?.current_page,
          pageSize: pageConfig?.page_size,
          totalPages: pageConfig?.total_pages,
          total: pageConfig?.total,
          from: pageConfig?.from,
          to: pageConfig?.to,
        });
      } else {
        setOrders({ ...orders, loading: false, error: result[0] });
      }
    } catch (err) {
      setOrders({ ...orders, loading: false, error: err.message });
    }
  };

  /**
   * Method to get businesses from SDK
   */
  const getBusinesses = async (nextPage) => {
    setContacts({
      data: nextPage ? contacts.data : [],
      loading: true,
      error: null,
    });

    const where = {
      conditions: businessConditions,
      conector: conditionsConector,
    };
    const pageFetch = {
      page: nextPage ? pagination.currentPage + 1 : paginationSettings.page,
      page_size: pagination.pageSize || paginationSettings.pageSize,
    };

    try {
      const {
        content: { result, error, pagination: pageConfig },
      } = await ordering
        .businesses()
        .select(businessProps)
        .parameters(params)
        .where(where)
        .asDashboard()
        .get({ query: pageFetch });

      if (!error) {
        setContacts({
          ...contacts,
          data: nextPage ? contacts.data.concat(result) : result,
          loading: false,
        });
        setPagination({
          currentPage: pageConfig?.current_page,
          pageSize: pageConfig?.page_size,
          totalPages: pageConfig?.total_pages,
          total: pageConfig?.total,
          from: pageConfig?.from,
          to: pageConfig?.to,
        });
      } else {
        setContacts({ ...contacts, loading: false, error: result[0] });
      }
    } catch (err) {
      setContacts({ ...contacts, loading: false, error: err.message });
    }
  };

  /**
   * Method to get customers from SDK
   */
  const getCustomers = async (nextPage) => {
    setContacts({
      data: nextPage ? contacts.data : [],
      loading: true,
      error: null,
    });

    const where = {
      conditions: customerConditions,
      conector: conditionsConector,
    };
    const pageFetch = {
      page: nextPage ? pagination.currentPage + 1 : paginationSettings.page,
      page_size: pagination.pageSize || paginationSettings.pageSize,
    };

    try {
      const {
        content: { result, error, pagination: pageConfig },
      } = await ordering
        .setAccessToken(token)
        .users()
        .where(where)
        .get({ query: pageFetch });

      if (!error) {
        setContacts({
          ...contacts,
          data: nextPage ? contacts.data.concat(result) : result,
          loading: false,
        });
        setPagination({
          currentPage: pageConfig?.current_page,
          pageSize: pageConfig?.page_size,
          totalPages: pageConfig?.total_pages,
          total: pageConfig?.total,
          from: pageConfig?.from,
          to: pageConfig?.to,
        });
      } else {
        setContacts({ ...contacts, loading: false, error: result[0] });
      }
    } catch (err) {
      setContacts({ ...contacts, loading: false, error: err.message });
    }
  };

  /**
   * Method to get drivers from SDK
   */
  const getDrivers = async (nextPage) => {
    setContacts({
      data: nextPage ? contacts.data : [],
      loading: true,
      error: null,
    });

    const where = {
      conditions: driverConditions,
      conector: conditionsConector,
    };
    const pageFetch = {
      page: nextPage ? pagination.currentPage + 1 : paginationSettings.page,
      page_size: pagination.pageSize || paginationSettings.pageSize,
    };

    try {
      const {
        content: { result, error, pagination: pageConfig },
      } = await ordering
        .setAccessToken(token)
        .users()
        .select(driverProps)
        .where(where)
        .get({ query: pageFetch });

      if (!error) {
        setContacts({
          ...contacts,
          data: nextPage ? contacts.data.concat(result) : result,
          loading: false,
        });
        setPagination({
          currentPage: pageConfig?.current_page,
          pageSize: pageConfig?.page_size,
          totalPages: pageConfig?.total_pages,
          total: pageConfig?.total,
          from: pageConfig?.from,
          to: pageConfig?.to,
        });
      } else {
        setContacts({ ...contacts, loading: false, error: result[0] });
      }
    } catch (err) {
      setContacts({ ...contacts, loading: false, error: err.message });
    }
  };

  const loadMore = async (key) => {
    switch (key) {
      case 2:
        getBusinesses(true);
        break;
      case 3:
        getCustomers(true);
        break;
      case 4:
        getDrivers(true);
        break;
      default:
        getOrders(true);
    }
  };

  useEffect(() => {
    switch (firstFetch) {
      case 'businesses':
        getBusinesses();
        break;
      case 'customers':
        getCustomers();
        break;
      case 'drivers':
        getDrivers();
        break;
      default:
        getOrders();
    }
  }, []);

  useEffect(() => {
    if (!orders.loading) {
      getOrders();
    }
  }, [sortBy]);

  useEffect(() => {
    if (!token) return;
    socket.join(`messages_orders_${user?.id}`);
    return () => {
      socket.leave(`messages_orders_${user?.id}`);
    };
  }, []);

  const handleMessage = async (message) => {
    const { order_id: orderId } = message;
    setOrders({ ...orders, loading: false });
    // console.log(orderList.loading);
    if (!orders.loading) {
      console.log('chao');
      return null;
    } else {
      console.log('entre');
      return null;
    }
    const order = orders.data.find((order, index) => {
      console.log(
        `${order.id} - ${orderId} ${parseInt(order.id) === parseInt(orderId)}`
      );
      if (order.id === orderId) {
        console.log('lo encontre');
        // const { orders } = orderList
        // console.log(order.unread_count)
        // order.unread_count += 1
        // console.log({id: order.id, unread: order.unread})
        // orders.splice(index, 1)
        // orders.shift(order)
        // setOrderList({...orderList, orders, loading: false})
        return true;
      }

      return false;
    });
    // console.log(order)

    // if (!order) {
    //   console.log('entre')
    //   try {
    //     const { content: { result, error } } = await ordering.setAccessToken(accessToken).orders(orderId).asDashboard().get()

    //     if (!error) {
    //       console.log('fetch')
    //       const { orders } = orderList
    //       orders.shift(result)
    //       setOrderList({...orderList, orders, loading: false})
    //     } else {
    //       console.log('error')
    //     }

    //   } catch (err) {
    //     console.log('err')
    //     setOrderList({...orderList, loading: false})
    //   }
    // }
  };

  useEffect(() => {
    // console.log(orders.loading);

    socket.on('message', (message) => handleMessage(message));

    return () => {
      socket.off('message');
    };
  }, [orders]);

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          orders={orders}
          setSortBy={setSortBy}
          contacts={contacts}
          pagination={pagination}
          getBusinesses={getBusinesses}
          getCustomers={getCustomers}
          getDrivers={getDrivers}
          loadMore={loadMore}
        />
      )}
    </>
  );
};

Contacts.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,

  /**
   * Initial page configuration
   */
  paginationSettings: PropTypes.object,

  /**
   * First data fetched
   */
  firstFetch: PropTypes.string,

  /**
   * Array of business props to fetch
   */
  businessProps: PropTypes.arrayOf(string),

  /**
   * Array of customer props to fetch
   */
  customerProps: PropTypes.arrayOf(string),

  /**
   * Array of driver props to fetch
   */
  driverProps: PropTypes.arrayOf(string),

  /**
   * Object parameters to sort the fetch
   */
  sortParams: PropTypes.object,

  /**
   * Array of conditions to fetch businesses
   */
  businessConditions: PropTypes.arrayOf(object),

  /**
   * Array of conditions to fetch customers
   */
  customerConditions: PropTypes.arrayOf(object),

  /**
   * Array of conditions to fetch drivers
   */
  driverConditions: PropTypes.arrayOf(object),

  /**
   * String that indicates the conector type of the conditions to fetch
   */
  conditionsConector: PropTypes.string,
};

Contacts.defaultProps = {
  paginationSettings: { page: 1, pageSize: 6, controlType: 'infinity' },
  firstFetch: 'businesses',
  orderProps: [
    'id',
    'business',
    'unread_count',
    'delivery_datetime_utc',
    'status',
  ],
  businessProps: ['id', 'name', 'logo'],
  customerProps: [
    'id',
    'name',
    'lastname',
    'photo',
    'assigned_orders_count',
    'qualification', // do not select qualification
    'level',
  ],
  driverProps: [
    'id',
    'name',
    'lastname',
    'photo',
    'assigned_orders_count',
    'level',
  ],
  sortParams: {
    param: 'name',
    direction: 'asc',
  },
  businessConditions: [
    { attribute: 'enabled', value: { condition: '=', value: 'true' } },
  ],
  customerConditions: [{ attribute: 'level', value: [3] }],
  driverConditions: [{ attribute: 'level', value: [4] }],
  conditionsConector: 'AND',
};
