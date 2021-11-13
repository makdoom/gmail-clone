import React from "react";
import EmailView from "../EmailView/EmailView";
import Sidebar from "../Sidebar/Sidebar";
import SideIcon from "../SideIcon/SideIcon";
import "./main.css";
import { Routes, Route } from "react-router-dom";
import Mail from "../Mail/Mail";
import SendMail from "../SendMail/SendMail";

const Main = () => {
  return (
    <div className="main__container">
      <Sidebar />
      <Routes>
        <Route path="/" element={<EmailView />} />
        <Route path="/mail" element={<Mail />} />
      </Routes>
      <SideIcon />
      <SendMail />
    </div>
  );
};

export default Main;
