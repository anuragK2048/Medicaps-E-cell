// Navbar.js
import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/e_summit.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
        <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
        <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            E-Summit 24'
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>
            Archives
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Our Team
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
