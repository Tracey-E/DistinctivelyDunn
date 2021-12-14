import React, { Fragment } from "react";

import "./cart.css";

import { useBagStore, useBasketStore } from "../tools/store/store";
import CreatedBag from "../tools/createdBags/inputCreatedBag";



/**button to go to customer form needs work */

const CartPage = () => {
  const bags = useBagStore((state) => state.bags);
  const deleteBag = useBagStore((state) => state.bags);
  let totalPrice = 0;

  const addTotalPrice = () => {
   
    bags.map((bag) => (totalPrice = totalPrice + bag.price));
    return totalPrice;
  };
  const deleteItem = () => {
    console.log(bags)
    bags.map((bag) => {
      const bagId = bag.id
      console.log(bagId)
      bags.filter((bagId) => {
        const index = bags.indexOf(bagId);
        console.log(index)
        if (index > -1) {
          bags.slice(index, 1);
          console.log(bags)
        
         
        } else {
          return console.log("item not found");
        }
    });
    });
  };

  /**still need to work on  delete buttons to remove single item or all items.
   * also a buy button to add items to  db and get paypal button/ function to pay for goods
   
   the place order button button needs to generate order, customers details form then open payment option */

  return (
    <Fragment>
      <div className="cartPage">
        <p>Basket</p>
        <table className="cartList">
          <caption>
            List of items in your basket, The number of items is{" "}
            {useBasketStore((state) => state.basketCount)}
          </caption>
          <thead>
            <tr>
              <th>Description</th>
              <th>Option</th>
              <th>Price</th>
              <th>Delete item</th>
            </tr>
          </thead>

          <tbody>
            {bags.map((bag) => (
              <>
                <tr className="start">
                  <td key={bag.id} className="bold">
                    {" "}
                    Item:
                  </td>
                  <td> BAG </td>
                  <td>£{bag.price}</td>
                  <td>
                    {" "}
                    <button type="button" onClick={deleteItem}>
                      Delete Item
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="bold">Design</td>
                  <td>{bag.designName}</td>
                </tr>
                <tr>
                  <td className="bold">Design color</td>
                  <td> {bag.designColorName}</td>
                </tr>
                <tr>
                  <td className="bold">Bag color</td>
                  <td>{bag.bagColorName}</td>
                </tr>
              </>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td className="price">Total Price</td>
              <td></td>
              <td>£{addTotalPrice()}</td>
            </tr>
          </tfoot>
        </table>
        <button type ="button">need to go to customer form </button>
      </div>
    </Fragment>
  );
};

export default CartPage;
