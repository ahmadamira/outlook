import React from "react";
import Icon from "../Icon/Icon";
import "./style.css";

const RightContent = ({ isIcn, icn }) => {
  return (
    <>
      {isIcn && <Icon icn={isIcn} />}
      <Icon icn={icn} />
    </>
  );
};

export default RightContent;
