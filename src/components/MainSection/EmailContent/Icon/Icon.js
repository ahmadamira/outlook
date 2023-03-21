import React from "react";
import './Icon.css'


const Icon = ({icn}) => {
  return <span className="icn"><i class={icn}></i></span>;
};

export default Icon;
