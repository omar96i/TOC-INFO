import React from "react";
import { Link } from "react-router-dom";
import "./ServerResponse.scss";

const ServerResponse = ({ error }) => {
    if (!error) {
        return <div className="server-response">
        <p><span className="message">Hemos recibido tus datos con éxito,</span> revisa el correo electrónico e iniciemos tu preparación para la <br/> <span className="emphasis">residencia médica</span></p>
    </div>;
    } else {
        return <div className="server-response error-response">
        <p><span className="message">Hubo un problema al inscribirse</span> No se pudo enviar los datos correctamente <br/> <Link to='/iniciar'><span className="emphasis">Intentalo de nuevo</span></Link></p>
    </div>;
    }
}

export default ServerResponse;