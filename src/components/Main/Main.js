import React from "react";
import EmailView from "../EmailView/EmailView";
import Sidebar from "../Sidebar/Sidebar";
import SideIcon from "../SideIcon/SideIcon";
import "./main.css";
import { Routes, Route } from "react-router-dom";
import Mail from "../Mail/Mail";
import SendMail from "../SendMail/SendMail";
import { selectSendMessagePopup } from "../../features/mail/mailSlice";
import { useSelector } from "react-redux";

const Main = () => {
  const sendMessagePopup = useSelector(selectSendMessagePopup);

  return (
    <div className="main__container">
      <Sidebar />
      <Routes>
        <Route path="/" element={<EmailView />} />
        <Route path="/mail" element={<Mail />} />
      </Routes>
      <SideIcon />
      {(sendMessagePopup === "open" || sendMessagePopup === "minimize") && (
        <SendMail />
      )}
    </div>
  );
};

export default Main;
