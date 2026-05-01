import React from "react";
import "../css/MarketingPricing.css";
import Footer from "../layouts/Footer";
import { useNavigate } from "react-router-dom";

const MarketingPricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Starter Growth Plan",
      price: "₹7,999 / month",
      tag: "Starter",
      features: [
        "Social Media Management (2 Platforms)",
        "Content Creation & Scheduling",
        "Brand Awareness Strategy",
        "Monthly Performance Report",
        "Ad Campaign Setup"
      ]
    },
    {
      name: "Business Growth Plan",
      price: "₹12,999 / month",
      tag: "Most Popular",
      highlight: true,
      features: [
        "Social Media Management (4 Platforms)",
        "Advanced SEO Optimization",
        "Google Ads Campaign Management",
        "Content Marketing Strategy",
        "Weekly Performance Reports",
        "Lead Generation Funnel"
      ]
    },
    {
      name: "Performance Marketing Plan",
      price: "₹19,999 / month",
      tag: "Advanced",
      features: [
        "Full Social Media Management",
        "Advanced SEO Strategy",
        "High-ROI Paid Ads",
        "Landing Page Optimization",
        "Competitor Analysis",
        "Conversion Tracking"
      ]
    },
    {
      name: "Enterprise Growth Plan",
      price: "₹29,999+ / month",
      tag: "Enterprise",
      features: [
        "End-to-End Marketing Strategy",
        "Dedicated Marketing Manager",
        "Brand Positioning Strategy",
        "Performance Campaigns",
        "Advanced Analytics",
        "24/7 Priority Support"
      ]
    }
  ];

  return (
    <>
      <section className="pricing-section">
        <div className="container">

          {/* HEADER */}
          <div className="pricing-header">

            <span className="pricing-badge">
              📈 Growth Marketing
            </span>

            <h2>Scale Your Business With Smart Marketing</h2>

            <p>
              Performance-driven digital marketing solutions designed to
              generate leads, boost visibility, and maximize ROI.
            </p>

          </div>

          {/* GRID */}
          <div className="pricing-grid">

            {plans.map((plan, index) => (
              <div
                className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
                key={index}
              >

                {/* TAG */}
                <span className="plan-tag">
                  {plan.tag}
                </span>

                <h3>{plan.name}</h3>

                <h2 className="price">{plan.price}</h2>

                <ul>
                  {plan.features.map((item, i) => (
                    <li key={i}>✔ {item}</li>
                  ))}
                </ul>

                <button
                  className="pricing-btn"
                  onClick={() => navigate("/enquiry")}
                >
                  Get Strategy Plan
                </button>

              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default MarketingPricing;