import React from "react";
import "./MainSection.css";
import EmailContent from "./EmailContent/EmailContent";

import Middelcol from "../Middelcol";

import SideBar from "../SideBar";


const MainSection = () => {
  return (
    <div className="main-section">
      <SideBar />
      <Middelcol />
      <EmailContent />
    </div>
  );
};

export default MainSection;
