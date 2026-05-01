import React from "react";
import {
  Globe,
  Rocket,
  BadgeCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import logo from "../assets/logo-bg.png";
import "../css/About.css";

const features = [
  {
    icon: <Rocket size={22} />,
    title: "5+ Years Experience",
    desc: "Modern web solutions with real industry expertise.",
  },
  {
    icon: <BadgeCheck size={22} />,
    title: "Client-Focused Strategy",
    desc: "Every project aligned with your business growth.",
  },
  {
    icon: <Globe size={22} />,
    title: "Scalable Digital Systems",
    desc: "Built for startups, brands, and future expansion.",
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">

      {/* BACKGROUND EFFECTS */}
      <div className="about-bg-circle about-circle-1"></div>
      <div className="about-bg-circle about-circle-2"></div>

      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-content">

          <span className="about-tag">
            <Sparkles size={16} />
            About Weblance Solutions
          </span>

          <h2>
            Building Modern Digital
            Experiences That Drive
            Business Growth
          </h2>

          <p className="about-text">
            Weblance Solutions is a creative Web Development and
            Digital Marketing agency delivering premium websites,
            scalable applications, branding, and growth-driven
            digital strategies for modern businesses.
          </p>

          <p className="about-text">
            Founded by <strong>Mr. Gajanan Gadakare</strong>,
            we combine innovation, creativity, and technology
            to help startups and brands create a powerful online presence.
          </p>

          {/* FEATURES */}
          <div className="about-features">
            {features.map((item, index) => (
              <div className="feature-card" key={index}>

                <div className="feature-icon">
                  {item.icon}
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>

              </div>
            ))}
          </div>

          {/* BUTTONS */}
          {/* <div className="about-buttons">

            <button className="about-btn primary-btn">
              Explore More
              <ArrowRight size={18} />
            </button>

            <button className="about-btn secondary-btn">
              View Services
            </button>

          </div> */}

        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="about-image">

          <div className="image-wrapper">

            <div className="image-glow"></div>

            <div className="image-box">
              <img
                src={logo}
                alt="Weblance Solutions"
              />
            </div>

            {/* FLOATING EXPERIENCE CARD */}
            <div className="experience-card">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>

            {/* FLOATING PROJECT CARD */}
            <div className="project-card">
              <h4>100+</h4>
              <p>Projects Delivered</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;