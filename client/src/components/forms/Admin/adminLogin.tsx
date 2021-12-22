//admin login

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AdminLogin = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button
          className="adminLoginButton"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      )}

      <button
        className="btn btn-danger btn-block"
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Log Out
      </button>
    </div>
  );
};

export default AdminLogin;
