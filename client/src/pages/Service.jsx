import React from "react";
import web_dev from "../assets/web_dev.png";
import digital_marketing from "../assets/digital-marketing.png";
import seo from "../assets/seo.png";
import social_media_marketing from "../assets/social_media_marketing.png";
import ecommerce from "../assets/e-commerce.png";
import mobile_app from "../assets/mobile_app.jpg";
import "../css/Service.css";

const Service = () => {

  const services = [
    {
      title: "Web Development",
      desc: "We build fast, responsive, and scalable websites using modern technologies, ensuring seamless user experience and strong business performance.",
      img: web_dev
    },
    {
      title: "Digital Marketing",
      desc: "Drive growth with data-driven marketing strategies designed to increase traffic, generate leads, and improve conversion rates.",
      img: digital_marketing
    },

    // {
    //   title: "SEO Optimization",
    //   desc: "Improve your search engine rankings and visibility with proven SEO techniques that attract the right audience organically.",
    //   img: seo
    // },

    {
      title: "Social Media Marketing",
      desc: "Strengthen your brand presence with engaging content and targeted campaigns across major social media platforms.",
      img: social_media_marketing
    },
    {
      title: "E-Commerce Solutions",
      desc: "Launch and scale your online store with secure, user-friendly, and conversion-focused e-commerce solutions.",
      img: ecommerce
    },
    {
      title: "Mobile Application Development",
      desc: "We design and develop high-performance mobile applications for Android and iOS, delivering intuitive user experiences and scalable solutions.",
      img: mobile_app
    }
  ];

  return (
    <section id="services" className="service-section">

      {/* HEADER */}
      <div className="service-header">
        <h2>Our Services</h2>

        <p>
          We provide end-to-end digital solutions to help your business grow,
          scale, and succeed in the online world.
        </p>
      </div>

      {/* CARDS */}
      <div className="service-grid">

        {services.map((item, index) => (
          <div className="service-card" key={index}>

            <div className="service-icon">
              <img src={item.img} alt={item.title} />
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <button className="service-btn">
              Learn More
            </button>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Service;