import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Sparkles,
  ArrowUpRight,
  Briefcase,
  Users,
  Trophy,
  Layers3,
} from "lucide-react";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

import "../css/Projects.css";

const Projects = () => {

  const stats = [
    { icon: <Briefcase size={26} />, number: "50+", label: "Projects Completed" },
    { icon: <Users size={26} />, number: "30+", label: "Happy Clients" },
    { icon: <Trophy size={26} />, number: "5+", label: "Years Experience" },
    { icon: <Layers3 size={26} />, number: "10+", label: "Ongoing Projects" }
  ];

  const projects = [
    {
      category: "Web Development",
      title: "Business Website",
      desc: "Modern responsive website for brand identity and visibility.",
      img: project1
    },
    {
      category: "E-Commerce",
      title: "Online Store",
      desc: "Scalable shopping platform with secure payments.",
      img: project2
    },
    {
      category: "Marketing",
      title: "Landing Page",
      desc: "High-converting landing page for campaigns.",
      img: project3
    }
  ];

  return (
    <section className="project-section">

      <div className="project-bg project-bg-1"></div>
      <div className="project-bg project-bg-2"></div>

      <div className="project-container">

        {/* HEADER */}
        <div className="project-header">
          <span className="project-tag">
            <Sparkles size={16} />
            Portfolio & Achievements
          </span>

          <h2>Delivering Impactful Digital Solutions</h2>

          <p>
            High-performance digital products that drive growth and engagement.
          </p>
        </div>

        {/* STATS */}
        <div className="stats-grid">
          {stats.map((item, i) => (
            <div className="stat-card" key={i}>
              <div className="stat-icon">{item.icon}</div>
              <div className="stat-content">
                <h3>{item.number}</h3>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CAROUSEL */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={25}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="project-card">

                <div className="project-img">
                  <img src={item.img} alt={item.title} />

                  <div className="project-overlay">
                    <button className="project-view-btn">
                      View Project <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="project-content">
                  <span className="project-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>

                <div className="project-number">0{index + 1}</div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Projects;