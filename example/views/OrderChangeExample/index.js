import React from "react";

import { OrderChangeUI } from "../../components/OrderChangeUI";
import { OrderChange } from "../../../src/components/OrderChange";
import { TestComponent } from "../../components/TestComponent";

export const OrderChangeExample = () => {
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: OrderChangeUI,
    /**
     * This must be contains orderId to fetch
     */
    orderId: orderId || "77bdc3ad-cb88-47fe-af40-9763e428a7c3",
    /**
     * Components types before my orders list
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after my orders list
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before my orders list
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after my orders list
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>],
  };

  return <OrderChange {...props} />;
};
