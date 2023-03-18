import React from "react";

import EmailAddress from "./EmailAddress/EmailAddress";
import EmailDate from "./EmailDate/EmailDate";
import RightContent from "./RightContent/RightContent";
import "./EmailContent.css";
import CircleImg from "./CircleImg/CircleImg";
import From from "./From/From";

const EmailContent = () => {
  return (
    <div className="email-content">
      <div className="email-form">
        <From />
      </div>
      <div className="content">
        <div className="left-content">
          <CircleImg />
          <div className="email-address">
            <EmailAddress />
            <EmailDate />
            <span className="to">To:</span> <span className="you">You</span>
          </div>
        </div>
        <div className="right-content">
          <RightContent />
        </div>
      </div>
    </div>
  );
};

export default EmailContent;
