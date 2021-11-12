import React from "react";
import "./emailRow.css";
import { Checkbox, IconButton } from "@material-ui/core";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import DraftsIcon from "@material-ui/icons/Drafts";
import ArchiveIcon from "@material-ui/icons/Archive";
import DeleteIcon from "@material-ui/icons/Delete";

const EmailRow = ({ id, title, subject, description, time }) => {
  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox size="small" />
        <IconButton>
          <StarOutlineIcon
            className="star--icon"
            fontSize="small"
          ></StarOutlineIcon>
        </IconButton>
      </div>
      <p className="emailRow__title">{title}</p>
      <div className="emailRow__message">
        <p className="subject">
          {subject} -
          <span className="emailRow__description">{description}</span>
        </p>
      </div>
      <div className="emailRow__time">{time}</div>
      <div className="emailRow__action">
        <IconButton>
          <ArchiveIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <DraftsIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <WatchLaterIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};

export default EmailRow;
