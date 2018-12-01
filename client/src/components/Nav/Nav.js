import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Nav = () => (
  <nav className="navbar navbar-expand-lg ">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
    <Link to={"/"}  className="nav-brand">
      The Learning App
   </Link>
    </li>
    
     <li className="nav-item active">
     
      <a className="nav-brand"> Our Courses </a>
    </li>
    </ul>
  </nav>
);

export default Nav;
