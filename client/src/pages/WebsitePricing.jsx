import React, { useState } from "react";
import "../css/WebsitePricing.css";
import Footer from "../layouts/Footer";

import { RiRobot2Fill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const WebsitePricing = () => {
  const navigate = useNavigate();
  const [openChat, setOpenChat] = useState(false);

  const plans = [
    {
      name: "Basic Website",
      price: "₹8,999",
      tag: "Starter",
      features: [
        "1–3 Pages Website",
        "Mobile Responsive Design",
        "Clean UI Design",
        "Contact Form",
        "Delivery: 3–5 Days"
      ]
    },
    {
      name: "Business Website",
      price: "₹15,000",
      tag: "Most Popular",
      highlight: true,
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
      tag: "Advanced",
      features: [
        "Custom UI/UX Design",
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
      tag: "Enterprise",
      features: [
        "Product Management System",
        "Cart & Checkout System",
        "Payment Gateway Integration",
        "Admin Dashboard",
        "Order Management",
        "Fully Responsive Design"
      ]
    }
  ];

  return (
    <>
      <section className="pricing-section">
        <div className="container">

          {/* HEADER */}
          <div className="pricing-header">
            <span className="pricing-badge">Website Solutions</span>

            <h2>Flexible Pricing for Every Business</h2>

            <p>
              Choose a plan that fits your needs — scalable, modern, and performance-driven websites.
            </p>
          </div>

          {/* GRID */}
          <div className="pricing-grid">

            {plans.map((plan, index) => (
              <div
                className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
                key={index}
              >

                {plan.tag && (
                  <span className="plan-tag">{plan.tag}</span>
                )}

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
                  Get Started
                </button>

              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />

      {/* FLOATING ACTION BUTTONS */}
      <div className="floating-buttons">

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="fab whatsapp"
        >
          <FaWhatsapp />
        </a>

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