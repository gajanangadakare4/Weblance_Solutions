import React from "react";
import {
  Sparkles,
  Code2,
  Megaphone,
  ArrowUpRight,
} from "lucide-react";

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
      desc: "Modern semantic structure for scalable websites.",
      img: html
    },

    {
      name: "CSS3",
      desc: "Responsive and visually engaging user interfaces.",
      img: css
    },

    {
      name: "JavaScript",
      desc: "Dynamic and interactive frontend experiences.",
      img: js
    },

    {
      name: "React.js",
      desc: "Fast and modern frontend application development.",
      img: reactImg
    },

    {
      name: "Node.js",
      desc: "Powerful backend architecture for scalable systems.",
      img: node
    },

    {
      name: "MongoDB",
      desc: "Flexible and scalable NoSQL database solutions.",
      img: mongo
    },

    {
      name: "Java",
      desc: "Enterprise-grade backend application development.",
      img: java
    },

    {
      name: "Python",
      desc: "Versatile language for automation, AI, and backend systems.",
      img: python
    },

    {
      name: "Figma",
      desc: "Modern UI/UX design and prototyping workflows.",
      img: figma
    }
  ];

  /* MARKETING STACK */
  const marketingStack = [
    {
      name: "SEO Tools",
      desc: "Improve rankings and grow organic visibility.",
      img: seo
    },

    {
      name: "Google Analytics",
      desc: "Track performance and user engagement insights.",
      img: analytics
    },

    {
      name: "Google Ads",
      desc: "Run high-converting paid advertising campaigns.",
      img: ads
    },

    {
      name: "Meta Ads",
      desc: "Targeted Facebook & Instagram marketing campaigns.",
      img: metaAds
    },

    {
      name: "SEMrush",
      desc: "Advanced SEO and competitor analysis platform.",
      img: semrush
    },

    {
      name: "Ahrefs",
      desc: "Backlink research and SEO optimization tools.",
      img: ahrefs
    },

    {
      name: "Mailchimp",
      desc: "Email marketing automation and campaign management.",
      img: mailchimp
    },

    {
      name: "Canva",
      desc: "Creative designs for social and marketing content.",
      img: canva
    },

    {
      name: "Hootsuite",
      desc: "Social media management and scheduling platform.",
      img: hootsuite
    },

    {
      name: "HubSpot",
      desc: "CRM and inbound marketing automation platform.",
      img: hubspot
    }
  ];

  return (

    <section className="tech-section">

      {/* BACKGROUND EFFECTS */}
      <div className="tech-bg tech-bg-1"></div>
      <div className="tech-bg tech-bg-2"></div>

      <div className="tech-container">

        {/* HEADER */}
        <div className="tech-header">

          <span className="tech-tag">
            <Sparkles size={16} />
            Technologies & Tools
          </span>

          <h2>
            Modern Tech Stack
            Powering Digital Innovation
          </h2>

          <p>
            We leverage modern technologies, frameworks,
            and marketing tools to deliver scalable,
            high-performance, and future-ready digital solutions.
          </p>

        </div>

        {/* DEVELOPMENT STACK */}
        <div className="stack-section">

          <div className="stack-title">

            <div className="stack-icon">
              <Code2 size={22} />
            </div>

            <div>
              <h3>Development Technologies</h3>
              <p>Frontend, Backend & UI/UX Technologies</p>
            </div>

          </div>

          <div className="tech-grid">

            {devStack.map((item, index) => (

              <div
                className="tech-card"
                key={index}
              >

                <div className="tech-image">
                  <img
                    src={item.img}
                    alt={item.name}
                  />
                </div>

                <div className="tech-content">

                  <h4>{item.name}</h4>

                  <p>{item.desc}</p>

                  {/* <button className="tech-btn">
                    Explore
                    <ArrowUpRight size={16} />
                  </button> */}

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* MARKETING STACK */}
        <div className="stack-section">

          <div className="stack-title">

            <div className="stack-icon">
              <Megaphone size={22} />
            </div>

            <div>
              <h3>Digital Marketing Tools</h3>
              <p>Analytics, SEO & Marketing Platforms</p>
            </div>

          </div>

          <div className="tech-grid">

            {marketingStack.map((item, index) => (

              <div
                className="tech-card"
                key={index}
              >

                <div className="tech-image">
                  <img
                    src={item.img}
                    alt={item.name}
                  />
                </div>

                <div className="tech-content">

                  <h4>{item.name}</h4>

                  <p>{item.desc}</p>

                  {/* <button className="tech-btn">
                    Explore
                    <ArrowUpRight size={16} />
                  </button> */}

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default TechStack;