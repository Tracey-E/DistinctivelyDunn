import React, { Fragment, useState } from "react";

import { useBasketStore } from "../store/store";

const InputOrders = () => {
  const [order, setOrder] = useState("");

  /**basketStore content from customers choices to go to order db
   * also need to get customer address to go on db to link to order number
   */
  const updateOrder = async () => {
    try {
      const body = { order };
      const response = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err: any) {
      console.error(err?.message);
    }
  };

  const handleOrder = (e) => {
    e.preventDefault();
    return setOrder(e.target.value);
  };

  return (
    <Fragment>
      <h3>order</h3>
    </Fragment>
  );
};
export default InputOrders;
