import React from "react";
import {
  Sparkles,
  ArrowUpRight,
  Globe,
  Megaphone,
  Smartphone,
  ShoppingCart,
  Share2,
} from "lucide-react";

import web_dev from "../assets/web_dev.png";
import digital_marketing from "../assets/digital-marketing.png";
import social_media_marketing from "../assets/social_media_marketing.png";
import ecommerce from "../assets/e-commerce.png";
import mobile_app from "../assets/mobile_app.jpg";

import "../css/Service.css";

const Service = () => {

  const services = [
    {
      title: "Web Development",
      desc: "Fast, scalable, and modern websites built for performance and business growth.",
      img: web_dev,
      icon: <Globe size={22} />
    },

    {
      title: "Digital Marketing",
      desc: "Data-driven marketing strategies that increase visibility, traffic, and conversions.",
      img: digital_marketing,
      icon: <Megaphone size={22} />
    },

    {
      title: "Social Media Marketing",
      desc: "Build strong brand engagement through impactful social media campaigns.",
      img: social_media_marketing,
      icon: <Share2 size={22} />
    },

    {
      title: "E-Commerce Solutions",
      desc: "Secure and conversion-focused online stores designed for seamless shopping experiences.",
      img: ecommerce,
      icon: <ShoppingCart size={22} />
    },

    {
      title: "Mobile App Development",
      desc: "Modern Android & iOS applications with smooth user experience and scalable architecture.",
      img: mobile_app,
      icon: <Smartphone size={22} />
    }
  ];

  return (

    <section
      id="services"
      className="service-section"
    >

      {/* BACKGROUND EFFECTS */}
      <div className="service-bg service-bg-1"></div>
      <div className="service-bg service-bg-2"></div>

      <div className="service-container">

        {/* HEADER */}
        <div className="service-header">

          <span className="service-tag">
            <Sparkles size={16} />
            Our Premium Services
          </span>

          <h2>
            Smart Digital Solutions
            For Modern Businesses
          </h2>

          <p>
            We provide innovative, scalable, and performance-driven
            digital services designed to help businesses grow,
            build stronger online presence, and achieve long-term success.
          </p>

        </div>

        {/* SERVICES GRID */}
        <div className="service-grid">

          {services.map((item, index) => (

            <div
              className="service-card"
              key={index}
            >

              {/* TOP */}
              <div className="service-top">

                <div className="service-icon-box">
                  {item.icon}
                </div>

                <div className="service-image">
                  <img
                    src={item.img}
                    alt={item.title}
                  />
                </div>

              </div>

              {/* CONTENT */}
              <div className="service-content">

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                {/* <button className="service-btn">
                  Learn More
                  <ArrowUpRight size={18} />
                </button> */}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Service;