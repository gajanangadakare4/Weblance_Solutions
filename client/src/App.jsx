import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Pricing from "./pages/Pricing";
import WebsitePricing from "./pages/WebsitePricing";
import MarketingPricing from "./pages/MarketingPricing";

// Layout / Components
import Navbar from "./layouts/Navbar.jsx";
import Header_Section from "./layouts/Header_Section";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Founder_Message from "./layouts/Founder_Message";
import WhyUs from "./layouts/WhyUs";
import TechStack from "./layouts/TechStack";
import Projects from "./layouts/Projects";
import Reviews from "./layouts/Reviews";
import Address from "./layouts/Address";
import Footer from "./layouts/Footer";
import EnquiryForm from "./pages/EnquiryForm";
import Process from "./layouts/Process";
import ContactForm from "./pages/ContactForm";
import ScrollToTop from "./layouts/ScrollToTop";
import FAQ from "./layouts/FAQ";

const HomePage = () => {
  return (
    <>
      <Header_Section />

      <section id="about">
        <About />
      </section>

      <Founder_Message />

      <section id="services">
        <Service />
      </section>

      <TechStack />
      <Process />
      <WhyUs />
      <Projects />
      <Reviews />

      <section id="pricing">
        <Pricing />
      </section>

      <FAQ />
      <EnquiryForm />
      <Address />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Navbar />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* PRICING */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pricing/website" element={<WebsitePricing />} />
        <Route path="/pricing/marketing" element={<MarketingPricing />} />

        {/* CONTACT */}
        <Route path="/enquiry" element={<ContactForm />} />

      </Routes>

    </BrowserRouter>
  );
};

export default App;