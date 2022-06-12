import React from "react";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Features from "./Features";
import Testimonial from "./Testimonial";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

const PreLoginHome = () => {
  return (
    <div className="text-gray-700 bg-white">
      <Navbar />
      <Jumbotron />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default PreLoginHome;
