import React from "react";
import "../css/Process.css";

const Process = () => {

  const steps = [
    {
      icon: "🔍",
      title: "Discovery",
      desc:
        "Understanding your business goals, audience, and requirements.",
      focus: "Clear understanding of your vision",
      deliverables: "Requirement Document, Project Scope"
    },
    {
      icon: "🧠",
      title: "Planning",
      desc:
        "Creating a strategic roadmap and selecting the best technologies.",
      focus: "Strategic planning & scalability",
      deliverables: "Project Plan, Timeline"
    },
    {
      icon: "🎨",
      title: "Design",
      desc:
        "Crafting modern UI/UX experiences focused on usability and engagement.",
      focus: "User-friendly interface design",
      deliverables: "Wireframes, UI Design"
    },
    {
      icon: "💻",
      title: "Development",
      desc:
        "Building fast, scalable, and secure applications using modern technologies.",
      focus: "Performance & clean code",
      deliverables: "Frontend + Backend Development"
    },
    {
      icon: "🧪",
      title: "Testing",
      desc:
        "Ensuring smooth functionality, performance, and bug-free experience.",
      focus: "Quality assurance",
      deliverables: "QA Reports, Testing Validation"
    },
    {
      icon: "🚀",
      title: "Launch",
      desc:
        "Deploying your project live with optimization and production readiness.",
      focus: "Smooth production deployment",
      deliverables: "Live Website / Application"
    },
    {
      icon: "🤝",
      title: "Support",
      desc:
        "Providing ongoing maintenance, updates, and long-term support.",
      focus: "Long-term partnership",
      deliverables: "Maintenance & Support"
    }
  ];

  return (
    <section className="process-section">

      <div className="container">

        {/* HEADER */}
        <div className="process-header">

          <h2>Our Development Journey</h2>

          <p>
            A structured workflow designed to ensure quality,
            efficiency, and successful project delivery.
          </p>

        </div>

        {/* PROCESS STEPPER */}
        <div className="process-stepper">

          {steps.map((step, index) => (
            <div className="step-item" key={index}>

              {/* CONNECTING LINE */}
              {index !== 0 && (
                <div className="step-line"></div>
              )}

              {/* ICON */}
              <div className="step-icon">
                <span>{step.icon}</span>
              </div>

              {/* CONTENT */}
              <div className="step-content">

                <h3>{step.title}</h3>

                <p>{step.desc}</p>

                <div className="step-info">

                  <p>
                    <strong>Focus:</strong> {step.focus}
                  </p>

                  <p>
                    <strong>Deliverables:</strong> {step.deliverables}
                  </p>

                </div>

              </div>

              {/* STEP NUMBER */}
              <div className="step-number">
                {index + 1}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Process;