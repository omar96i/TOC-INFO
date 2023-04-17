import React from "react";
import "./WhatsApp.scss";
import whatsapp from "../../../assets/icons/whatsapp.png";
import { useLocation, Link } from "react-router-dom";
const WhatsApp = () => {
  return (
    <a href="https://wa.me/+573216677865" target="__blank"><div className="whatsApp">
    <img src={whatsapp}/>
</div></a>
  );
};

export default WhatsApp;