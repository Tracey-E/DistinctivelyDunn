import React, { Fragment, useState } from "react";



const InputOrders = () => {
  const [customer, setCustomer] = useState("");

  /**basketStore content from customers choices to go to order db
   * also need to get customer address to go on db to link to order number
   */
  const inputCustomer = async () => {
    try {
      const body = { customer };
      const response = await fetch("http://localhost:5000/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err: any) {
      console.error(err?.message);
    }
  };

 

  return (
    <Fragment>
      <h3>Customer</h3>
    </Fragment>
  );

  }
export default InputOrders;