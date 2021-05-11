/** @format */

import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="dev-footer-container">
      <section className="dev-footer-subscription">
        <p className="dev-footer-subscription-heading">
          Join the Attendify newsletter to receive our event details.
        </p>
        <p className="dev-footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="dev-input-areas">
          <form>
            <input
              className="dev-footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="dev-btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="dev-footer-links">
        <div className="dev-footer-link-wrapper">
          <div className="dev-footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="dev-footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="dev-footer-link-wrapper">
          <div className="dev-footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="dev-footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="dev-social-media">
        <div className="dev-social-media-wrap">
          <div className="dev-footer-logo">
            <Link to="/" className="dev-social-logo">
              ATTENDIFY
              <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="dev-website-rights">ATTENDIFY © 2020</small>
          <div className="dev-social-icons">
            <Link
              className="dev-social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="dev-social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="dev-social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="dev-social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="dev-social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
