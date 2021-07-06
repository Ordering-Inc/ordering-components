import React from "react";

import { SingleOrderCardUI } from "../SingleOrderCardUI";
import { SingleOrderCard } from "../../../src/components/SingleOrderCard";

export const OrderChangeUI = (props) => {
  const { beforeComponents, afterComponents, beforeElements, afterElements } =
    props;

  return (
    <>
      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>{BeforeElement}</React.Fragment>
      ))}

      {beforeComponents.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}

      <h1 style={{ textTransform: "capitalize" }}>{orderType} order</h1>

      {order.length > 0 &&
        order.map((order) => (
          <div
            className="orders"
            key={order.id}
            style={{
              border: "1px solid gray",
              padding: "20px",
              width: "200px",
            }}
          >
            <SingleOrderCard
              UIComponent={SingleOrderCardUI}
              order={order}
              orderType={orderType}
            />
          </div>
        ))}

      {afterComponents.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}

      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>{AfterElement}</React.Fragment>
      ))}
    </>
  );
};
