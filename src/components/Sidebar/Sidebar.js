import React from "react";
import "./sidebar.css";
import SidebarOption from "../SidebarOption/SidebarOption";
import { SidebarItemsOptions, MeetItems } from "../sidebarItems";
import SidebarMeet from "../SidebarMeet/SidebarMeet";
import { Avatar } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from "@material-ui/icons/Person";
import { useDispatch } from "react-redux";
import { openSendMasseage } from "../../features/mail/mailSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <button
          className="sidebar__compose"
          onClick={() => dispatch(openSendMasseage())}
        >
          <object data="/images/add-btn.svg" aria-labelledby="compose"></object>
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
        {MeetItems.map((item, index) => (
          <SidebarMeet key={index} Icon={item.icon} title={item.title} />
        ))}
      </div>
      <div className="sidebar__hangout">
        <p className="hangout__title">Hangouts</p>
        <div className="avatar__container">
          <Avatar className="avatar__icon" src={currentUser?.photoURL} />
          <span>
            {currentUser?.displayName} <ArrowDropDownIcon className="icon" />
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
