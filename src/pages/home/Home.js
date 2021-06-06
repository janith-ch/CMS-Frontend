/** @format */

import React from "react";
import "../../app/App.css";
import Footer from "../../components/home/Footer";
import Navbar from "../../components/home/Navbar";

function Home({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Home;
