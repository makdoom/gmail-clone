import React from "react";
import "./emailRow.css";
import { Checkbox, IconButton } from "@material-ui/core";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import DraftsIcon from "@material-ui/icons/Drafts";
import ArchiveIcon from "@material-ui/icons/Archive";
import DeleteIcon from "@material-ui/icons/Delete";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openSelectedMail } from "../../features/mail/mailSlice";

const EmailRow = ({ id, title, subject, description, originalTime, time }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const date = new Date(originalTime * 1000).toDateString();

  const openMail = () => {
    dispatch(
      openSelectedMail({
        subject,
        title,
        timestamp: `${time} - ${date}`,
        message: description,
      })
    );
    navigate("/mail");
  };

  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox size="small" className="check--box" />
        <Checkbox
          className="star--icon"
          size="small"
          icon={<StarOutlineIcon />}
          checkedIcon={<StarIcon />}
        />
      </div>
      <div className="email__info" onClick={openMail}>
        <p className="emailRow__title">{title}</p>
        <div className="emailRow__message">
          <p className="subject">
            {subject} -
            <span className="emailRow__description">{description}</span>
          </p>
        </div>
        <div className="emailRow__time">{date}</div>
      </div>
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
