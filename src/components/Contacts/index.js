import React, { useState, useEffect } from 'react';
import PropTypes, { string, object } from 'prop-types';
import { useSession } from '../../contexts/SessionContext';
import { useApi } from '../../contexts/ApiContext';

export const Contacts = (props) => {
  const {
    UIComponent,
    firstFetch,
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
    orderBy:
      (sortParams.orderDirection === 'desc' ? '-' : '') + sortParams.orderBy,
  };

  const [{ token }] = useSession();
  const [ordering] = useApi();

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
        setContacts({ ...contacts, loading: false });
    }
  }, []);

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
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
    orderBy: 'name',
    orderDirection: 'asc',
  },
  businessConditions: [
    { attribute: 'enabled', value: { condition: '=', value: 'true' } },
  ],
  customerConditions: [{ attribute: 'level', value: [3] }],
  driverConditions: [{ attribute: 'level', value: [4] }],
  conditionsConector: 'AND',
};
