import React from "react";
import "./App.css";

import Navbar from "./layouts/Navbar.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Header_Section from "./layouts/Header_Section";
import Founder_Message from "./layouts/Founder_Message";
import WhyUs from "./layouts/WhyUs";
import TechStack from "./layouts/TechStack";
import Projects from "./layouts/Projects";
import Reviews from "./layouts/Reviews";
import Address from "./layouts/Address";
import Footer from "./layouts/Footer";
import EnquiryForm from "./pages/EnquiryForm";
import Process from "./layouts/Process";
import Pricing from "./pages/Pricing";

const App1 = () => {
  return (
    
    <>
      <Navbar />

      {/* <div id="home">
        <Header_Section />
      </div>

      <div id="about">
        <About />
        <Founder_Message />
      </div>

      <div id="services">
        <Service />
        <WhyUs />
        <TechStack />
      </div>

      <div id="pricing">
        <Pricing />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="reviews">
        <Reviews />
      </div>

      <div id="process">
        <Process />
      </div>

      <div id="contact">
        <EnquiryForm />
        <Address />
      </div> */}

      <Footer />
    </>
  );
};

export default App1;