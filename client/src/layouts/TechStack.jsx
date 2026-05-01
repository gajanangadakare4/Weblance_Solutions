import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.jpg";
import js from "../assets/js.jpg";
import reactImg from "../assets/react.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.jpg";
import figma from "../assets/figma.png";
import java from "../assets/java.png";
import python from "../assets/python.jpg";

/* DIGITAL MARKETING TOOLS */
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

  /* DEVELOPMENT STACK */
  const devStack = [
    {
      name: "HTML5",
      desc: "Structure and semantic layout for modern websites.",
      img: html
    },
    {
      name: "CSS3",
      desc: "Responsive and visually appealing designs.",
      img: css
    },
    {
      name: "JavaScript",
      desc: "Dynamic and interactive web functionality.",
      img: js
    },
    {
      name: "React.js",
      desc: "Modern frontend development for fast UI.",
      img: reactImg
    },
    {
      name: "Node.js",
      desc: "Backend development for scalable applications.",
      img: node
    },
    {
      name: "MongoDB",
      desc: "Flexible and scalable NoSQL database.",
      img: mongo
    },
    {
      name: "Java",
      desc: "Backend development for enterprise-level applications.",
      img: java
    },
    {
      name: "Python",
      desc:
        "A versatile programming language used for web development, automation, data science, AI, and backend applications.",
      img: python
    },
    {
      name: "Figma",
      desc: "UI/UX design and prototyping tools.",
      img: figma
    }
  ];

  /* MARKETING STACK */
  const marketingStack = [
    {
      name: "SEO Tools",
      desc: "Optimize websites for better search engine rankings.",
      img: seo
    },
    {
      name: "Google Analytics",
      desc: "Track and analyze website traffic and performance.",
      img: analytics
    },
    {
      name: "Google Ads",
      desc: "Run high-converting paid ad campaigns.",
      img: ads
    },
    {
      name: "Meta Ads",
      desc: "Facebook & Instagram ad campaigns for lead generation.",
      img: metaAds
    },
    {
      name: "SEMrush",
      desc:
        "All-in-one digital marketing toolkit for SEO, PPC, and competitor analysis.",
      img: semrush
    },
    {
      name: "Ahrefs",
      desc:
        "Advanced SEO platform for backlinks, keyword research, and audits.",
      img: ahrefs
    },
    {
      name: "Mailchimp",
      desc:
        "Email marketing platform for campaigns, automation, and newsletters.",
      img: mailchimp
    },
    {
      name: "Canva",
      desc:
        "Create engaging social media graphics, ads, and marketing content.",
      img: canva
    },
    {
      name: "Hootsuite",
      desc:
        "Manage and schedule social media campaigns across multiple platforms.",
      img: hootsuite
    },
    {
      name: "HubSpot",
      desc:
        "CRM and marketing automation tool for inbound marketing strategies.",
      img: hubspot
    }
  ];

  return (
    <section className="tech-section">

      <div className="container">

        {/* HEADER */}
        <div className="tech-header">

          <h2>Our Tech Stack</h2>

          <p>
            We use modern technologies and tools to build scalable,
            secure, and high-performance digital solutions.
          </p>

        </div>

        {/* DEVELOPMENT STACK */}
        <h3 className="tech-subtitle">
          Development Technologies
        </h3>

        <div className="tech-grid">

          {devStack.map((item, index) => (
            <div className="tech-card" key={index}>

              <div className="tech-icon">
                <img src={item.img} alt={item.name} />
              </div>

              <h3>{item.name}</h3>

              <p>{item.desc}</p>

            </div>
          ))}

        </div>

        {/* DIGITAL MARKETING STACK */}
        <h3 className="tech-subtitle">
          Digital Marketing Tools
        </h3>

        <div className="tech-grid">

          {marketingStack.map((item, index) => (
            <div className="tech-card" key={index}>

              <div className="tech-icon">
                <img src={item.img} alt={item.name} />
              </div>

              <h3>{item.name}</h3>

              <p>{item.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default TechStack;