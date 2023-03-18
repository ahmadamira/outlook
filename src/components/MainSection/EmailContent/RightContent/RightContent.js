import React from "react";
import Icon from "../Icon/Icon";

const RightContent = () => {
  return (
    <>
      {[1, 2, 3].map(() => {
        return <Icon />;
      })}
    </>
  );
};

export default RightContent;
