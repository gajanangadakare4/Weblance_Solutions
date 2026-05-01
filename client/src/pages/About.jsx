import React from "react";
import logo from "../assets/logo-bg.png";
import "../css/About.css";

const About = () => {
  return (
    <section id="about" className="about">

      {/* LEFT - IMAGE */}
      <div className="about-left">
        <img src={logo} alt="Weblance Solutions" />
      </div>

      {/* RIGHT - CONTENT */}
      <div className="about-right">

        <h2>
          About <span>Weblance Solutions</span>
        </h2>

        <p>
          Weblance Solutions is a results-driven Web Development and Digital Marketing agency
          focused on helping businesses build a strong and impactful online presence.
          We combine creative design, modern technology, and strategic thinking to
          deliver solutions that generate real business growth.
        </p>

        <p>
          Founded by <strong>Mr. Gajanan Gadakare</strong>, Weblance Solutions brings over
          5 years of hands-on experience in delivering high-quality digital solutions
          across various industries. With a passion for innovation, the company is
          committed to building products and services that create meaningful impact.
        </p>

        <p>
          As a growing digital agency, we specialize in developing customized
          solutions tailored to each client’s unique requirements. From responsive
          websites to performance-driven marketing strategies, our goal is to help
          businesses scale efficiently in today’s competitive digital world.
        </p>

        <p>
          At Weblance Solutions, we believe in building long-term partnerships by providing
          reliable, affordable, and result-oriented services that truly add value
          to our clients.
        </p>

        {/* FEATURES */}
        <div className="about-features">

          <div className="feature">
            <h4>5+ Years Experience</h4>
            <p>Strong industry knowledge and expertise</p>
          </div>

          <div className="feature">
            <h4>Client-Focused Approach</h4>
            <p>Solutions designed around your goals</p>
          </div>

          <div className="feature">
            <h4>Affordable & Scalable</h4>
            <p>Ideal for startups and growing businesses</p>
          </div>

        </div>

        <button className="about-btn">
          Learn More
        </button>

      </div>

    </section>
  );
};

export default About;