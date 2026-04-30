import React from "react";
import logo from "../assets/logo-bg.png";
import "../css/Header_Style.css";

const Header_Section = () => {

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  return (
    <div className="header-container" onMouseMove={handleMouseMove}>

      {/* BACKGROUND IMAGE */}
      <div
        className="header-bg"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>

      {/* CONTENT */}
      <div className="header-content">
        <h1>Build Your Digital Presence With Weblance Solutions</h1>
        <p>
          We create powerful websites and digital marketing strategies to grow your business online.
        </p>
        <button className="cta-btn">Get Started</button>
      </div>

    </div>
  );
};

export default Header_Section;