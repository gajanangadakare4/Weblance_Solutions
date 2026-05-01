import React from "react";
import "../css/WhyUs.css";

const WhyUs = () => {

  const reasons = [
    {
      title: "Experienced Team 👨‍💻",
      desc:
        "Our experienced team delivers reliable, high-quality digital solutions tailored to your business needs."
    },
    {
      title: "Client-Centric Approach 🤝",
      desc:
        "We understand your business goals and create customized solutions aligned with your vision and objectives."
    },
    {
      title: "Result-Oriented Work 📈",
      desc:
        "We focus on delivering measurable results that help improve growth, engagement, and business performance."
    },
    {
      title: "Affordable Pricing 💰",
      desc:
        "We provide cost-effective solutions without compromising quality, making us ideal for startups and growing businesses."
    },
    {
      title: "End-to-End Solutions 🔄",
      desc:
        "From development to digital marketing, we handle complete solutions so you can focus on your business."
    },
    {
      title: "On-Time Delivery ⏱️",
      desc:
        "We value your time and ensure every project is completed and delivered within the committed timeline."
    },
    {
      title: "Modern Technologies 🚀",
      desc:
        "We use the latest technologies and industry best practices to build scalable, secure, and future-ready solutions."
    },
    {
      title: "Continuous Support 📞",
      desc:
        "Our partnership continues after delivery with ongoing support, maintenance, and improvements."
    }
  ];

  return (
    <section className="whyus-section">

      <div className="container">

        {/* HEADER */}
        <div className="whyus-header">

          <h2>Why Choose Us</h2>

          <p>
            We combine expertise, innovation, and dedication to deliver
            digital solutions that create real value for your business.
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