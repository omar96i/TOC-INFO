import React, { useEffect, useState, useContext } from "react";
import "./Payments.scss";
import CustomHr from "../../atoms/CustomHr/CustomHr";
import { useLocation, Link } from "react-router-dom";
import VisaIcon from "../../../assets/icons/banks/visa.png";
import MasterIcon from "../../../assets/icons/banks/mastercard.png";
import AmericaIcon from "../../../assets/icons/banks/america.png";
import BancolombiaIcon from "../../../assets/icons/banks/bancolombia.jpg";
import NequiIcon from "../../../assets/icons/banks/nequi.png";
import PseIcon from "../../../assets/icons/banks/pse.png";
import PaymentPlan from "../../molecules/PaymentPlan/PaymentPlan";
import { ModalContext } from "../../../providers/ModalProvider";
import CoursesService from "../../../services/CoursesService";
import LoadingIcon from "../../../assets/icons/Upload.svg";
const Payments = ({ history }) => {
  const axios = require("axios");
  const { openModal, setModalMessage } = useContext(ModalContext);
  const [showLoading, setShowLoading] = useState(true);
  let courseService = new CoursesService();
  const [courses, setCourses] = useState([]);
  useEffect(() => {

    window.scrollTo(0, 0);
    setShowLoading(true);
    axios.get('http://127.0.0.1:8000/api/course/get').then(res=>{
      setShowLoading(false);
      setCourses(res.data.courses);
    }).catch(error=>{
      setShowLoading(false);
      console.log(error.response)
    })
  }, []);
  const goPay = (nameOption, price) => {
    // console.log(price);
    if (nameOption !== undefined) {
      history.push({
        pathname: "/pago-proceso",
        state: {
          amountInCents: price,
          name: nameOption,
        },
      });
    } else {
      setModalMessage({
        title: "Curso inválido",
        body: "Selecciones algun curso complementario para pagar",
        actionName1: "Aceptar",
      });
      openModal();
    }
  };

  return (
    <div className="payments">
      <h4>Elige un plan y prepárate</h4>
      <div className="payments__content">
        <div className="payments__content__txt">
          <div className="payments__content__data">
            <p className="payments__content__data__title">
              Prepárate para el examen de residencia
            </p>
            <p className="payments__content__data__description">
              <i className="material-icons">monetization_on</i> Precios en pesos
              colombianos
            </p>
            <p className="payments__content__data__description">
              <i className="material-icons">security</i> Compra segura
            </p>
            <p className="payments__content__data__description-med">
              Los pagos de Cursos TOC son procesados por Wompi, una solución de
              Bancolombia. Nunca tendremos acceso a los detalles o información
              de tu tarjeta o cuenta, sólo procesamos la información que nos
              suministra Bancolombia cuando el pago es exitoso. Recuerda
              enviarnos el comprobante de tu pago a whatsapp.
            </p>
          </div>
          <hr />
          <div className="payments__content__banks">
            <p className="payments__content__data__description-med">
              Múltiples medios de pago
            </p>
            <div className="payments__content__data__banks">
              <img src={VisaIcon} alt="" />
              <img src={MasterIcon} alt="" />
              <img src={AmericaIcon} alt="" />
              <img src={BancolombiaIcon} alt="" />
              <img src={NequiIcon} alt="" />
              <img src={PseIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="payments__content__base">
          <h4>
            Pagos Curso TOC Base
          </h4>
          <div className="payments__content__base-plans">
            <PaymentPlan
              title="Base"
              drop={false}
              price={13990000}
              time="(IVA Incluido) "
              postdata={[
                "Paga mes a mes durante los 4 meses.",
                "35 USD aprox.",
                "Metodología TOC",
              ]}
              pay={(name, price) => goPay(name, price)}
            />
            <PaymentPlan
              title="Completo"
              drop={false}
              price={45990000}
              time="Ahorra 100.600 COP (IVA Incluido) "
              postdata={[
                "Un único pago por los 4 meses.",
                "105 USD aprox, todo el curso",
                "Metodología TOC",
              ]}
              pay={(name, price) => goPay(name, price)}
            />
          </div>
        </div>
        {showLoading && (
        <img src={LoadingIcon} className="blog-container__loading" alt="" />
      )}
        {courses.length > 0 && (
          <div className="payments__content__base">
            <h4>
              Pagos <Link to="/cursos">Cursos complementarios</Link>
            </h4>
            <div className="payments__content__base-plans">
              {courses.map((item, index) => {
                var date = new Date(item.endDate);
                
                if (date > new Date()) {
                  var price=`${item.cost}00`
                  return (
                    <PaymentPlan
                      key={index}
                      title={item.title}
                      drop={false}
                      price={parseInt(price,10)}
                      time={item.title.includes("Banco") ? "3 Meses (IVA Incluido)" : (item.title.includes('Técnicas') ? "2 semanas (IVA Incluido)" : (item.title.includes('Premédico') ? "2 meses (IVA Incluido)" : "1 mes (IVA Incluido)"))}
                      postdata={[
                        `${item.title.includes("Banco") ? "Acceso ilimitado por 3 meses" : (item.title.includes('Técnicas') ? "Estudiarás durante 2 semanas" : (item.title.includes('Premédico')? "Estudiarás durante 2 meses" : "Estudiarás durante 1 mes"))}`,
                        `${item.title.includes("Banco") ? "3000 preguntas con retroalimentación inmediata" : (item.title.includes('Técnicas')? "10 temas clave" : "")}`,
                        `${item.title.includes("Banco") ? "Podrás entrenarte a cualquier hora del día" : (item.title.includes('Técnicas') || item.title.includes('Premédico')? "100% virtual" : "")}`,
                        `${item.title.includes("Banco") ? "Más de 150 temas de medicina" : ""}`,
                        `${item.title.includes("Banco") ? "" : (item.title.includes('Técnicas') ? "Tareas prácticas para aplicar lo aprendido" : (item.title.includes('Premédico')? "28 temas de medicina" : "20 temas"))}`,
                        `${item.title.includes("Banco") ? "" : (item.title.includes('Premédico') ? "Metodología TOC para memorizar a largo plazo" : "Metodología TOC")}`,
                      ]}
                      pay={(name, price) => goPay(name, price)}
                    />
                  );
                }
              })}
            </div>
          </div>
        )}
        {/* <PaymentPlan
          title="Curso anestesiología"
          price="539.900 COP"
          time="Por un mes"
          postdata={[
            "Un único pago de $539.900 COP (162 USD aprox.) por los 6 meses.",
          ]}
          pay={() => goPay(2)}
        /> */}
      </div>
      {/* <PaymentGModal /> */}
    </div>
  );
};

export default Payments;
