import React from "react";
import "./sidebarMeet.css";

const SidebarMeet = ({ Icon, title }) => {
  return (
    <div className="sidebar__meet_container">
      <a className={`sidebar__meet`} href="/">
        <Icon className="icon" />
        <p className="title">{title}</p>
      </a>
    </div>
  );
};

export default SidebarMeet;
