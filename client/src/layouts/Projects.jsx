import React from "react";

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

  /* STATS */
  const stats = [
    {
      icon: <Briefcase size={26} />,
      number: "50+",
      label: "Projects Completed"
    },

    {
      icon: <Users size={26} />,
      number: "30+",
      label: "Happy Clients"
    },

    {
      icon: <Trophy size={26} />,
      number: "5+",
      label: "Years Experience"
    },

    {
      icon: <Layers3 size={26} />,
      number: "10+",
      label: "Ongoing Projects"
    }
  ];

  /* PROJECTS */
  const projects = [
    {
      category: "Web Development",
      title: "Business Website",
      desc:
        "A modern responsive website built to strengthen brand identity and improve online visibility for businesses.",
      img: project1
    },

    {
      category: "E-Commerce",
      title: "E-Commerce Store",
      desc:
        "A scalable online shopping platform with secure payment integration and seamless user experience.",
      img: project2
    },

    {
      category: "Digital Marketing",
      title: "Marketing Landing Page",
      desc:
        "A high-converting landing page optimized for lead generation and digital advertising campaigns.",
      img: project3
    }
  ];

  return (

    <section className="project-section">

      {/* BACKGROUND EFFECTS */}
      <div className="project-bg project-bg-1"></div>
      <div className="project-bg project-bg-2"></div>

      <div className="project-container">

        {/* HEADER */}
        <div className="project-header">

          <span className="project-tag">
            <Sparkles size={16} />
            Portfolio & Achievements
          </span>

          <h2>
            Delivering Impactful Digital
            Solutions For Growing Brands
          </h2>

          <p>
            We create high-performance digital products and experiences
            that help businesses improve visibility, engagement,
            and long-term growth.
          </p>

        </div>

        {/* STATS */}
        <div className="stats-grid">

          {stats.map((item, index) => (

            <div
              className="stat-card"
              key={index}
            >

              <div className="stat-icon">
                {item.icon}
              </div>

              <div className="stat-content">

                <h3>{item.number}</h3>

                <p>{item.label}</p>

              </div>

            </div>

          ))}

        </div>

        {/* PROJECTS */}
        <div className="project-grid">

          {projects.map((item, index) => (

            <div
              className="project-card"
              key={index}
            >

              {/* IMAGE */}
              <div className="project-img">

                <img
                  src={item.img}
                  alt={item.title}
                />

                <div className="project-overlay">

                  <button className="project-view-btn">

                    View Project

                    <ArrowUpRight size={16} />

                  </button>

                </div>

              </div>

              {/* CONTENT */}
              <div className="project-content">

                <span className="project-category">
                  {item.category}
                </span>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

              </div>

              {/* CARD NUMBER */}
              <div className="project-number">
                0{index + 1}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;