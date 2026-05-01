import React, { useState } from "react";
import logo from "../assets/logo-bg.png";
import "../css/Header_Style.css";

const Header_Section = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // MOUSE EFFECT
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // VALIDATION
  const validate = () => {

    let newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }
    else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10-digit phone";
    }

    if (!formData.service)
      newErrors.service = "Select a service";

    if (!formData.message.trim())
      newErrors.message = "Message is required";

    return newErrors;
  };

  // SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors);

    } else {

      console.log("Form Data:", formData);

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });

      setErrors({});
    }
  };

  return (

    <section
      className="header-section"
      onMouseMove={handleMouseMove}
    >

      {/* BACKGROUND */}
      <div
        className="header-bg"
        style={{
          backgroundImage: `url(${logo})`
        }}
      ></div>

      <div className="container">

        <div className="header-wrapper">

          {/* LEFT */}
          <div className="header-left">

            <span className="hero-tag">
              🚀 Web Development & Digital Marketing
            </span>

            <h1>
              Build Your Digital Presence With Weblance Solutions
            </h1>

            <p>
              We create powerful websites and
              performance-driven digital marketing
              strategies to help businesses grow online.
            </p>

            <div className="hero-points">

              <div className="hero-point">
                ✅ Responsive Website Development
              </div>

              <div className="hero-point">
                ✅ SEO & Digital Marketing
              </div>

              <div className="hero-point">
                ✅ E-Commerce Solutions
              </div>

              <div className="hero-point">
                ✅ Mobile App Development
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="header-right">

            <form
              className="hero-form"
              onSubmit={handleSubmit}
            >

              <h2>Start Your Project</h2>

              <div className="form-group">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />

                {errors.name &&
                  <span className="error">
                    {errors.name}
                  </span>
                }

              </div>

              <div className="form-group">

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />

                {errors.email &&
                  <span className="error">
                    {errors.email}
                  </span>
                }

              </div>

              <div className="form-group">

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />

                {errors.phone &&
                  <span className="error">
                    {errors.phone}
                  </span>
                }

              </div>

              <div className="form-group">

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">
                    Select Service
                  </option>

                  <option>
                    Website Development
                  </option>

                  <option>
                    UI/UX Design
                  </option>

                  <option>
                    E-Commerce Development
                  </option>

                  <option>
                    SEO Optimization
                  </option>

                  <option>
                    Social Media Marketing
                  </option>

                  <option>
                    Mobile App Development
                  </option>

                </select>

                {errors.service &&
                  <span className="error">
                    {errors.service}
                  </span>
                }

              </div>

              <div className="form-group">

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

                {errors.message &&
                  <span className="error">
                    {errors.message}
                  </span>
                }

              </div>

              <button
                type="submit"
                className="hero-btn"
              >
                Submit Enquiry
              </button>

              {submitted && (
                <p className="success-msg">
                  ✅ Your enquiry has been submitted successfully!
                </p>
              )}

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Header_Section;