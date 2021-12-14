import react, {Fragment} from "react";

import {
  BrowserRouter as Router,Routes,
  Route
} from "react-router-dom";

import './App.css';


import  Header  from "./components/header";
import Footer from "./components/footer";
import Nav from "./components/nav";

import HomePage from "./components/pages/home";
import BagPage from "./components/pages/bags";
import CartPage from "./components/pages/cart";
import AdminPage from "./components/pages/AdminPage";
import CustomerPage from "./components/pages/customer";

function App() {
  return (
    <div className="App">
    <Router>
       <Header/>
           <Nav/>
             <Routes>
          <Route path ='/HomePage' exact element = {<HomePage/>} />
          <Route path ='/BagPage'  exact element = {<BagPage/>} />
          <Route path ='/CartPage' exact element = {<CartPage/>} />
          <Route path ='/AdminPage' exact element = {<AdminPage/>}/>
          <Route path = '/CustomerPage' exact element = {<CustomerPage/>}/>
             </Routes>
           <Footer/>
      
    </Router>
   
    </div>
  );
}

export default App;
