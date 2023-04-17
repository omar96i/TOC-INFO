import React from "react";
import "./CustomButton2.scss";

const CustomButton2 = ({ type, children }) => {
  return (
    <button
      className={`custom-button2 `}
      type={type ? type : "button"}
    >
      {children}
    </button>
  );
};

export default CustomButton2;
