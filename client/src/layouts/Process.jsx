import React from "react";
import {
  Sparkles,
  Search,
  Lightbulb,
  Palette,
  Code2,
  FlaskConical,
  Rocket,
  Handshake,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../css/Process.css";

const Process = () => {

  const steps = [
    { icon: <Search size={28} />, title: "Discovery", desc: "Understanding goals and requirements.", focus: "Business Understanding", deliverables: "Requirement Analysis", gradient: "blue" },
    { icon: <Lightbulb size={28} />, title: "Planning", desc: "Strategic roadmap creation.", focus: "Strategy & Roadmap", deliverables: "Timeline Planning", gradient: "purple" },
    { icon: <Palette size={28} />, title: "Design", desc: "UI/UX design creation.", focus: "User Experience", deliverables: "Wireframes & UI", gradient: "pink" },
    { icon: <Code2 size={28} />, title: "Development", desc: "Building scalable systems.", focus: "Clean Code", deliverables: "Frontend + Backend", gradient: "cyan" },
    { icon: <FlaskConical size={28} />, title: "Testing", desc: "Quality assurance phase.", focus: "QA Testing", deliverables: "Bug-free System", gradient: "green" },
    { icon: <Rocket size={28} />, title: "Launch", desc: "Deployment & go-live.", focus: "Production Deploy", deliverables: "Live System", gradient: "orange" },
    { icon: <Handshake size={28} />, title: "Support", desc: "Maintenance & updates.", focus: "Long-term Support", deliverables: "Updates & Fixes", gradient: "violet" }
  ];

  return (
    <section className="process-section">

      <div className="process-bg process-bg-1"></div>
      <div className="process-bg process-bg-2"></div>

      <div className="process-container">

        {/* HEADER */}
        <div className="process-header">

          <span className="process-tag">
            <Sparkles size={16} />
            Workflow & Strategy
          </span>

          <h2>Our Modern Development Process</h2>

          <p>
            Structured workflow designed for scalable and high-quality delivery.
          </p>

        </div>

        {/* SWIPER CAROUSEL */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
          }}
        >

          {steps.map((step, index) => (
            <SwiperSlide key={index}>

              <div className={`process-card ${step.gradient}`}>

                <div className="process-number">
                  0{index + 1}
                </div>

                <div className="process-icon">
                  {step.icon}
                </div>

                <div className="process-content">

                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>

                  <div className="process-info">

                    <div className="info-box">
                      <span>Focus</span>
                      <h4>{step.focus}</h4>
                    </div>

                    <div className="info-box">
                      <span>Deliverables</span>
                      <h4>{step.deliverables}</h4>
                    </div>

                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default Process;