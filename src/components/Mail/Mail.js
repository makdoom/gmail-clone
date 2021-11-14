import React from "react";
import { Avatar, Checkbox, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArchiveIcon from "@material-ui/icons/Archive";
import ReportIcon from "@material-ui/icons/Report";
import DeleteIcon from "@material-ui/icons/Delete";
import MailIcon from "@material-ui/icons/Mail";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FolderIcon from "@material-ui/icons/Folder";
import LabelIcon from "@material-ui/icons/Label";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import PrintIcon from "@material-ui/icons/Print";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";
import ReplyIcon from "@material-ui/icons/Reply";
import "./mail.css";
import { useNavigate } from "react-router-dom";
import { selectedMail } from "../../features/mail/mailSlice";
import { useSelector } from "react-redux";

const Mail = () => {
  const navigate = useNavigate();
  const { subject, title, timestamp, message } = useSelector(selectedMail);

  return (
    <div className="mail__container">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <ArchiveIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <ReportIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <MailIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <WatchLaterIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <CheckCircleIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <FolderIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <LabelIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <NavigateNextIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mailBody__header">
          <p className="mail__subject">{subject}</p>
          <div className="leftIcons">
            <IconButton>
              <PrintIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <OpenInNewIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
        <div className="mailBody__profile">
          <div className="profile__left">
            <Avatar />
            <div className="profile__info">
              <p className="sender__email">
                <span>{title}</span>{" "}
              </p>
              <span>
                to me <ArrowDropDownIcon />{" "}
              </span>
            </div>
          </div>
          <div className="profile__right">
            <p>{timestamp}</p>
            <Checkbox
              className="star--icon"
              size="small"
              icon={<StarOutlineIcon />}
              checkedIcon={<StarIcon />}
            />
            <IconButton>
              <ReplyIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
        <div className="mail__message">{message}</div>
      </div>
    </div>
  );
};

export default Mail;
