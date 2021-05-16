/** @format */

import React from "react";
import "../../app/App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="dev-hero-container">
      {/*<video src='/src/videos/video-1.mp4' autoPlay loop muted />*/}
      <h1>WELCOME TO</h1>

      <br />
      <h2>Attendify</h2>
      <div className="dev-hero-btns">
        <Button buttonStyle="dev-btn--outline">Upcoming Events</Button>
      </div>
    </div>
  );
}

export default HeroSection;
