import React, { useState, useEffect } from 'react';
import PropTypes, { string, object } from 'prop-types';
import { useSession } from '../../contexts/SessionContext';
import { useApi } from '../../contexts/ApiContext';

export const Contacts = (props) => {
  const {
    UIComponent,
    firstFetch,
    businessProps,
    sortParams,
    paginationSettings,
    conditions,
    conditionsConector,
  } = props;

  const where = {
    conditions: conditions,
    conector: conditionsConector,
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
    pageSize: paginationSettings.page_size ?? 2,
  });

  /**
   * Method to get businesses from SDK
   */
  const getBusinesses = async (nextPage) => {
    setContacts({ data: nextPage ? contacts.data : [], loading: true, error: null });

    const pageFetch = {
      page: nextPage ? pagination.currentPage + 1 : pagination.currentPage,
      page_size: pagination.pageSize
    }

    try {
      const {
        content: { result, error, pagination: pageConfig },
      } = await ordering
        .businesses()
        .select(businessProps)
        .parameters(sortParams)
        .where(where)
        .asDashboard()
        .get({query: pageFetch});

      if (!error) {
        setContacts({ ...contacts, data: nextPage ? contacts.data.concat(result) : result, loading: false });
        setPagination({
          currentPage: pageConfig.current_page,
          pageSize: pageConfig.page_size,
          totalPages: pageConfig.total_pages,
          total: pageConfig.total,
          from: pageConfig.from,
          to: pageConfig.to
        })
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
    setContacts({ data: nextPage ? contacts.data : [], loading: true, error: null });

    const pageFetch = {
      page: nextPage ? pagination.currentPage + 1 : pagination.currentPage,
      page_size: pagination.pageSize
    }

    try {
      const {
        content: { result, error },
      } = await ordering.setAccessToken(token).users().where([{ attribute: 'level', value: [3] }]).get({query: pageFetch});

      if (!error) {
        setContacts({ ...contacts, data: nextPage ? contacts.data.concat(result) : result, loading: false });
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
    setContacts({ data: nextPage ? contacts.data : [], loading: true, error: null });

    const pageFetch = {
      page: nextPage ? pagination.currentPage + 1 : pagination.currentPage,
      page_size: pagination.pageSize
    }

    try {
      const {
        content: { result, error },
      } = await ordering.setAccessToken(token).users().where([{ attribute: 'level', value: [4] }]).get({query: pageFetch});

      if (!error) {
        setContacts({ ...contacts, data: nextPage ? contacts.data.concat(result) : result, loading: false });
      } else {
        setContacts({ ...contacts, loading: false, error: result[0] });
      }
    } catch (err) {
      setContacts({ ...contacts, loading: false, error: err.message });
    }
  };

  const loadMore = async (key) => {
    switch(key) {
      case 2:
        getBusinesses(true);
        break;
      case 3:
        getCustomers(true)
        break;
      case 4:
        getDrivers(true);
        break;
    }
  }

  useEffect(() => {
    switch(firstFetch) {
      case 'businesses':
        getBusinesses();
        break;
      case 'customers':
        getCustomers()
        break;
      case 'drivers':
        getDrivers();
        break;
      default:
        setContacts({...contacts, loading: false})
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
   * 
   */
  firstFetch: PropTypes.string,

  /**
   * falta
   */
  paginationSettings: PropTypes.object,

  /**
   * Array of business props to fetch
   */
   businessProps: PropTypes.arrayOf(string),

  /**
   * Object of params to fetch
   */
   sortParams: PropTypes.object,

  /**
   * Array of conditions to fetch
   */
  conditions: PropTypes.arrayOf(object),

  /**
   * String that indicates the conector type of the conditions to fetch
   */
  conditionsConector: PropTypes.string,
};

Contacts.defaultProps = {
  firstFetch: 'businesses',
  businessProps: ['id', 'name', 'logo'],
  paginationSettings: { page: 1, pageSize: 2, controlType: 'infinity' },
  sortParams: {
    orderBy: 'last_direct_message_at',
    orderDirection: 'asc',
  },
  conditions: [
    { attribute: 'enabled', value: { condition: '=', value: 'true' } },
  ],
  conditionsConector: 'AND',
};
