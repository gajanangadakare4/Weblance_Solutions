import React from "react";

import {
  Sparkles,
  Quote,
  Star,
  ArrowUpRight,
} from "lucide-react";

import "../css/Reviews.css";

const Reviews = () => {

  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Business Owner",
      company: "Retail Brand",
      rating: 5,
      feedback:
        "Weblance Solutions delivered an exceptional website experience with modern design, smooth performance, and outstanding support throughout the project."
    },

    {
      name: "Priya Verma",
      role: "Startup Founder",
      company: "Tech Startup",
      rating: 5,
      feedback:
        "Their team understood our business vision perfectly and transformed it into a professional digital presence that truly represents our brand."
    },

    {
      name: "Amit Patel",
      role: "E-Commerce Owner",
      company: "Online Store",
      rating: 5,
      feedback:
        "From development to optimization, everything was handled professionally. Our online store performance and customer engagement improved significantly."
    }
  ];

  return (

    <section className="review-section">

      {/* BACKGROUND EFFECTS */}
      <div className="review-bg review-bg-1"></div>
      <div className="review-bg review-bg-2"></div>

      <div className="review-container">

        {/* HEADER */}
        <div className="review-header">

          <span className="review-tag">
            <Sparkles size={16} />
            Client Testimonials
          </span>

          <h2>
            Trusted By Businesses
            Across Different Industries
          </h2>

          <p>
            We focus on delivering impactful digital solutions,
            exceptional service quality, and long-term value
            that help businesses grow with confidence.
          </p>

        </div>

        {/* REVIEW GRID */}
        <div className="review-grid">

          {reviews.map((item, index) => (

            <div
              className="review-card"
              key={index}
            >

              {/* TOP */}
              <div className="review-top">

                <div className="review-quote">
                  <Quote size={26} />
                </div>

                <div className="review-rating">

                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="currentColor"
                    />
                  ))}

                </div>

              </div>

              {/* REVIEW TEXT */}
              <p className="review-text">
                {item.feedback}
              </p>

              {/* USER INFO */}
              <div className="review-user">

                <div className="review-avatar">
                  {item.name.charAt(0)}
                </div>

                <div className="review-info">

                  <h4>{item.name}</h4>

                  <span>
                    {item.role} • {item.company}
                  </span>

                </div>

              </div>

              {/* BUTTON */}
              {/* <button className="review-btn">

                View Success Story

                <ArrowUpRight size={16} />

              </button> */}

              {/* NUMBER */}
              <div className="review-number">
                0{index + 1}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Reviews;