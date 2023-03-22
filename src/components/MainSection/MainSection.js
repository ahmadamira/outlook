import React from "react";
import "./MainSection.css";
import EmailContent from "./EmailContent/EmailContent";
import Middelcol from "../Middelcol";

const MainSection = () => {
  return (
    <div className="main-section">
      <div className="left">left</div>
      <Middelcol />
      <EmailContent />
    </div>
  );
};

export default MainSection;
