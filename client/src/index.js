import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

ReactDOM.render(
  <Router>
    <StrictMode>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </StrictMode>
  </Router>,
  document.getElementById("root")
);
