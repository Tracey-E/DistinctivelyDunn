import React, { Fragment } from "react";

import "./cart.css";

import { useBagStore, useBasketStore } from "../tools/store/store";
import CreatedBag from "../tools/createdBags/inputCreatedBag";
import BagForm from "../forms/bagform";
import InputOrders from "../tools/customers/inputCustomers";

/**button to go to customer form needs work */

const CartPage = () => {
  var bags = useBagStore((state) => state.bags);
  const decreaseCount = useBasketStore((state) => state.decreaseCount);
  let totalPrice = 0;

  const addTotalPrice = () => {
    bags.map((bag) => (totalPrice = totalPrice + bag.price));
    return totalPrice;
  };

  const DeleteItem = (e) => {
    const item = e;

    const index = bags.indexOf(item);

    bags.splice(index, 1);
    decreaseCount(useBasketStore, -1);

    return (state) => state.bags;
  };

  /**still need to work on  delete buttons to remove single item or all items.
   * also a buy button to add items to  db and get paypal button/ function to pay for goods
   
   the place order button button needs to generate order, customers details form then open payment option */

  return (
    <Fragment>
      <div className="cartPage">
        <table className="cartList">
          <caption>
            List of items in your basket, The number of items is{" "}
            {useBasketStore((state) => state.basketCount)}
          </caption>
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Option</th>
              <th>Price</th>
              <th>Delete item</th>
            </tr>
          </thead>

          <tbody>
            {bags.map((bag) => (
              <React.Fragment key={bag.id}>
                <tr className="start" key={bag.id}>
                  <td className="bold"> Bag:</td>

                  <td> </td>
                  <td></td>

                  <td> </td>
                </tr>
                <tr>
                  <td></td>
                  <td className="bold">Design:</td>
                  <td>{bag.designName}</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="bold">Design color:</td>
                  <td> {bag.designColorName}</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="bold">Bag color:</td>
                  <td>{bag.bagColorName}</td>
                  <td>£{bag.price}</td>
                  <td>
                    <button type="button" onClick={DeleteItem}>
                      Delete Item
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>

        <div className="price">
          <h3>Total Price:£{addTotalPrice()}</h3>{" "}
        </div>
        <button id="cartButton" type="button" onClick={InputOrders}>
          BUY{" "}
        </button>
      </div>
    </Fragment>
  );
};

export default CartPage;
