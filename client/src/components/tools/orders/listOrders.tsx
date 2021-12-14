import React, { Fragment, useEffect, useState } from "react";



const ListOrders = () => {
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    try {
      const response = await fetch("http://localhost:5000/orders");
      const jsonData = await response.json();

      setOrders(jsonData);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return <Fragment>
      
  </Fragment>;
};

export default ListOrders;
