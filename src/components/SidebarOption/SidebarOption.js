import React from "react";
import "./sidebarOption.css";

const SidebarOption = ({ Icon, number, title, isActive }) => {
  console.log(isActive);
  return (
    <div className="sidebar__option_container">
      <a className={`sidebar__option ${isActive && "active"}`} href="/">
        <Icon className="icon" />
        <p className="title">{title}</p>
        <p className="number">{number}</p>
      </a>
    </div>
  );
};

export default SidebarOption;
