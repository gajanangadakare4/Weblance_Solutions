import React from "react";
import "../css/Reviews.css";

const Reviews = () => {

  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Business Owner",
      feedback:
        "Weblance Solutions delivered an outstanding website for our business. The design, performance, and support exceeded our expectations.",
    },
    {
      name: "Priya Verma",
      role: "Startup Founder",
      feedback:
        "Their team understood our vision perfectly and created a professional online presence. Highly recommended!",
    },
    {
      name: "Amit Patel",
      role: "E-Commerce Owner",
      feedback:
        "Excellent service and timely delivery. Our online store is now performing much better thanks to Weblance Solutions.",
    }
  ];

  return (
    <section className="review-section">
      <div className="container">

        {/* HEADER */}
        <div className="review-header">
          <h2>What Our Clients Say</h2>
          <p>
            We take pride in delivering quality work and building long-term relationships with our clients.
          </p>
        </div>

        {/* CARDS */}
        <div className="review-grid">
          {reviews.map((item, index) => (
            <div className="review-card" key={index}>

              <p className="review-text">“{item.feedback}”</p>

              <div className="review-user">
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;