/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { Button } from "react-bootstrap";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
              <Link
                to="/home/dashboard"
                className="dev-nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="dev-nav-item">
              <Link
                to="/Login"
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
          <Button variant="warning">Sign Up</Button>{" "}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
