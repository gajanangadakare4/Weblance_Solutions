import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Pricing from "./pages/Pricing";
import WebsitePricing from "./pages/WebsitePricing";
import MarketingPricing from "./pages/MarketingPricing";

// Layout / Home Components
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
import ScrollToHash from "./layouts/ScrollToHash";
// import EnquiryForm from "./pages/EnquiryForm";
 

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />
       <ScrollToHash />

      <Routes>

        {/* HOME PAGE (your full landing page) */}
        <Route
          path="/"
          element={
            <>
              <Header_Section />
              <About />
              <Founder_Message />
              <Service />
              <WhyUs />
              <TechStack />
              <Projects />
              <Reviews />
              <Process /> 
              <Pricing/>
              <Address />
              <EnquiryForm />
              <Footer />
            </>
          }
        />

        {/* PRICING PAGES */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pricing/website" element={<WebsitePricing />} />
        <Route path="/pricing/marketing" element={<MarketingPricing />} />
        <Route path="/enquiry" element={<ContactForm />} />

      </Routes>

    </BrowserRouter>
  );
};

export default App;