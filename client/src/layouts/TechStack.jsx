import React from "react";
import {
  Sparkles,
  Code2,
  Megaphone,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import html from "../assets/html.png";
import css from "../assets/css.jpg";
import js from "../assets/js.jpg";
import reactImg from "../assets/react.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.jpg";
import figma from "../assets/figma.png";
import java from "../assets/java.png";
import python from "../assets/python.jpg";

import seo from "../assets/seo.jpg";
import analytics from "../assets/google-analytics.jpg";
import ads from "../assets/google-ads.png";
import metaAds from "../assets/meta-ads.png";
import semrush from "../assets/semrush.png";
import mailchimp from "../assets/mailchimp.png";
import ahrefs from "../assets/ahrefs.png";
import canva from "../assets/canva.jpg";
import hootsuite from "../assets/hootsuite.png";
import hubspot from "../assets/hubspot.png";

import "../css/TechStack.css";

const TechStack = () => {

  const devStack = [
    { name: "HTML5", desc: "Modern semantic structure for scalable websites.", img: html },
    { name: "CSS3", desc: "Responsive and visually engaging user interfaces.", img: css },
    { name: "JavaScript", desc: "Dynamic frontend experiences.", img: js },
    { name: "React.js", desc: "Fast UI development library.", img: reactImg },
    { name: "Node.js", desc: "Scalable backend systems.", img: node },
    { name: "MongoDB", desc: "NoSQL database solution.", img: mongo },
    { name: "Java", desc: "Enterprise backend development.", img: java },
    { name: "Python", desc: "AI, automation & backend.", img: python },
    { name: "Figma", desc: "UI/UX design tool.", img: figma }
  ];

  const marketingStack = [
    { name: "SEO Tools", desc: "Rank improvement tools.", img: seo },
    { name: "Google Analytics", desc: "Traffic tracking.", img: analytics },
    { name: "Google Ads", desc: "Paid marketing campaigns.", img: ads },
    { name: "Meta Ads", desc: "Facebook & Instagram ads.", img: metaAds },
    { name: "SEMrush", desc: "SEO research platform.", img: semrush },
    { name: "Ahrefs", desc: "Backlink analysis tool.", img: ahrefs },
    { name: "Mailchimp", desc: "Email marketing automation.", img: mailchimp },
    { name: "Canva", desc: "Design creation tool.", img: canva },
    { name: "Hootsuite", desc: "Social media scheduler.", img: hootsuite },
    { name: "HubSpot", desc: "CRM platform.", img: hubspot }
  ];

  const renderSlides = (data) =>
    data.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="techstack-card">

          <div className="techstack-card-image">
            <img src={item.img} alt={item.name} />
          </div>

          <div className="techstack-card-content">
            <h4>{item.name}</h4>
            <p>{item.desc}</p>
          </div>

        </div>
      </SwiperSlide>
    ));

  return (
    <section className="techstack-section">

      <div className="techstack-bg techstack-bg--one"></div>
      <div className="techstack-bg techstack-bg--two"></div>

      <div className="techstack-container">

        {/* HEADER */}
        <div className="techstack-header">

          <span className="techstack-badge">
            <Sparkles size={16} />
            Technologies & Tools
          </span>

          <h2 className="techstack-title">
            Modern Tech Stack Powering Digital Innovation
          </h2>

          <p className="techstack-subtitle">
            We use modern technologies and marketing tools to build scalable digital solutions.
          </p>

        </div>

        {/* DEVELOPMENT */}
        <div className="techstack-block">

          <div className="techstack-block-header">
            <div className="techstack-block-icon">
              <Code2 size={22} />
            </div>
            <div>
              <h3>Development Technologies</h3>
              <p>Frontend, Backend & UI/UX</p>
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
              1200: { slidesPerView: 3 }
            }}
          >
            {renderSlides(devStack)}
          </Swiper>

        </div>

        {/* MARKETING */}
        <div className="techstack-block">

          <div className="techstack-block-header">
            <div className="techstack-block-icon">
              <Megaphone size={22} />
            </div>
            <div>
              <h3>Digital Marketing Tools</h3>
              <p>SEO, Ads & Analytics</p>
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
              1200: { slidesPerView: 3 }
            }}
          >
            {renderSlides(marketingStack)}
          </Swiper>

        </div>

      </div>
    </section>
  );
};

export default TechStack;