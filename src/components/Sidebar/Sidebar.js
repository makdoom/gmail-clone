import React from "react";
import InboxIcon from "@material-ui/icons/Inbox";
import "./sidebar.css";
import SidebarOption from "../SidebarOption/SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <button className="sidebar__compose">
          <img src="/images/add-btn.svg" alt="" />
          Compose
        </button>
      </div>
      <div className="sidebar__middle">
        <div className="middle__top">
          <SidebarOption
            Icon={InboxIcon}
            title="Inbox"
            number={54}
            selected={true}
          />
          <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
          <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
        </div>
        <div className="middle__bottom"></div>
      </div>
      <div className="sidebar__bottom"></div>
    </div>
  );
};

export default Sidebar;
