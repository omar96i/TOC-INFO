import React, { useEffect, useState } from "react";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import "./ThankYouCourses.scss";
import { Switch, Route, Redirect, useLocation,Link } from "react-router-dom";

const ThankYouCourses = ({ error }) => {
  let location = useLocation();
  const[name,setName]=useState("")
  useEffect(() => {
    window.scrollTo(0, 0);
    if(location.state){
      setName(location.state);

    }else{
      console.log(location);
    }
  }, []);

  switch (error) {
    case 0:
      return (
        <div className="thank-you thank-you-error">
          <p>
            <span className="message">
              Ups, parece que ya hiciste el proceso de registro 
            </span>
            al curso base o a otro curso complementario. En este caso, solo debes ir a <Link to="/pagos">pagos</Link>{" "}
            Recuerda enviar el comprobante de tu pago a nuestro whatsapp
           
          </p>
        </div>
      );

    case 1:
      return (
        <div className="thank-you thank-you-error">
          <p>
            <span className="message">Hubo un problema al inscribirse</span>
            No se pudo enviar los datos para el curso complementario correctamente
            <br />  <Link to='/iniciar'><span className="emphasis">Intentalo de nuevo</span></Link>
          </p>
        </div>
      );

    default:
      return (
        <div className="thank-you">
          <p>
            <span className="message">Te has inscrito al {name},</span>{" "}
            Hemos recibido tus datos con éxito, bienvenido(a) a nuestro curso complementario{" "}
            <br /> <span className="emphasis">Recuerda pagar y enviar el comprobante de tu pago a nuestro whatsapp</span>
          </p>
          <Link to="/pagos"><CustomButton>Ir a pagar</CustomButton></Link>
        </div>
      );
  }
};

export default ThankYouCourses;
