import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSession } from "../../contexts/SessionContext";
import { useApi } from "../../contexts/ApiContext";

export const OrderChange = (props) => {
  const { UIComponent } = props;

  const [orderState, setOrderState] = useState({
    order: null,
    loading: false,
    error: null,
  });
  const [ordering] = useApi();

  /**
   * Get token from context
   */
  const [{ token }] = useSession();
  const requestsState = {};

  /**
   * Method to update  orders state from API
   */

  const handleUpdateStateOrder = async (body = {}) => {
    setOrderState({ ...orderState, loading: true });
    const { comments, min, hour, action, orderId } = body;
    const time = hour * 60 + parseInt(min);

    const orderStatus = {
      acceptByBusiness: {
        prepared_in: time,
        status: 7,
      },
      rejectByBusiness: {
        comment: comments,
        status: 5,
      },
      acceptByDriver: {
        delivered_in: time,
        status: 8,
      },
      rejectByDriver: {
        comment: comments,
        status: 6,
      },
    };

    try {
      const source = {};
      requestsState.order = source;
      const bodyToSend = orderStatus[action] || {};
      const {
        content: { error, result },
      } = await ordering.setAccessToken(token).orders(orderId).save(bodyToSend);

      if (!error) {
        setOrderState({ ...orderState, loading: false, order: result });
      }
      if (error) {
        setOrderState({
          ...orderState,
          loading: false,
          error: error,
          order: result[0],
        });
      }
    } catch (err) {
      setOrderState({
        ...orderState,
        loading: false,
        error: error,
        order: err.message,
      });
    }
  };

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          orderState={orderState}
          updateStateOrder={handleUpdateStateOrder}
        />
      )}
    </>
  );
};

OrderChange.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * This must be contains orderId to fetch
   */
  orderId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Components types before my orders list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after my orders list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before my orders list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after my orders list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element),
};

OrderChange.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
};
