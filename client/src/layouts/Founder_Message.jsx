import React from "react";
import founderImg from "../assets/founder.png";
import "../css/Founder_Message.css";

const Founder = () => {
  return (
    <section className="founder-section">
      <div className="container">

        {/* FOUNDER MESSAGE */}
        <div className="founder-message">

          {/* LEFT - IMAGE */}
          <div className="founder-left">
            <img src={founderImg} alt="Founder" />
          </div>

          {/* RIGHT - CONTENT */}
          <div className="founder-right">
            <h2>Founder’s Message</h2>

            <p>
              At Weblance Solutions, our goal is to empower businesses with the right digital 
              tools and strategies to succeed in an ever-evolving online world. 
              We believe that every business deserves a strong and impactful digital presence.
            </p>

            <p>
              With years of hands-on experience in the IT industry, I started Weblance Solutions Solutions 
              with a vision to deliver high-quality, reliable, and result-oriented 
              digital solutions. Our focus is not just on building websites, but on 
              creating meaningful digital experiences that drive real growth.
            </p>

            <p>
              We are committed to innovation, client satisfaction, and delivering 
              long-term value through every project we undertake.
            </p>

            <h4>— Mr. Gajanan Gadakare</h4>
            <span>Founder & CTO, Weblance Solutions Solutions</span>
          </div>

        </div>

        {/* VISION & MISSION */}
        <div className="vision-mission">

          <div className="card">
            <h3>Our Vision</h3>
            <p>
              To become a trusted digital partner for businesses by delivering 
              innovative, scalable, and impactful digital solutions that drive 
              long-term success.
            </p>
          </div>

          <div className="card">
            <h3>Our Mission</h3>
            <p>
              To help businesses grow digitally by providing customized web 
              development and marketing solutions that are affordable, 
              reliable, and results-driven.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Founder;