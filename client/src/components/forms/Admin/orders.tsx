import React, { Fragment } from "react";

import ListCreatedBag from "../../tools/createdBags/listCreatedBag";
import ListOrders from "../../tools/orders/listOrders";
/** sql order tables names = ordersid, customerid, ordertotal, createdbagid
 *
 * to get orders from db and be able to only show new orders not been processed
 */

const Orders = () => {
  return (
    <Fragment>
      <ListCreatedBag />
      <ListOrders />
    </Fragment>
  );
};

export default Orders;
