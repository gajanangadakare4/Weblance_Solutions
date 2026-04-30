import React from "react";
import "../css/Address.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">

        {/* HEADER */}
        <div className="contact-header">
          <h2>Visit Our Office</h2>
          <p>We’d love to connect with you. Reach out or visit us anytime.</p>
        </div>

        <div className="contact-content">

          {/* MAP */}
          <div className="map-container">
            <iframe
              title="company-location"
              src="https://www.google.com/maps?q=Hubli?q=Vidyanagar,Karnataka&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* DETAILS */}
          <div className="contact-details">
            <h3>Weblance Solutions</h3>

            <p><strong>Address:</strong><br />
              4th Cross Vidyanagar,<br />
              Hubli, Karnataka, India
            </p>

            <p><strong>Phone:</strong><br />
              +91 8496950841
            </p>

            <p><strong>Email:</strong><br />
              contact@Weblancesolutions.com
            </p>

            <p><strong>Working Hours:</strong><br />
              Mon - Sat: 9:00 AM - 7:00 PM<br />
              Sunday: Closed
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;