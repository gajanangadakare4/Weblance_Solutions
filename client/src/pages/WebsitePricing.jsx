import React, { useState } from "react";
import "../css/WebsitePricing.css";
import Footer from "../layouts/Footer"; // ✅ ADD FOOTER IMPORT

// Icons
import { RiRobot2Fill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const WebsitePricing = () => {

        const navigate = useNavigate();


  const plans = [
    {
      name: "Basic Website",
      price: "₹8,999",
      features: [
        "1–3 Pages Website",
        "Mobile Responsive Design",
        "Basic UI Design",
        "Contact Form",
        "Delivery: 3–5 Days"
      ]
    },
    {
      name: "Business Website",
      price: "₹15,000",
      features: [
        "5–8 Pages Website",
        "Modern UI/UX Design",
        "SEO Friendly Structure",
        "WhatsApp Integration",
        "Speed Optimized",
        "Delivery: 5–7 Days"
      ]
    },
    {
      name: "Premium Website",
      price: "₹25,000+",
      features: [
        "Custom Design Website",
        "Advanced Animations",
        "Admin Panel (Optional)",
        "SEO + Performance Optimization",
        "API Integration",
        "Priority Support"
      ]
    },
    {
      name: "E-Commerce Website",
      price: "₹35,000+",
      features: [
        "Product Listing System",
        "Cart & Checkout System",
        "Payment Gateway Integration",
        "Admin Dashboard",
        "Order Management",
        "Fully Responsive Design"
      ]
    }
  ];

  // simple chat state (optional AI like footer)
  const [openChat, setOpenChat] = useState(false);

  return (
    <>
      <section className="pricing-details-section">
        <div className="container">

          {/* HEADER */}
          <div className="pricing-details-header">
            <h2>🌐 Website Development Pricing</h2>
            <p>Choose the perfect plan for your business website</p>
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

      {/* ✅ FOOTER ADDED HERE */}
      <Footer />

      {/* FLOATING BUTTONS (optional reuse) */}
      <div className="floating-buttons">

        {/* WhatsApp */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="fab whatsapp"
        >
          <FaWhatsapp />
        </a>

        {/* AI CHAT BUTTON */}
        <button
          className="fab chat"
          onClick={() => setOpenChat(!openChat)}
        >
          <RiRobot2Fill />
        </button>

      </div>
    </>
  );
};

export default WebsitePricing;