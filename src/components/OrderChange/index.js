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
    const { comments, min, hour, action } = body;
    const prepared_in = hour * 60 + parseInt(min);

    try {
      const source = {};
      requestsState.order = source;
      const bodyToSend = {};
      if (action === "accept") bodyToSend.prepared_in = prepared_in;
      if (action === "reject") bodyToSend.comment = comments;
      bodyToSend.status = action === "accept" ? 7 : 5;

      const {
        content: { error, result },
      } = await ordering
        .setAccessToken(token)
        .orders(route.order.id)
        .save(bodyToSend);

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
      console.log(err);
    }

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
