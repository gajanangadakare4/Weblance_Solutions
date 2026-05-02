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
    <section className="pricing-wrapper">

      {/* BACKGROUND EFFECTS */}
      <div className="pricing-bg-layer pricing-bg-layer--one"></div>
      <div className="pricing-bg-layer pricing-bg-layer--two"></div>

      <div className="pricing-inner-container">

        {/* HEADER */}
        <div className="pricing-header-block">
          <span className="pricing-badge">
            <Sparkles size={16} />
            Flexible Pricing Plans
          </span>

          <h2 className="pricing-title">
            Affordable Solutions For Every Business
          </h2>

          <p className="pricing-subtitle">
            Choose the perfect service package designed to help your business grow
            with modern technology, strategic marketing, and scalable digital solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="pricing-card-grid">

          {pricingData.map((item) => (
            <div className="pricing-card-item" key={item.title}>

              {/* IMAGE */}
              <div className="pricing-card-image">
                <img src={item.image} alt={item.title} />
                <div className="pricing-card-overlay" />
                <div className="pricing-card-icon">{item.icon}</div>
              </div>

              {/* CONTENT */}
              <div className="pricing-card-content">

                <h3 className="pricing-card-title">{item.title}</h3>
                <p className="pricing-card-desc">{item.desc}</p>

                <div className="pricing-card-features">

                  {item.features.map((feature) => (
                    <div className="pricing-card-feature" key={feature}>
                      <CheckCircle2 size={18} />
                      <span>{feature}</span>
                    </div>
                  ))}

                </div>

                <button
                  className="pricing-card-button"
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