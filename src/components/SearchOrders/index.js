import React, { useState, useEffect } from 'react';
import PropTypes, { string, object } from 'prop-types';
import { useSession } from '../../contexts/SessionContext';
import { useConfig } from '../../contexts/ConfigContext';
import { useApi } from '../../contexts/ApiContext';

export const SearchOrders = (props) => {
  const {
    UIComponent,
    fetchAll,
    propsToFetch,
    paramsToFetch,
    conditionsToFetch,
    conditionsConectorType,
  } = props;

  const [{ token }] = useSession();
  const [{ configs }] = useConfig();
  const [ordering] = useApi();

  const [businesses, setBusinesses] = useState({
    data: [],
    loading: false,
    error: null,
  });
  const [cities, setCities] = useState({
    data: [],
    loading: false,
    error: null,
  });
  const [drivers, setDrivers] = useState({
    data: [],
    loading: false,
    error: null,
  });
  const [paymentMethods, setPaymentMethods] = useState({
    data: [],
    loading: false,
    error: null,
  });

  const where = {
    conditions: conditionsToFetch,
    conector: conditionsConectorType,
  };

  /**
   * Method to get businesses from SDK
   */
  const getBusinesses = async () => {
    setBusinesses({ ...businesses, loading: true, error: null });

    try {
      const {
        content: { result, error },
      } = await ordering
        .businesses()
        .select(propsToFetch)
        .parameters(paramsToFetch)
        .where(where)
        .asDashboard()
        .get();

      if (!error) {
        setBusinesses({ ...businesses, data: result, loading: false });
      } else {
        setBusinesses({ ...businesses, loading: false, error: result[0] });
      }
    } catch (err) {
      setBusinesses({ ...businesses, loading: false, error: err.message });
    }
  };

  /**
   * Method to get cities from SDK
   */
  const getCities = async () => {
    setCities({ ...cities, loading: true, error: null });

    try {
      const {
        content: { result, error },
      } = await ordering
        .businesses()
        .select(propsToFetch)
        .where(where)
        .asDashboard()
        .get();

      if (!error) {
        setCities({
          ...cities,
          data: [
            ...new Map(
              result?.map((business) =>
                business?.city ? [business.city?.id, business.city] : undefined
              )
            ).values(),
          ],
          loading: false,
        });
      } else {
        setCities({ ...cities, loading: false, error: result[0] });
      }
    } catch (err) {
      setCities({ ...cities, loading: false, error: err.message });
    }
  };

  /**
   * Method to get drivers from SDK
   */
  const getDrivers = async () => {
    setDrivers({ ...drivers, loading: true, error: null });

    try {
      const {
        content: { result, error },
      } = await ordering.setAccessToken(token).users().get();

      if (!error) {
        setDrivers({ ...drivers, data: result, loading: false });
      } else {
        setDrivers({ ...drivers, loading: false, error: result[0] });
      }
    } catch (err) {
      setDrivers({ ...drivers, loading: false, error: err.message });
    }
  };

  useEffect(() => {
    if (fetchAll) {
      getBusinesses();
      getCities();
      getDrivers();
    }
  }, []);

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          options={{
            businesses,
            cities,
            drivers,
            deliveryTypes: configs?.order_types_allowed,
          }}
          getBusinesses={getBusinesses}
          getDrivers={getDrivers}
          getCities={getCities}
        />
      )}
    </>
  );
};

SearchOrders.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,

  /**
   * Boolean indicating whether to fetch all
   */
  fetchAll: PropTypes.bool,

  /**
   * Array of business props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),

  /**
   * Object of params to fetch
   */
  paramsToFetch: PropTypes.object,

  /**
   * Array of conditions to fetch
   */
  conditionsToFetch: PropTypes.arrayOf(object),

  /**
   * String that indicates the conector type of the conditions to fetch
   */
  conditionsConectorType: PropTypes.string,
};

SearchOrders.defaultProps = {
  fetchAll: false,
  propsToFetch: ['id', 'name', 'city'],
  paramsToFetch: {
    page: 1,
    page_size: 25,
    orderBy: 'name',
    controlType: 'infinity',
  },
  conditionsToFetch: [
    { attribute: 'enabled', value: { condition: '=', value: 'true' } },
  ],
  conditionsConectorType: 'AND',
};
