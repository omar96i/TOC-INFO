import React from "react";
import "./NotFound.scss";
import Patient from "../../../assets/images/404.png";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import { useLocation, Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <img alt="error 404" src={Patient}/>
     <h6>Lo sentimos, no pudimos encontrar la página que buscaba.</h6>
     <Link to="/"><CustomButton >Volver al inicio</CustomButton></Link>
    </div>
  );
};

export default NotFound;
