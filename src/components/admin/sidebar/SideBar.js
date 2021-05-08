/** @format */

import React from "react";
import "./SideBar.sass";
import homeIcon from "../../../assets/Images/home.png";
import user from "../../../assets/Images/user.png";
import historyIcon from "../../../assets/Images/history_icon.png";
import event from "../../../assets/Images/event.png";
import articles from "../../../assets/Images/Articles.png";
import arrowIcon from "../../../assets/Images/ARROW_NAV.png";
import { Link } from "react-router-dom";

function SideBar() {
  function setArrow(link) {
    let word = window.location.href;
    return word.includes(link);
  }

  function setArrowNew(link) {
    let word = window.location.href;
    return word.split("/").includes(link);
  }

  return (
    <div className="sidebar">
      <Link style={{ textDecoration: "none" }} to="/dashboard">
        <div>
          <img
            alt="selectedIcon"
            hidden={!setArrowNew("dashboard")}
            src={arrowIcon}
          />
          <div className="cardView">
            <img alt="homeIcon" src={homeIcon} />
            <p>Home</p>
          </div>
        </div>
      </Link>

      <Link to="/reviewerList">
        <div>
          <img
            alt="selectedIcon"
            hidden={!setArrowNew("measure")}
            src={arrowIcon}
          />
          <div className="cardView">
            <img alt="measureIcon" src={user} />
            <p>Users</p>
          </div>
        </div>
      </Link>

      <Link to="/history">
        <div>
          <img
            alt="selectedIcon"
            hidden={!setArrowNew("history")}
            src={arrowIcon}
          />
          <div className="cardView">
            <img alt="historyIcon" src={historyIcon} />
            <p>History</p>
          </div>
        </div>
      </Link>

      <Link to="/view_Doctors">
        <div>
          <img
            alt="selectedIcon"
            hidden={!setArrow("Doctors")}
            src={arrowIcon}
          />
          <div className="cardView">
            <img alt="doctorIcon" src={event} />
            <p>Events</p>
          </div>
        </div>
      </Link>

      <Link to="/view_Clinics">
        <div>
          <img
            alt="selectedIcon"
            hidden={!setArrow("Clinics")}
            src={arrowIcon}
          />
          <div className="cardView">
            <img alt="clinicIcon" src={articles} />
            <p>Articles</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default SideBar;
