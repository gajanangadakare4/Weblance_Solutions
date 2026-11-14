import React from "react";
import {
  Sparkles,
  Building2,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../css/Industries.css";

const Industries = () => {

  const industries = [
    {
      emoji: "🏪",
      name: "Local Businesses",
      desc: "Helping local brands build strong online visibility and attract customers.",
    },

    {
      emoji: "🏥",
      name: "Doctors & Clinics",
      desc: "Professional healthcare websites with appointment and patient engagement features.",
    },

    {
      emoji: "🍽️",
      name: "Restaurants",
      desc: "Modern restaurant websites with menus, online ordering, and branding solutions.",
    },

    {
      emoji: "🎯",
      name: "Coaches",
      desc: "Personal branding and lead generation websites for coaches and consultants.",
    },

    {
      emoji: "🏡",
      name: "Real Estate Agents",
      desc: "Property showcase websites with lead capture and inquiry systems.",
    },

    {
      emoji: "🛒",
      name: "Small Ecommerce Stores",
      desc: "Scalable ecommerce solutions designed to increase online sales.",
    },

    {
      emoji: "🚀",
      name: "Startups",
      desc: "High-performance websites and digital growth solutions for startups.",
    },

    {
      emoji: "💪",
      name: "Gyms & Fitness",
      desc: "Fitness websites with membership plans, class schedules, and branding.",
    },

    {
      emoji: "🎓",
      name: "Educational Institutes",
      desc: "Smart digital platforms for schools, academies, and training centers.",
    },
  ];

  return (
    <section className="industries-section">

      <div className="industries-bg industries-bg--one"></div>
      <div className="industries-bg industries-bg--two"></div>

      <div className="industries-container">

        {/* HEADER */}
        <div className="industries-header">

          <span className="industries-badge">
            <Sparkles size={16} />
            Industries We Serve
          </span>

          <h2 className="industries-title">
            Empowering Businesses Across Multiple Industries
          </h2>

          <p className="industries-subtitle">
            We create powerful websites and digital marketing solutions tailored for different industries.
          </p>

        </div>

        {/* INDUSTRIES SLIDER */}
        <div className="industries-block">

          <div className="industries-block-header">

            <div className="industries-block-icon">
              <Building2 size={22} />
            </div>

            <div>
              <h3>Our Target Industries</h3>
              <p>Businesses We Help Grow Digitally</p>
            </div>

          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >

            {industries.map((item, index) => (
              <SwiperSlide key={index}>

                <div className="industries-card">

                  <div className="industries-emoji">
                    {item.emoji}
                  </div>

                  <div className="industries-card-content">
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                  </div>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>
    </section>
  );
};

export default Industries;