import React from "react";
import "./sidebarOption.css";

const SidebarOption = ({ Icon, title, number, selected }) => {
  return (
    <div className="sidebar__option_container">
      <a
        className={`sidebar__option ${selected && "sidebar--active"}`}
        href="/"
      >
        <Icon />
        <p className="title">{title}</p>
        <p>{number}</p>
      </a>
    </div>
  );
};

export default SidebarOption;
