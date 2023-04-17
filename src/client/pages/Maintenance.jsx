import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Patient from "../assets/images/404.png";
const Maintenance = ({ history }) => {
  let location = useLocation();

  return (
    <div>
      <div className="not-found">
        <img alt="error 404" src={Patient} />
        <h6>Lo sentimos, nuestra página se encuentra en mantenimiento. Por favor, vuelve más tarde.</h6>
      </div>
    </div>
  );
};

export default Maintenance;
