import React, { Fragment } from "react";
import { useBagStore } from "../../tools/store/store";
import {useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import Loading from "../../pages/loading";

import InputBagColor from "../../tools/bagColor/inputBagColor";
import InputDesignColors from "../../tools/designColors/inputDesignColors";
import InputDesigns from "../../tools/designs/inputDesigns";
import CreatedBags from "../../tools/createdBags/inputCreatedBag";

import ListBagColors from "../../tools/bagColor/listBagColor";
import ListDesignColor from "../../tools/designColors/listDesignColors";
import ListDesigns from "../../tools/designs/listDesigns";
import Orders from "./orders";

/**
 * see any order details
 * see any customer details to send orders
 * have a count feature to show  new orders or a message to  her to say order received
 * update all aspects of data in tables
 *
 */
const AdminForm = () => {
  const bags = useBagStore((state) => state.bags);
  var bagColorIds = [{}];

  const getIds = () => {
    console.log(bagColorIds);
  };

  return (
    <Fragment>
      <h2>BAGS</h2>
      <div id="AdminForm">
        <section className="forms">
          <div className="bagsInput">
            <label>
              {" "}
              current bag colors <ListBagColors />
            </label>
            <label>
              Add a bag colour <InputBagColor />
            </label>
            <label>
              current design colors <ListDesignColor />
            </label>
            <label>
              Add a design color <InputDesignColors />
            </label>
            <label>
              {" "}
              current designs <ListDesigns />{" "}
            </label>
            <label>
              {" "}
              Add a design <InputDesigns />
            </label>
          </div>
          <h2>Orders</h2>
          <div className="orders">
            <h3>Bag Orders</h3>
            <Orders />
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default withAuthenticationRequired(AdminForm, {
  onRedirecting: () => <Loading />, });