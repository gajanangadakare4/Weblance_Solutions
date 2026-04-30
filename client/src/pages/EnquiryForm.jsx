import React, { useState } from "react";
import "../css/EnquiryForm.css";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10-digit phone";
    }

    if (!formData.service) newErrors.service = "Select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";

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

      // TODO: Connect to backend / email API

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
    <section className="enquiry-section">
      <div className="container">

        <div className="enquiry-header">
          <h2>Start Your Project</h2>
          <p>Tell us about your requirements and we’ll get back to you shortly.</p>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span>{errors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span>{errors.phone}</span>}
          </div>

          <div className="form-group">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select Service</option>
              <option>Website Development & Re-Designing</option>
              <option>UI/UX Design</option>
              <option>E-Commerce Development</option>
              <option>SEO Optimization</option>
              <option>Social Media Marketing</option>
              <option>Mobile App Development</option>


            </select>
            {errors.service && <span>{errors.service}</span>}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span>{errors.message}</span>}
          </div>

          <button type="submit" className="submit-btn">
            Submit Enquiry
          </button>

          {submitted && (
            <p className="success-msg">
              ✅ Your enquiry has been submitted successfully!
            </p>
          )}

        </form>

      </div>
    </section>
  );
};

export default EnquiryForm;