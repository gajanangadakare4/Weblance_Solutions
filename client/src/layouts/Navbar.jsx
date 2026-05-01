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

  const scrollToSection = (id) => {
    setMenuOpen(false);

    if (window.location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <div className="nav-left">
          <img src={logo} alt="logo" className="logo" />
        </div>

        {/* LINKS */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li onClick={() => goTo("/")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("services")}>Services</li>
          <li onClick={() => goTo("/pricing")}>Pricing</li>
          <li onClick={() => goTo("/enquiry")}>Contact</li>
        </ul>

        {/* RIGHT ACTIONS */}
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

      </div>
    </nav>
  );
};

export default Navbar;