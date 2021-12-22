import React, { Fragment } from "react";

import AdminForm from "../forms/Admin/adminForm";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./loading";
import AdminLogin from "../forms/Admin/adminLogin";
/**
 * need to do a login to secure this page
 * be able to see admin form to update db
 *  see orders and customer details per order
 * mark orders as new/seen/completed
 */

const AdminPage = () => {
  return (
    <Fragment>
      <div id="AdminPage">
        <h1>Admin</h1>

        <AdminLogin />
        <AdminForm />
      </div>
    </Fragment>
  );
};

export default AdminPage;
