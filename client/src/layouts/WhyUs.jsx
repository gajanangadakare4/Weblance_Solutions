import React from "react";
import "../css/WhyUs.css";

const WhyUs = () => {

  const reasons = [
    {
      title: "Experienced Team 👨‍💻",
      desc: "Our team brings strong industry experience to deliver reliable and high-quality digital solutions tailored to your needs."
    },
    {
      title: "Client-Centric Approach 🤝",
      desc: "We focus on understanding your business goals and provide customized solutions that align with your vision."
    },
    {
      title: "Result-Oriented Work 📈",
      desc: "We don’t just build projects — we focus on delivering measurable results that help your business grow."
    },
    {
      title: "Affordable Pricing 💰",
      desc: "We provide cost-effective solutions without compromising on quality, making us ideal for startups and small businesses."
    },
    {
      title: "End-to-End Solutions 🔄",
      desc: "From development to marketing, we handle everything so you can focus on growing your business."
    },
    {
      title: "On-Time Delivery ⏱️",
      desc: "We value your time and ensure every project is delivered within the promised timeline."
    },
    {
      title: "Modern Technologies 🚀",
      desc: "We use the latest tools and technologies to build scalable, secure, and future-ready digital solutions."
    },
    {
      title: "Continuous Support 📞",
      desc: "Our relationship doesn’t end after delivery — we provide ongoing support to ensure your business keeps growing."
    }
  ];

  return (
    <section className="whyus-section">
      <div className="container">

        {/* HEADER */}
        <div className="whyus-header">
          <h2>Why Choose Us </h2>
          <p>
            We combine expertise, innovation, and dedication to deliver solutions 
            that truly make a difference for your business.
          </p>
        </div>

        {/* CARDS */}
        <div className="whyus-grid">
          {reasons.map((item, index) => (
            <div className="whyus-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;