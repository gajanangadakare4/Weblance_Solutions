import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-bg.png";
import "../css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // PAGE NAVIGATION
  const goTo = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  // SECTION SCROLL
  const scrollToSection = (id) => {
    setMenuOpen(false);

    // IF NOT ON HOME PAGE
    if (window.location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="nav-left">
        <img src={logo} alt="logo" className="logo" />
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li onClick={() => goTo("/")}>
          Home
        </li>

        <li onClick={() => scrollToSection("about")}>
          About
        </li>

        <li onClick={() => scrollToSection("services")}>
          Services
        </li>

        <li onClick={() => goTo("/pricing")}>
          Pricing
        </li>

        <li onClick={() => goTo("/enquiry")}>
          Contact
        </li>

      </ul>

      {/* RIGHT */}
      <div className="nav-right">

        <button
          className="cta"
          onClick={() => goTo("/enquiry")}
        >
          Get Started
        </button>

        {/* HAMBURGER */}
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