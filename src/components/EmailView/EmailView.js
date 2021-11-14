import React, { useEffect, useState } from "react";
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
import { db } from "../../firebase";

const EmailView = () => {
  const [emails, setEmails] = useState([]);
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

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().senderName,
            senderEmail: doc.data().senderEmail,
            subject: doc.data().subject,
            message: doc.data().message,
            timestamp: doc.data().timestamp,
          }))
        )
      );
  }, []);
  return (
    <div className="email__view__container">
      <div className="emailList__settings">
        <div className="email__settingLeft">
          <Checkbox size="small" className="check--box" />
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
        {emails.length > 0 ? (
          emails.map(
            ({ id, title, senderEmail, subject, message, timestamp }) => (
              <EmailRow
                key={id}
                title={title}
                senderEmail={senderEmail}
                subject={subject}
                description={message}
                originalTime={timestamp ? `${timestamp.seconds}` : ""}
                time={new Date(timestamp?.seconds * 1000).toLocaleString(
                  "en-US",
                  { hour: "numeric", minute: "numeric", hour12: true }
                )}
              />
            )
          )
        ) : (
          <div>
            <p className="empty__error">Your inbox is empty...!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailView;
