import React from "react";
import "./sidebar.css";
import SidebarOption from "../SidebarOption/SidebarOption";
import { SidebarItemsOptions, MeetItems } from "../sidebarItems";
import SidebarMeet from "../SidebarMeet/SidebarMeet";
import { Avatar } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from "@material-ui/icons/Person";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <button className="sidebar__compose">
          <img src="/images/add-btn.svg" alt="" />
          Compose
        </button>
      </div>
      <div className="sidebar__options">
        {SidebarItemsOptions.map((item, index) => (
          <SidebarOption
            key={index}
            Icon={item.icon}
            title={item.title}
            number={item.numbers && item.numbers}
            isActive={item.active && item.active}
          />
        ))}
      </div>
      <div className="sidebar__meet__options">
        <p className="meet__title">Meet</p>
        {MeetItems.map((item) => (
          <SidebarMeet Icon={item.icon} title={item.title} />
        ))}
      </div>
      <div className="sidebar__hangout">
        <p className="hangout__title">Hangouts</p>
        <div className="avatar__container">
          <Avatar className="avatar__icon" />
          <span>
            Makdoom Shaikh <ArrowDropDownIcon className="icon" />
          </span>
          <AddIcon className="icon" />
        </div>
      </div>
      <div className="sidebar__bottom_options">
        <PersonIcon />
        <img
          src="https://www.gstatic.com/images/icons/material/system/1x/hangout_black_20dp.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Sidebar;
