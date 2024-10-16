// Navbar.js
import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/e_summit.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">E-Summit 24'</a>
        </li>
        <li>
          <a href="#portfolio">Archives</a>
        </li>
        <li>
          <a href="#contact">Sponsors</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
