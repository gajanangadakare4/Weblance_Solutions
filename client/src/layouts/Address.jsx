import React from "react";
import "../css/Address.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">

        {/* HEADER */}
        <div className="contact-header">
          <h2>Visit Our Office</h2>
          <p>
            We’d love to connect with you. Reach out or visit us anytime.
          </p>
        </div>

        {/* CONTENT */}
        <div className="contact-content">

          {/* MAP */}
          <div className="map-container">
            <iframe
              title="company-location"
              src="https://www.google.com/maps?q=Vidyanagar,Hubli,Karnataka&output=embed"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* DETAILS */}
          <div className="contact-details">

            <h3>Weblance Solutions</h3>

            <div className="contact-row">
              <strong>Address:</strong>

              <span>
                4th Cross Vidyanagar,
                Hubli, Karnataka, India
              </span>
            </div>

            <div className="contact-row">
              <strong>Phone:</strong>

              <span>
                +91 8496950841
              </span>
            </div>

            <div className="contact-row">
              <strong>Email:</strong>

              <span>
                contact@Weblancesolutions.com
              </span>
            </div>

            <div className="contact-row">
              <strong>Working Hours:</strong>

              <span>
                Mon - Sat: 9:00 AM - 7:00 PM
                <br />
                Sunday: Closed
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;