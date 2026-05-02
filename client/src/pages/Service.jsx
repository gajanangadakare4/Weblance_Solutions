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

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      icon: <Globe size={22} />,
    },
    {
      title: "Digital Marketing",
      desc: "Data-driven marketing strategies that increase visibility, traffic, and conversions.",
      img: digital_marketing,
      icon: <Megaphone size={22} />,
    },
    {
      title: "Social Media Marketing",
      desc: "Build strong brand engagement through impactful social media campaigns.",
      img: social_media_marketing,
      icon: <Share2 size={22} />,
    },
    {
      title: "E-Commerce Solutions",
      desc: "Secure and conversion-focused online stores designed for seamless shopping experiences.",
      img: ecommerce,
      icon: <ShoppingCart size={22} />,
    },
    {
      title: "Mobile App Development",
      desc: "Modern Android & iOS applications with smooth user experience and scalable architecture.",
      img: mobile_app,
      icon: <Smartphone size={22} />,
    },
  ];

  return (
    <section id="services" className="service-section">

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

          <h2>Smart Digital Solutions For Modern Businesses</h2>

          <p>
            We provide innovative, scalable, and performance-driven digital services
            designed to help businesses grow and succeed long-term.
          </p>

        </div>

        {/* CAROUSEL */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >

          {services.map((item, index) => (

            <SwiperSlide key={index}>

              <div className="service-card">

                <div className="service-top">

                  <div className="service-icon-box">
                    {item.icon}
                  </div>

                  <div className="service-image">
                    <img src={item.img} alt={item.title} />
                  </div>

                </div>

                <div className="service-content">

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default Service;