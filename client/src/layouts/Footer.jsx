import React, { useState } from "react";
import "../css/Footer.css";

// Icons
 import { RiRobot2Fill } from "react-icons/ri"
 
 import {
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";

  
const Footer = () => {

  const [openChat, setOpenChat] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi 👋 I am Weblance AI Assistant. Ask me anything!", from: "bot" }
  ]);
  const [input, setInput] = useState("");

  // AI RESPONSE ENGINE (simple smart chatbot)
const getBotReply = (msg) => {
  msg = msg.toLowerCase();

  // GREETING
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey"))
    return "👋 Hello! Welcome to Weblance Solutions. How can we help you today?";

  // PRICING
  if (msg.includes("price") || msg.includes("cost") || msg.includes("budget"))
    return "💰 Our pricing depends on your project requirements. We offer flexible and affordable packages for startups and businesses. Share your requirement for a custom quote.";

  // WEBSITE DEVELOPMENT
  if (msg.includes("website") || msg.includes("web development") || msg.includes("web design"))
    return "🌐 We develop modern, responsive, SEO-friendly websites with high performance and clean UI/UX design.";

  // ECOMMERCE
  if (msg.includes("ecommerce") || msg.includes("online store"))
    return "🛒 We build fully functional e-commerce websites with payment gateway, cart system, and admin dashboard.";

  // SEO
  if (msg.includes("seo"))
    return "📈 Our SEO services improve your Google ranking, organic traffic, and long-term online visibility.";

  // DIGITAL MARKETING
  if (msg.includes("marketing") || msg.includes("digital marketing"))
    return "📢 We provide SEO, Google Ads, Social Media Marketing, and complete digital growth strategies.";

  // SOCIAL MEDIA
  if (msg.includes("social media"))
    return "📱 We manage your social media with content creation, posting strategy, and audience engagement.";

  // MOBILE APP
  if (msg.includes("app") || msg.includes("mobile app"))
    return "📲 We develop Android & iOS mobile applications with modern UI and scalable backend systems.";

  // UI/UX
  if (msg.includes("ui") || msg.includes("ux") || msg.includes("design"))
    return "🎨 We design clean, modern UI/UX that improves user experience and conversion rates.";

  // CONTACT
  if (msg.includes("contact") || msg.includes("call") || msg.includes("whatsapp"))
    return "📞 You can contact us via WhatsApp or call. We usually respond within a few minutes.";

  // PROJECT / WORK
  if (msg.includes("project") || msg.includes("work process"))
    return "🚀 Our process: Discovery → Planning → Design → Development → Testing → Launch → Support.";

  // LOCATION
  if (msg.includes("location") || msg.includes("where are you"))
    return "📍 We are based in India and work with clients globally.";

  // TIME / RESPONSE
  if (msg.includes("response time") || msg.includes("reply"))
    return "⏱ We usually respond within 1–2 hours during working time.";

  // THANK YOU
  if (msg.includes("thank"))
    return "😊 You're welcome! Let us know if you need any help.";

  // DEFAULT
  return "🤖 I am still learning, but I can help you with websites, SEO, marketing, and pricing. You can also contact our team for direct assistance.";
};

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, from: "user" };
    const botMsg = { text: getBotReply(input), from: "bot" };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      <footer className="footer">
        <div className="container footer-grid">

          {/* BRAND */}
          <div className="footer-brand">
            <h2>Weblance Solutions</h2>
            <p>
              We build modern, high-performing websites that help businesses grow
              online and convert visitors into customers.
            </p>

            <div className="footer-socials">

  

  <a
    href="https://youtube.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaYoutube />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaTwitter />
  </a>

</div>
          </div>

          {/* SERVICES */}
          <div className="footer-links">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Website Development and Redesign</a></li>
              <li><a href="#">SEO Optiization</a></li>
              <li><a href="#">Email Marketing</a></li>
              <li><a href="#">Social Media Marketing</a></li>
              <li><a href="#">Affiliate Marketing</a></li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-contact">
            <h3>Contact</h3>
            <p>📍 Hubli, Karnataka, India</p>
            <p>📞 +91 8496950841</p>
            <p>📧 contact@weblancesolutions.com</p>

            <a href="#" className="footer-cta">
              Get Free Consultation
            </a>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Weblance Solutions. All rights reserved. <br />
            Site Developed and Maintained By Weblance Solutions
          </p>
        </div>
      </footer>

      {/* FLOATING BUTTONS */}
      <div className="floating-buttons">

        {/* WhatsApp */}
        <a
          href="https://wa.me/918496950841"
          target="_blank"
          rel="noopener noreferrer"
          className="fab whatsapp"
        >
          <FaWhatsapp />
        </a>

        {/* AI CHAT */}
        <button
          className="fab chat"
          onClick={() => setOpenChat(!openChat)}
        >
          <RiRobot2Fill />
        </button>

      </div>

      {/* CHAT BOX */}
      {openChat && (
        <div className="chat-box">

          <div className="chat-header">
            <span>Weblance AI 🤖</span>
            <button onClick={() => setOpenChat(false)}>✖</button>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              placeholder="Ask anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>

          {/* WhatsApp fallback */}
          <a
            href="https://wa.me/918496950841"
            target="_blank"
            rel="noopener noreferrer"
            className="chat-whatsapp"
          >
            Continue on WhatsApp →
          </a>

        </div>
      )}
    </>
  );
};

export default Footer;