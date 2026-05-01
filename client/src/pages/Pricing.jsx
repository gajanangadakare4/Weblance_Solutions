import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Sparkles,
  Globe,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import "../css/Pricing.css";

const Pricing = () => {

  const navigate = useNavigate();

  const pricingData = [
    {
      title: "Website Development",
      icon: <Globe size={24} />,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Modern websites, business platforms, landing pages, UI/UX design, and scalable e-commerce solutions.",
      features: [
        "Responsive Website Design",
        "Modern UI/UX Experience",
        "SEO Friendly Structure",
        "E-Commerce Development",
      ],
      route: "/pricing/website",
      button: "Explore Plans",
    },

    {
      title: "Digital Marketing",
      icon: <TrendingUp size={24} />,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Performance-driven SEO, paid advertising, branding, and social media strategies for business growth.",
      features: [
        "SEO Optimization",
        "Google & Meta Ads",
        "Social Media Marketing",
        "Lead Generation Campaigns",
      ],
      route: "/pricing/marketing",
      button: "Explore Plans",
    },
  ];

  return (

    <section className="pricing-section">

      {/* BACKGROUND EFFECTS */}
      <div className="pricing-bg pricing-bg-1"></div>
      <div className="pricing-bg pricing-bg-2"></div>

      <div className="pricing-container">

        {/* HEADER */}
        <div className="pricing-header">

          <span className="pricing-tag">
            <Sparkles size={16} />
            Flexible Pricing Plans
          </span>

          <h2>
            Affordable Solutions
            For Every Business
          </h2>

          <p>
            Choose the perfect service package designed to help
            your business grow with modern technology,
            strategic marketing, and scalable digital solutions.
          </p>

        </div>

        {/* PRICING GRID */}
        <div className="pricing-grid">

          {pricingData.map((item, index) => (

            <div
              className="pricing-card"
              key={index}
            >

              {/* IMAGE */}
              <div className="pricing-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="pricing-overlay"></div>

                <div className="pricing-icon">
                  {item.icon}
                </div>

              </div>

              {/* CONTENT */}
              <div className="pricing-content">

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                {/* FEATURES */}
                <div className="pricing-features">

                  {item.features.map((feature, i) => (

                    <div
                      className="pricing-feature"
                      key={i}
                    >

                      <CheckCircle2 size={18} />

                      <span>{feature}</span>

                    </div>

                  ))}

                </div>

                {/* BUTTON */}
                <button
                  className="pricing-btn"
                  onClick={() => navigate(item.route)}
                >

                  {item.button}

                  <ArrowUpRight size={18} />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Pricing;