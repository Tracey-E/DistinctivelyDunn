import react from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import PrivateRoutes from "./auth/protected-route";

import Header from "./components/header";
import Footer from "./components/footer";
import Nav from "./components/nav";

import HomePage from "./components/pages/home";
import BagPage from "./components/pages/bags";
import CartPage from "./components/pages/cart";
import AdminPage from "./components/pages/AdminPage";
import AdminLogin from "./components/forms/Admin/adminLogin";

import CustomerPage from "./components/pages/customer";
import Loading from "./components/pages/loading";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/HomePage" exact element={<HomePage />} />
        <Route path="/BagPage" exact element={<BagPage />} />
        <Route path="/CartPage" exact element={<CartPage />} />
        <Route path="/AdminPage" exact element={<AdminPage />} />
        <Route path="/adminLogin" exact element={<AdminLogin />} />
        <Route path="/CustomerPage" element={<PrivateRoutes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
