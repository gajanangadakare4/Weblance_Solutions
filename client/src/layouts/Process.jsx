import React from "react";
import "../css/Process.css";

const Process = () => {
  const steps = [
    {
      icon: "🔍",
      title: "Discovery",
      desc: "Understanding your business goals, audience, and requirements.",
      focus: "Clear understanding of your vision",
      deliverables: "Requirement Doc, Project Scope"
    },
    {
      icon: "🧠",
      title: "Planning",
      desc: "Creating a roadmap and choosing the best technologies.",
      focus: "Strategic planning & scalability",
      deliverables: "Project Plan, Timeline"
    },
    {
      icon: "🎨",
      title: "Design",
      desc: "Crafting modern UI/UX focused on user experience.",
      focus: "User-friendly interface design",
      deliverables: "Wireframes, UI Design"
    },
    {
      icon: "💻",
      title: "Development",
      desc: "Building a fast, scalable, and secure application.",
      focus: "Performance & clean code",
      deliverables: "Frontend + Backend"
    },
    {
      icon: "🧪",
      title: "Testing",
      desc: "Ensuring bug-free performance and smooth usability.",
      focus: "Quality assurance",
      deliverables: "QA Reports"
    },
    {
      icon: "🚀",
      title: "Launch",
      desc: "Deploying your project live with full optimization.",
      focus: "Smooth production deployment",
      deliverables: "Live Website"
    },
    {
      icon: "🤝",
      title: "Support",
      desc: "Providing maintenance and continuous improvements.",
      focus: "Long-term partnership",
      deliverables: "Updates & Support"
    }
  ];

  return (
    <section className="process-section">
      <div className="container">

        {/* HEADER */}
        <div className="process-header">
          <h2>Our Development Journey</h2>
          <p>A structured process that ensures quality, speed, and success</p>
        </div>

        {/* STEPPER */}
        <div className="process-stepper">

          {steps.map((step, index) => (
            <div className="step-item" key={index}>

              {/* LINE */}
              {index !== 0 && <div className="step-line"></div>}

              {/* ICON */}
              <div className="step-icon">
                <span>{step.icon}</span>
              </div>

              {/* CONTENT */}
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>

                <div className="step-info">
                  <p><strong>Focus:</strong> {step.focus}</p>
                  <p><strong>Deliverables:</strong> {step.deliverables}</p>
                </div>
              </div>

              {/* NUMBER */}
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