import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/list">RickList</NavLink>
      <NavLink to="/item">MortyItem</NavLink>
    </div>
  );
};

export default Navbar;
