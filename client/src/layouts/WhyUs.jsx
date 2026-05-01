import React from "react";

import {
  Sparkles,
  ShieldCheck,
  Rocket,
  Users,
  BadgeDollarSign,
  Clock3,
  Layers3,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

import "../css/WhyUs.css";

const WhyUs = () => {

  const reasons = [
    {
      icon: <Users size={28} />,
      title: "Experienced Team",
      desc:
        "Our skilled professionals deliver modern, scalable, and reliable digital solutions tailored to your business goals.",
      highlight: "Expert-led execution"
    },

    {
      icon: <ShieldCheck size={28} />,
      title: "Client-Centric Approach",
      desc:
        "We understand your vision deeply and build customized solutions that align perfectly with your objectives.",
      highlight: "Your success comes first"
    },

    {
      icon: <Rocket size={28} />,
      title: "Result-Driven Solutions",
      desc:
        "We focus on measurable growth, better engagement, and high-performance digital experiences.",
      highlight: "Growth-focused strategy"
    },

    {
      icon: <BadgeDollarSign size={28} />,
      title: "Affordable Pricing",
      desc:
        "Get premium-quality services with flexible and cost-effective pricing for startups and businesses.",
      highlight: "High value, low cost"
    },

    {
      icon: <Layers3 size={28} />,
      title: "End-to-End Services",
      desc:
        "From web development to digital marketing, we handle complete digital transformation under one roof.",
      highlight: "Complete digital ecosystem"
    },

    {
      icon: <Clock3 size={28} />,
      title: "On-Time Delivery",
      desc:
        "We follow a streamlined workflow to ensure every project is delivered on schedule without compromising quality.",
      highlight: "Fast & reliable delivery"
    },

    {
      icon: <Sparkles size={28} />,
      title: "Modern Technologies",
      desc:
        "We leverage the latest technologies and best practices to create future-ready digital products.",
      highlight: "Innovation-driven solutions"
    },

    {
      icon: <Headphones size={28} />,
      title: "Continuous Support",
      desc:
        "Our partnership continues after launch with ongoing support, updates, optimization, and maintenance.",
      highlight: "Long-term partnership"
    }
  ];

  return (

    <section className="whyus-section">

      {/* BACKGROUND EFFECTS */}
      <div className="whyus-bg whyus-bg-1"></div>
      <div className="whyus-bg whyus-bg-2"></div>

      <div className="whyus-container">

        {/* HEADER */}
        <div className="whyus-header">

          <span className="whyus-tag">
            <Sparkles size={16} />
            Why Businesses Trust Us
          </span>

          <h2>
            Delivering Digital Excellence
            Through Innovation & Strategy
          </h2>

          <p>
            We combine creativity, technology, and strategy to deliver
            impactful digital solutions that help businesses grow,
            scale, and succeed in the competitive digital landscape.
          </p>

        </div>

        {/* GRID */}
        <div className="whyus-grid">

          {reasons.map((item, index) => (

            <div
              className="whyus-card"
              key={index}
            >

              {/* TOP */}
              <div className="whyus-top">

                <div className="whyus-icon">
                  {item.icon}
                </div>

                <span className="whyus-highlight">
                  {item.highlight}
                </span>

              </div>

              {/* CONTENT */}
              <div className="whyus-content">

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                {/* <button className="whyus-btn">

                  Learn More

                  <ArrowUpRight size={16} />

                </button> */}

              </div>

              {/* CARD NUMBER */}
              <div className="whyus-number">
                0{index + 1}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyUs;