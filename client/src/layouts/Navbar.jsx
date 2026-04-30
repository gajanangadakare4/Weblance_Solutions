import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-bg.png";
import "../css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="nav-left">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li onClick={() => goTo("/")}>Home</li>
        <li onClick={() => goTo("/#about")}>About</li>
        <li onClick={() => goTo("/#services")}>Services</li>

        {/* OR direct routes */}
        <li onClick={() => goTo("/pricing")}>Pricing</li>

        <li onClick={() => goTo("/enquiry")}>Contact</li>
      </ul>

      <div className="nav-right">
        <button className="cta" onClick={() => goTo("/enquiry")}>
          Get Started
        </button>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;