import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import "./ThankYou.scss";

const ThankYou = ({ error }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  switch (error) {
    case 0:
      return (
        <div className="thank-you thank-you-error">
          <p>
            <span className="message">
              Ups, parece que ya hiciste el proceso de registro
            </span>
            si no recibiste el correo de confirmación por favor escríbenos
            haciendo{" "}
            <a href="https://wa.link/96ys70" target="__blank" rel="noopener">
              click aquí
            </a>{" "}
            y no te quedes sin
            <br /> <span className="emphasis">tu semana gratis</span>
          </p>
        </div>
      );

    case 1:
      return (
        <div className="thank-you thank-you-error">
          <p>
            <span className="message">Hubo un problema al inscribirse</span>
            No se pudo enviar los datos correctamente
            <br />  <Link to='/iniciar'><span className="emphasis">Intentalo de nuevo</span></Link>
          </p>
        </div>
      );

    default:
      return (
        <div className="thank-you">
          <p>
            <span className="message">Hemos recibido tus datos con éxito,</span>{" "}
            revisa el correo electrónico e iniciemos tu preparación para la{" "}
            <br /> <span className="emphasis">residencia médica</span>
            <span className="message">Recuerda que tienes una semana gratis.</span>
          </p>
          <Link to="/pagos"><CustomButton>Ir a pagar</CustomButton></Link>
        </div>
      );
  }
};

export default ThankYou;
