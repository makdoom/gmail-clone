import React from "react";
import EmailView from "../EmailView/EmailView";
import Sidebar from "../Sidebar/Sidebar";
import SideIcon from "../SideIcon/SideIcon";
import "./main.css";

const Main = () => {
  return (
    <div className="main__container">
      <Sidebar />
      <EmailView />
      <SideIcon />
    </div>
  );
};

export default Main;
