import React from "react";
import "./sideIcon.css";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const SideIcon = () => {
  return (
    <div className="sideicon__container">
      <IconButton className="icon-btn">
        <img src="/images/calender.png" alt="" />
      </IconButton>
      <IconButton className="icon-btn">
        <img src="/images/keep.png" alt="" />
      </IconButton>
      <IconButton className="icon-btn">
        <img src="/images/task.png" alt="" />
      </IconButton>
      <IconButton className="icon-btn">
        <img src="/images/contact.png" alt="" />
      </IconButton>
      <div>
        <IconButton className="icon-btn add">
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SideIcon;
