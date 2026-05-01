import React, { useState } from "react";
import "../css/FAQ.css";

const FAQ = () => {
  const faqs = [
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines depend on the complexity and features required. Most websites are completed within 2–6 weeks."
  },
  {
    question: "Do you provide website maintenance after launch?",
    answer:
      "Yes, we offer ongoing maintenance, updates, security monitoring, and technical support after deployment."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely! Every project is fully responsive and optimized for mobile, tablet, and desktop devices."
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes, we can modernize your current website with improved UI/UX, performance, and SEO optimization."
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We work with modern technologies like React, Node.js, Express, MongoDB, Firebase, and more depending on project needs."
  },
  {
    question: "Do you offer SEO and digital marketing services?",
    answer:
      "Yes, we provide SEO optimization, Google Ads, Meta Ads, and digital marketing solutions to grow your business online."
  },
  {
    question: "Do you develop eCommerce websites?",
    answer:
      "Yes, we build secure and scalable eCommerce websites with payment gateway integration, product management, and user-friendly shopping experiences."
  },
  {
    question: "Can I request custom features for my website?",
    answer:
      "Absolutely! We develop fully customized solutions tailored to your business goals and specific requirements."
  },
  {
    question: "Do you provide hosting and domain support?",
    answer:
      "Yes, we can help with domain registration, hosting setup, deployment, and server configuration."
  },
  {
    question: "Will my website be SEO optimized?",
    answer:
      "Yes, we follow SEO best practices including fast loading speed, responsive design, clean URLs, and optimized content structure."
  },
  {
    question: "How much does a website cost?",
    answer:
      "Website pricing depends on the features, design, and complexity of the project. We provide flexible packages based on your requirements."
  },
  {
    question: "Can you build web applications and admin dashboards?",
    answer:
      "Yes, we create powerful web applications, CRM systems, admin dashboards, and business management platforms."
  },
  {
    question: "Do you provide API integration services?",
    answer:
      "Yes, we integrate third-party APIs such as payment gateways, social media, maps, analytics, and cloud services."
  },
  {
    question: "Will I be able to update website content myself?",
    answer:
      "Yes, depending on the project, we can integrate CMS or admin panels that allow you to easily manage and update your content."
  }
];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">

        {/* HEADER */}
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            Answers to common questions about our services and development process.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;