/** @format */

import React from "react";
import "./SideBar.sass";
import homeIcon from "../../../assets/Images/home.png";
import user from "../../../assets/Images/user.png";
import historyIcon from "../../../assets/Images/history_icon.png";
import event from "../../../assets/Images/event.png";
import articles from "../../../assets/Images/Articles.png";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <Link style={{ textDecoration: "none" }} to="/admin/dashboard">
        <div>
          <div className="cardView">
            <img alt="homeIcon" src={homeIcon} />
            <p>Home</p>
          </div>
        </div>
      </Link>

      <Link to="/admin/user-list">
        <div>
          <div className="cardView">
            <img alt="measureIcon" src={user} />
            <p>Users</p>
          </div>
        </div>
      </Link>

      <Link to="/history">
        <div>
          <div className="cardView">
            <img alt="historyIcon" src={historyIcon} />
            <p>History</p>
          </div>
        </div>
      </Link>

      <Link to="/view_Doctors">
        <div>
          <div className="cardView">
            <img alt="doctorIcon" src={event} />
            <p>Events</p>
          </div>
        </div>
      </Link>

      <Link to="/view_Clinics">
        <div>
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
