import React from "react";
import "./CircleImg.css";

const CircleImg = ({ name, color }) => {
  return (
    <div className="circle" style={{ backgroundColor: color }}>
      {name}
    </div>
  );
};

export default CircleImg;
