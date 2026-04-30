import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Pricing.css";
 
const Pricing = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="pricing-section">
        <div className="container">

          {/* HEADER */}
          <div className="pricing-header">
            <h2>Our Pricing</h2>
            <p>Select a service to view detailed pricing plans</p>
          </div>

          {/* MAIN CARDS */}
          <div className="pricing-main-grid">

            {/* WEBSITE DEVELOPMENT CARD */}
            <div
              className="pricing-main-card"
              onClick={() => navigate("/pricing/website")}
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Website Development"
                className="pricing-img"
              />

              <div>
                <h2>🌐 Website Development</h2>
                <p>
                  Custom websites, landing pages, UI/UX design & e-commerce solutions.
                </p>
                <span className="pricing-link">View Pricing →</span>
              </div>
            </div>

            {/* DIGITAL MARKETING CARD */}
            <div
              className="pricing-main-card"
              onClick={() => navigate("/pricing/marketing")}
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Digital Marketing"
                className="pricing-img"
              />

              <div>
                <h2>📈 Digital Marketing</h2>
                <p>
                  SEO, Google Ads, Social Media Marketing & content strategy services.
                </p>
                <span className="pricing-link">View Pricing →</span>
              </div>
            </div>

          </div>

        </div>
      </section>

       
    </>
  );
};

export default Pricing;