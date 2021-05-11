/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="dev-navbar">
        <div className="dev-navbar-container">
          <Link to="/" className="dev-navbar-logo" onClick={closeMobileMenu}>
            Attendify
            <i className="fab fa-typo3" />
          </Link>
          <div className="dev-menu-icon" onClick={handleClick}>
            <i className={click ? " dev-fa-times" : " dev-fa-bars"} />
          </div>
          <ul className={click ? "dev-nav-menu active" : "dev-nav-menu"}>
            <li className="dev-nav-item">
              <Link to="/" className="dev-nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="dev-nav-item">
              <Link
                to="/services"
                className="dev-nav-links"
                onClick={closeMobileMenu}
              >
                Keynotes
              </Link>
            </li>
            <li className="dev-nav-item">
              <Link
                to="/aboutus"
                className="dev-nav-links"
                onClick={closeMobileMenu}
              >
                Workshops
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
