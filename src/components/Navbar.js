import { NavLink } from 'react-router-dom';
import React from 'react';

const Navbar = () => (
  <header className="header">
    <h2>BookStore CMS</h2>
    <nav className="navbar">
      <NavLink className="navlink" to="/">Books</NavLink>
      <NavLink className="navlink" to="/Categories">Categories</NavLink>
    </nav>
    <i className="fa-solid fa-user" />
  </header>

);
export default Navbar;
