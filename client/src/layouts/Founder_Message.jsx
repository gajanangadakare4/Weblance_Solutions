import React from "react";
import {
  Quote,
  Target,
  Eye,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import founderImg from "../assets/founder.png";
import "../css/Founder_Message.css";

const Founder = () => {
  return (
    <section className="founder-section">

      {/* BACKGROUND EFFECTS */}
      <div className="founder-bg founder-bg-1"></div>
      <div className="founder-bg founder-bg-2"></div>

      <div className="founder-container">

        {/* =========================
            FOUNDER MESSAGE
        ========================= */}
        <div className="founder-wrapper">

          {/* IMAGE SIDE */}
          <div className="founder-left">

            <div className="founder-image-wrapper">

              <div className="founder-image-glow"></div>

              <div className="founder-image-box">
                <img
                  src={founderImg}
                  alt="Founder"
                />
              </div>

              {/* FLOATING CARD */}
              <div className="founder-exp-card">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>

            </div>

          </div>

          {/* CONTENT SIDE */}
          <div className="founder-right">

            <span className="founder-tag">
              <Sparkles size={16} />
              Founder’s Message
            </span>

            <h2>
              Building Digital Solutions
              That Create Real Business Impact
            </h2>

            <div className="quote-icon">
              <Quote size={38} />
            </div>

           <p>
  At Weblance Solutions, our mission is to empower businesses
  with innovative digital solutions that help them stand out
  in today’s competitive online world.
</p>

<p>
  With years of hands-on industry experience, I founded
  Weblance Solutions to deliver scalable, modern,
  and performance-driven digital experiences that
  generate measurable business growth.
</p>

<p>
  We believe every business — whether a startup,
  local brand, or growing enterprise — deserves
  access to high-quality technology solutions that
  create real value and long-term success.
</p>

<p>
  Our approach is built on transparency, trust,
  innovation, and client satisfaction. We focus
  on understanding each client’s vision deeply
  and transforming ideas into impactful digital
  experiences that strengthen their online presence.
</p>

<p>
  Beyond development and marketing, our goal is
  to become a reliable technology partner that
  supports businesses throughout their digital
  growth journey with dedication and continuous innovation.
</p>

            <div className="founder-info">
              <h4>— Mr. Gajanan Gadakare</h4>
              <span>Founder & CTO, Weblance Solutions</span>
            </div>

            {/* <button className="founder-btn">
              Explore Company
              <ArrowRight size={18} />
            </button> */}

          </div>

        </div>

        {/* =========================
            VISION & MISSION
        ========================= */}
        <div className="vision-mission">

          <div className="vm-card">

            <div className="vm-icon">
              <Eye size={28} />
            </div>

            <h3>Our Vision</h3>

            <p>
      To empower businesses with innovative digital
      solutions that create lasting growth, strong
      brand presence, and long-term success.
    </p>

          </div>

          <div className="vm-card">

            <div className="vm-icon">
              <Target size={28} />
            </div>

            <h3>Our Mission</h3>

             <p>
      To deliver reliable, scalable, and result-driven
      web and digital marketing solutions focused on
      client success, quality, and innovation.
    </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Founder;