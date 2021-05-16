/** @format */

import React from "react";
import "../app/App.css";
import Footer from "../components/home/Footer";
import HeroSection from "../components/home/HeroSection";
import Navbar from "../components/home/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;
