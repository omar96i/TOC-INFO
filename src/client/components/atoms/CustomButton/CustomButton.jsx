import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ type, children, disabled }) => {
  return (
    <button  className="custom-button" type={type ? type : "button"} disabled={disabled ? disabled : false}>
      {children}
    </button>
  );
};

export default CustomButton;
