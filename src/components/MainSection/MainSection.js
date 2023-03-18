import React from "react";
import "./MainSection.css";
import EmailContent from "./EmailContent/EmailContent";

const MainSection = () => {
  return (
    <div className="main-section">
      <div className="left">left</div>
      <div className="center">Center</div>
      <EmailContent />
    </div>
  );
};

export default MainSection;
