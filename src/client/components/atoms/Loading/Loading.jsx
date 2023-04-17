import React from "react";
import "./Loading.scss";
import Upload from "../../../assets/icons/Upload.svg";

const Loading = () => {
  return (
    <div className="loading">
      <img src={Upload} alt="" />
    </div>
  );
};

export default Loading;