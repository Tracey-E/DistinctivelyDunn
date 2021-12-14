import React from "react";
import { Link } from "react-router-dom";

import { useBasketStore } from "./tools/store/store";

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
          <li> Basket {useBasketStore((state)=> state.basketCount)}</li>

        </Link>
        <Link to="/AdminPage">
          {""}
          <li>Admin log in</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
