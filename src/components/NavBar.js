import React from "react";
import { NavLink } from "react-router-dom";

export function NavBar(props) {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
     </NavLink> 
    |
      {/* <NavLink exact to="/products/new">
        Ask
      </NavLink> */}
      <NavLink exact to="/products">
         Products
      </NavLink>
    </nav>
  );
}
