import React from "react";
import "../css/MarketingPricing.css";
import Footer from "../layouts/Footer"; // ✅ ADD FOOTER
import { useNavigate } from "react-router-dom";

const MarketingPricing = () => {

    const navigate = useNavigate();

  const plans = [
    {
      name: "Starter Growth Plan",
      price: "₹7,999 / month",
      features: [
        "Social Media Management (2 Platforms)",
        "Content Creation & Scheduling",
        "Basic Brand Awareness Strategy",
        "Monthly Performance Report",
        "Ad Campaign Setup & Optimization"
      ]
    },
    {
      name: "Business Growth Plan",
      price: "₹12,999 / month",
      features: [
        "Social Media Management (4 Platforms)",
        "Advanced SEO Optimization",
        "Google Ads Campaign Management",
        "Content Marketing Strategy",
        "Weekly Performance Reports",
        "Lead Generation Funnel Setup"
      ]
    },
    {
      name: "Performance Marketing Plan",
      price: "₹19,999 / month",
      features: [
        "Full Social Media Management",
        "Advanced SEO Strategy & Execution",
        "High-ROI Paid Ad Campaigns",
        "Landing Page Optimization",
        "Competitor & Market Analysis",
        "Conversion Tracking System"
      ]
    },
    {
      name: "Enterprise Growth Plan",
      price: "₹29,999+ / month",
      features: [
        "End-to-End Digital Marketing Strategy",
        "Dedicated Marketing Manager",
        "Brand Positioning & Strategy",
        "Performance Marketing Campaigns",
        "Advanced Analytics & Reporting",
        "24/7 Priority Support"
      ]
    }
  ];

  return (
    <>
      <section className="pricing-details-section">
        <div className="container">

          {/* HEADER */}
          <div className="pricing-details-header">
            <h2>📈 Digital Marketing Solutions</h2>
            <p>
              Strategic marketing solutions designed to scale your brand, generate leads,
              and maximize ROI.
            </p>
          </div>

          {/* GRID */}
          <div className="pricing-details-grid">

            {plans.map((plan, index) => (
              <div className="pricing-details-card" key={index}>
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
  Request Proposal
</button>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ✅ FOOTER ADDED */}
      <Footer />
    </>
  );
};

export default MarketingPricing;