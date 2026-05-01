import React, { useState } from "react";
import "../css/EnquiryForm.css";

const EnquiryForm = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));

    // remove error on typing (better UX)
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: ""
    }));
  };

  const validate = (data) => {
    const err = {};

    if (!data.name.trim()) err.name = "Name is required";

    if (!data.email.trim()) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      err.email = "Enter a valid email";
    }

    if (!data.phone.trim()) {
      err.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(data.phone)) {
      err.phone = "Enter valid 10-digit number";
    }

    if (!data.service) err.service = "Please select a service";

    if (!data.message.trim()) err.message = "Message is required";

    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      await new Promise((res) => setTimeout(res, 1200));

      setSubmitted(true);
      setFormData(initialState);
      setErrors({});
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setLoading(false);

      setTimeout(() => setSubmitted(false), 3500);
    }
  };

  return (
    <section className="enquiry-section">

      <div className="enquiry-container">

        {/* HEADER */}
        <div className="enquiry-header">
          <h2>Start Your Project</h2>
          <p>
            Share your requirements — we’ll craft a solution tailored to your business.
          </p>
        </div>

        {/* FORM */}
        <form className="enquiry-form" onSubmit={handleSubmit}>

          <div className="form-grid">

            {/* NAME */}
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            {/* PHONE */}
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>

            {/* SERVICE */}
            <div className="form-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select Service</option>
                <option>Website Development</option>
                <option>UI/UX Design</option>
                <option>E-Commerce Development</option>
                <option>SEO Optimization</option>
                <option>Digital Marketing</option>
                <option>Mobile App Development</option>
              </select>
              {errors.service && <span className="error">{errors.service}</span>}
            </div>

          </div>

          {/* MESSAGE */}
          <div className="form-group full">
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          {/* BUTTON */}
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Send Enquiry"}
          </button>

          {/* SUCCESS */}
          {submitted && (
            <div className="success-msg">
              ✔ Your enquiry has been submitted successfully!
            </div>
          )}

        </form>

      </div>

    </section>
  );
};

export default EnquiryForm;