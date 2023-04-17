import React from "react";
import "./Input.scss";

const Input = ({register, ...props}) => {
  return <input className="custom-input" ref={register} {...props} />;
};

export default Input;
