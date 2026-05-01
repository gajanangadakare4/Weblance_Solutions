import React from "react";

import {
  Sparkles,
  Search,
  Lightbulb,
  Palette,
  Code2,
  FlaskConical,
  Rocket,
  Handshake,
  ArrowUpRight,
} from "lucide-react";

import "../css/Process.css";

const Process = () => {

  const steps = [
    {
      icon: <Search size={28} />,
      title: "Discovery",
      desc:
        "We understand your business goals, audience, challenges, and project requirements.",
      focus: "Business Understanding",
      deliverables: "Requirement Analysis",
      gradient: "blue"
    },

    {
      icon: <Lightbulb size={28} />,
      title: "Planning",
      desc:
        "Creating a strategic roadmap with scalable architecture and execution planning.",
      focus: "Strategy & Roadmap",
      deliverables: "Timeline & Planning",
      gradient: "purple"
    },

    {
      icon: <Palette size={28} />,
      title: "Design",
      desc:
        "Crafting intuitive and engaging UI/UX experiences focused on usability.",
      focus: "Modern User Experience",
      deliverables: "Wireframes & UI Design",
      gradient: "pink"
    },

    {
      icon: <Code2 size={28} />,
      title: "Development",
      desc:
        "Building secure, scalable, and high-performance applications using modern technologies.",
      focus: "Clean & Scalable Code",
      deliverables: "Frontend + Backend",
      gradient: "cyan"
    },

    {
      icon: <FlaskConical size={28} />,
      title: "Testing",
      desc:
        "Ensuring smooth performance, security, responsiveness, and bug-free delivery.",
      focus: "Quality Assurance",
      deliverables: "Testing & Validation",
      gradient: "green"
    },

    {
      icon: <Rocket size={28} />,
      title: "Launch",
      desc:
        "Deploying optimized applications with production-ready infrastructure and monitoring.",
      focus: "Smooth Deployment",
      deliverables: "Live Deployment",
      gradient: "orange"
    },

    {
      icon: <Handshake size={28} />,
      title: "Support",
      desc:
        "Providing continuous updates, optimization, maintenance, and long-term support.",
      focus: "Long-Term Partnership",
      deliverables: "Maintenance & Support",
      gradient: "violet"
    }
  ];

  return (

    <section className="process-section">

      {/* BACKGROUND EFFECTS */}
      <div className="process-bg process-bg-1"></div>
      <div className="process-bg process-bg-2"></div>

      <div className="process-container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="process-header">

          <span className="process-tag">
            <Sparkles size={16} />
            Workflow & Strategy
          </span>

          <h2>
            Our Modern Development
            Process Journey
          </h2>

          <p>
            A structured and transparent workflow designed to
            deliver scalable, high-quality, and business-driven
            digital solutions efficiently.
          </p>

        </div>

        {/* =========================
            PROCESS GRID
        ========================= */}

        <div className="process-grid">

          {steps.map((step, index) => (

            <div
              className={`process-card ${step.gradient}`}
              key={index}
            >

              {/* STEP NUMBER */}
              <div className="process-number">
                0{index + 1}
              </div>

              {/* ICON */}
              <div className="process-icon">
                {step.icon}
              </div>

              {/* CONTENT */}
              <div className="process-content">

                <h3>{step.title}</h3>

                <p>
                  {step.desc}
                </p>

                {/* INFO */}
                <div className="process-info">

                  <div className="info-box">
                    <span>Focus</span>
                    <h4>{step.focus}</h4>
                  </div>

                  <div className="info-box">
                    <span>Deliverables</span>
                    <h4>{step.deliverables}</h4>
                  </div>

                </div>

                {/* BUTTON */}
                {/* <button className="process-btn">

                  Learn More

                  <ArrowUpRight size={16} />

                </button> */}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Process;