import React from "react";
import { Link } from "react-router-dom";

import { useBasketStore } from "./tools/store/store";
import basket from "../assets/basket/basket.jpeg";

function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <Link to="/HomePage">
          {" "}
          <li>Home </li>
        </Link>
        <Link to="/BagPage">
          {" "}
          <li>Bags</li>
        </Link>
        <Link to="/Cards">
          {" "}
          <li>Cards</li>
        </Link>
        <Link to="/Clothing">
          {" "}
          <li>Clothing</li>
        </Link>
        <Link to="/HomeDecor">
          {" "}
          <li>Home decor</li>
        </Link>

        <Link to="/CartPage">
          {" "}
          <li id="basket">
            {" "}
            <img alt="basket icon link to basket page" src={basket}></img>{" "}
            {useBasketStore((state) => state.basketCount)}
          </li>
          <Link to="/AdminPage">
            {""}
            <li id="adminlogin">Admin log in</li>
          </Link>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
