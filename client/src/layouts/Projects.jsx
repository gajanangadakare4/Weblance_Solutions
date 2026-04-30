import React from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import "../css/Projects.css";

const Projects = () => {

  /* STATS */
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "10+", label: "Ongoing Projects" }
  ];

  /* PROJECTS */
  const projects = [
    {
      title: "Business Website",
      desc: "A modern responsive website built for a local business to improve online presence.",
      img: project1
    },
    {
      title: "E-Commerce Store",
      desc: "Full-featured online store with payment integration and product management.",
      img: project2
    },
    {
      title: "Marketing Landing Page",
      desc: "High-converting landing page designed for digital campaigns.",
      img: project3
    }
  ];

  return (
    <section className="project-section">
      <div className="container">

        {/* HEADER */}
        <div className="project-header">
          <h2>Our Work & Achievements</h2>
          <p>
            We deliver high-quality projects that help businesses grow and succeed online.
          </p>
        </div>

        {/* STATS */}
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h1>{item.number}</h1>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        {/* PROJECTS */}
        <div className="project-grid">
          {projects.map((item, index) => (
            <div className="project-card" key={index}>

              <div className="project-img">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="project-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {/* <button className="project-btn">View Details</button> */}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;