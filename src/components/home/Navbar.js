/** @format */

import { Link } from "react-router-dom";

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Navbar.css";
import { Button } from "react-bootstrap";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const history = useHistory();

  const routeChange = () => {
    let path = "../home/login";
    history.push(path);
  };
  // const [button, setButton] = useState(true);

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
                to="/home/conference"
                className="dev-nav-links"
                onClick={closeMobileMenu}
              >
                Conferance
              </Link>
            </li>
          </ul>
          <Button variant="warning" onClick={routeChange}>
            Sign Up
          </Button>{" "}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
