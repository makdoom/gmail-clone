import React from "react";
import "./sidebarOption.css";

const SidebarOption = ({ Icon, number, title, isActive }) => {
  return (
    <div className="sidebar__option_container">
      <p className={`sidebar__option ${isActive && "active"}`}>
        <Icon className="icon" />
        <p className="title">{title}</p>
        <p className="number">{number}</p>
      </p>
    </div>
  );
};

export default SidebarOption;
