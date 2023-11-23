import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PopularEdits from "./components/PopularEdits";
import PopularThumbnails from "./components/PopularThumbnails";
import VideoEditProcess from "./components/VideoEditProcess";
import ThumbnailEditProcess from "./components/ThumbnailDesignProcess";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Offer from "./components/Offer";

const App = () => {
  return (
    <>
      <Offer />
      <Navbar />
      <HeroSection />
      <PopularEdits />
      <PopularThumbnails />
      <VideoEditProcess />
      <ThumbnailEditProcess />
      <Testimonials />
      <Portfolio />
      <Pricing />
      <FAQSection />
      <Footer />
    </>
  );
};

export default App;
