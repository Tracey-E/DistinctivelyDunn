import React from "react";
import { Route } from "react-router-dom";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Navigate, Outlet, useLocation } from "react-router";

const PrivateRoutes = () => {
  const location = useLocation;
  const authLogin = useAuth0();
  console.log("authLogin", authLogin);

  return authLogin ? <Outlet /> : <Navigate to="/AdminForm" />;
};

export default PrivateRoutes;
