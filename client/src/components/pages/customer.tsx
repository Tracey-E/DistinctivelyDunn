import React, { Fragment } from "react";

//* customer page to get customer details then need payment details at bottom */
/**need to get basket contents for payment amount 
 * customer details to go to db
 * secure payment options
*/

const CustomerPage = () => {
  return (
    <Fragment>
      <div className="CustomerPage">
        <form id="customerForm">
          <h1>Please fill all boxes</h1>
          <div>
            {" "}
            <input type="text" placeholder="name" required></input>
          </div>
          <div>
            {" "}
            <input type="text" placeholder="contact details" required></input>
          </div>
          <div>
            <input type="text" placeholder="address" required></input>
          </div>
          <button>Submit and pay</button>
          <h2>Payment details</h2>
        </form>
      </div>
    </Fragment>
  );
};
export default CustomerPage;
