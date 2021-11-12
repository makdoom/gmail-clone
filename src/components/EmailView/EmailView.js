import React from "react";
import "./emailView.css";
import { Checkbox, IconButton } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import EmailSection from "../EmailSection/EmailSection";
import EmailRow from "../EmailRow/EmailRow";

const EmailView = () => {
  const emailSections = [
    {
      icon: InboxIcon,
      title: "Primary",
      color: "#d93227",
      isSelected: true,
    },
    {
      icon: PeopleIcon,
      title: "Social",
      color: "#1a73e8",
      isSelected: false,
    },
    {
      icon: LocalOfferIcon,
      title: "Promotions",
      color: "#188038",
      isSelected: false,
    },
  ];
  return (
    <div className="email__view__container">
      <div className="emailList__settings">
        <div className="email__settingLeft">
          <Checkbox size="small" />
          <IconButton>
            <ArrowDropDownIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <RefreshIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </div>
        <div className="email__settingRight">
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
      <div className="emailList__sections">
        {emailSections.map((item, index) => (
          <EmailSection
            key={index}
            Icon={item.icon}
            title={item.title}
            color={item.color}
            isSelected={item.isSelected}
          />
        ))}
      </div>
      <div className="emailList__area">
        <EmailRow
          title="First Mail"
          subject="Testing mail"
          description="This is first emailThis is first emailThis is first emailThis is first emailThis is first emailThis is first emailThis is first emailThis is first emailThis is first emailThis is first emailThis is first emailThis is first emailThis is first email"
          time="Nov 10"
        />
        <EmailRow
          title="First Mail"
          subject="Testing mail"
          description="This is first emailThis is first emailThis is first emailThis is first emailThis is first emailThis is first emailThis is first emailThis is first emailThis is first emailThis is first emailThis is first emailThis is first emailThis is first email"
          time="Nov 10"
        />
      </div>
    </div>
  );
};

export default EmailView;
