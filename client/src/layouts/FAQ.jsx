import React, { useState } from "react";

import {
  Sparkles,
  HelpCircle,
  Plus,
  Minus,
  MessageCircleQuestion,
} from "lucide-react";

import "../css/FAQ.css";

const FAQ = () => {

  const faqs = [
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines depend on the scope, features, and complexity. Most modern business websites are completed within 2–6 weeks with a structured development process.",
    },

    {
      question: "Do you provide support after project completion?",
      answer:
        "Yes, we provide ongoing maintenance, security updates, performance optimization, bug fixes, and technical support after deployment.",
    },

    {
      question: "Will my website be mobile-friendly and responsive?",
      answer:
        "Absolutely. Every website we build is fully responsive and optimized for mobile, tablet, laptop, and desktop devices.",
    },

    {
      question: "Can you redesign or upgrade my existing website?",
      answer:
        "Yes, we can redesign outdated websites with modern UI/UX, improved speed, better performance, and advanced functionality.",
    },

    {
      question: "Which technologies do you use for development?",
      answer:
        "We use modern technologies like React.js, Node.js, Express.js, MongoDB, Firebase, Java, Python, and scalable cloud-based solutions.",
    },

    {
      question: "Do you provide SEO and digital marketing services?",
      answer:
        "Yes, we offer SEO optimization, Google Ads, Meta Ads, social media marketing, branding, and growth-focused digital marketing strategies.",
    },

    {
      question: "Can you build eCommerce websites and online stores?",
      answer:
        "Yes, we develop secure and scalable eCommerce platforms with payment gateway integration, product management, and user-friendly shopping experiences.",
    },

    {
      question: "Will my website be SEO optimized?",
      answer:
        "Yes, we follow modern SEO best practices including responsive design, optimized speed, clean code structure, and search-friendly architecture.",
    },

    {
      question: "Do you create custom web applications?",
      answer:
        "Yes, we build custom web applications, admin dashboards, CRM systems, and scalable business management platforms tailored to your needs.",
    },

    {
      question: "Can I request custom features and functionality?",
      answer:
        "Absolutely. Every project is customized according to your business goals, workflow requirements, and future scalability needs.",
    },

    {
      question: "Do you provide hosting and domain setup support?",
      answer:
        "Yes, we assist with domain registration, hosting setup, deployment, SSL configuration, and server management support.",
    },

    {
      question: "Will I be able to manage website content myself?",
      answer:
        "Yes, we can integrate admin panels or CMS solutions that allow you to easily update content, images, products, and other website data.",
    },

    {
      question: "How much does a website or application cost?",
      answer:
        "Pricing depends on the project scope, features, design requirements, and integrations. We provide flexible packages based on your business needs.",
    },

    {
      question: "Do you develop mobile applications?",
      answer:
        "Yes, we design and develop modern Android and iOS applications with scalable architecture and smooth user experiences.",
    },

    {
      question: "Why should we choose Weblance Solutions?",
      answer:
        "We focus on delivering high-quality, scalable, and business-driven digital solutions with modern technologies, transparent communication, and long-term support.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(
      activeIndex === index ? null : index
    );
  };

  return (

    <section className="faq-section">

      {/* BACKGROUND EFFECTS */}
      <div className="faq-bg faq-bg-1"></div>
      <div className="faq-bg faq-bg-2"></div>

      <div className="faq-container-wrapper">

        {/* HEADER */}
        <div className="faq-header">

          <span className="faq-tag">
            <Sparkles size={16} />
            Frequently Asked Questions
          </span>

          <h2>
            Everything You Need
            To Know Before Starting
          </h2>

          <p>
            Find answers to the most common questions
            about our development process, technologies,
            pricing, and support services.
          </p>

        </div>

        {/* FAQ CONTENT */}
        <div className="faq-layout">

          {/* LEFT INFO */}
          <div className="faq-info-card">

            <div className="faq-info-icon">
              <MessageCircleQuestion size={34} />
            </div>

            <h3>
              Need More Information?
            </h3>

            <p>
              Our team is always ready to help you with
              project planning, pricing, technologies,
              and business solutions tailored to your goals.
            </p>

            <div className="faq-info-box">

              <div>
                <strong>Fast Response</strong>
                <span>Quick support & consultation</span>
              </div>

              <div>
                <strong>Expert Guidance</strong>
                <span>Professional digital solutions</span>
              </div>

            </div>

            {/* <button className="faq-contact-btn">
              Contact Us
            </button> */}

          </div>

          {/* FAQ LIST */}
          <div className="faq-list">

            {faqs.map((faq, index) => (

              <div
                className={`faq-item ${
                  activeIndex === index ? "active" : ""
                }`}
                key={index}
              >

                {/* QUESTION */}
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >

                  <div className="faq-question-left">

                    <div className="faq-question-icon">
                      <HelpCircle size={18} />
                    </div>

                    <h3>{faq.question}</h3>

                  </div>

                  <div className="faq-toggle-icon">

                    {activeIndex === index ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}

                  </div>

                </button>

                {/* ANSWER */}
                <div
                  className={`faq-answer ${
                    activeIndex === index
                      ? "show"
                      : ""
                  }`}
                >

                  <p>{faq.answer}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default FAQ;