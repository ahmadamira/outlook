import React from "react";
import "./MainSection.css";
import EmailContent from "./EmailContent/EmailContent";
import SideBar from "../SideBar";

const MainSection = () => {
  return (
    <div className="main-section">
      <SideBar />
      <div className="center">Center</div>
      <EmailContent />
    </div>
  );
};

export default MainSection;
