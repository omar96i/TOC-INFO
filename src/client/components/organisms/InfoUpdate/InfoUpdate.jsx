import React, { useState, useEffect } from "react";
import "./InfoUpdate.scss";
import CustomHr from "../../atoms/CustomHr/CustomHr";
import Steps from "../../molecules/Steps/Steps";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useLocation, useHistory } from "react-router-dom";
import { api } from "../../../common/enviroment";
import LoadingIcon from "../../../assets/icons/Upload.svg";
import PaymentService from "../../../services/PaymentService";

const InfoUpdate = () => {
  let location = useLocation();
  let history = useHistory();
  let paymentService = new PaymentService();
  const [plan, setPlan] = useState({});
  const [user, setUser] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [showLoading, setShowLoading] = useState(false);
  const [paymentError, setPaymentError] = useState(false);
  const stepsList = [
    "Ingresa tus datos",
    "Confirma tus datos",
    "Actualiza tus datos",
  ];
  const { register, handleSubmit, reset } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    const amountInCents = location.state?.amountInCents;

    setPlan({
      amountInCents,
      type: amountInCents == 13990000 ? "Base" :  amountInCents == 11900000 ?"Curso complementario":"Completo",
    });
  }, []);

  const createReference = () => {
    setShowLoading(true);

    paymentService
      .getReference()
      .then((res) => {
        setShowLoading(false);
        setPaymentError(false);
        pay(res.data.result);
      })
      .catch(() => {
        setShowLoading(false);
        setPaymentError(true);
      });
  };

  const pay = (reference) => {
    const planCheckout = new WidgetCheckout({
      currency: "COP",
      amountInCents: plan.amountInCents,
      reference: reference,
      publicKey: api.WOMPI_KEY,
      redirectUrl: `${api.FRONT_URL}/pago-finalizado`, // Opcional
    });
    planCheckout.open((result) => {
      const transaction = result.transaction;

      paymentService
        .createTransaction({
          transactionId: transaction.id,
          amountInCents: transaction.amountInCents,
          reference: transaction.reference,
          customerEmail: transaction.customerEmail,
          currency: transaction.currency,
          paymentMethodType: transaction.paymentMethodType,
          redirectUrl: transaction.redirectUrl,
          status: transaction.status,
          statusMessage: transaction.statusMessage,
          createdAt: transaction.createdAt,
        })
        .then();

      history.push({
        pathname: "/pago-finalizado",
        search: `?id=${result.transaction.id}`,
        state: transaction,
      });
    });
  };

  const next = () => {
    if(stepsList.length > currentStep){
      setCurrentStep(currentStep + 1)
    }
  };

  const back = () => {
    reset();
    setUser(null);
    if(currentStep > 0){
      setCurrentStep(currentStep - 1)
    }
  };

  const onSubmit = (data) => {
    setShowLoading(true);
    paymentService
      .getUserInfo(data)
      .then((res) => {
        setUser({ ...res.data.result });
        setShowLoading(false);
      })
      .catch(() => {
        setShowLoading(false);
      });
  };

  const stepsAnimation = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    hidden2: { x: "100%" },
  };

  return (
    <div className="payment-steps">
      <CustomHr />
      <Steps currentStep={currentStep} stepsList={stepsList} />

      <div className="payment-steps__selected-plan">
        <div className="payment-steps__selected-plan__data">
          <p>
            <b>Actualiza tus datos</b> <br />
          </p>
        </div>
      </div>

      <div className="payment-steps__contents">
        <motion.div
          initial={`${currentStep != 1 ? "hidden" : "visible"}`}
          animate={`${currentStep != 1 ? "hidden" : "visible"}`}
          variants={stepsAnimation}
          className="payment-steps__contents__content"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <h5>Datos básicos</h5>
            <i className="material-icons left">warning</i>{" "}
            <p>
              Ingresa los datos con el que te inscribiste a nuestro curso de
              Cursos TOC.
            </p>
            <div className="input-field">
              <input id="email" type="email" name="email" ref={register()} />
              <label htmlFor="lastNames">Correo</label>
            </div>
            <div className="input-field">
              <input
                id="whatsApp"
                type="number"
                name="whatsApp"
                ref={register()}
              />
              <label htmlFor="whatsApp">WhatsApp</label>
            </div>
            <button
              className="waves-effect waves-light btn"
              type="submit"
              onClick={() => next()}
            >
              <i className="material-icons right">chevron_right</i>Continuar
            </button>
          </form>
        </motion.div>
        <motion.div
          initial={"hidden2"}
          animate={`${
            currentStep == 2
              ? "visible"
              : currentStep == 3
              ? "hidden"
              : "hidden2"
          }`}
          variants={stepsAnimation}
          className="payment-steps__contents__content"
        >
          {showLoading ? (
            <div className="payment-steps__contents__content__loading">
              <img src={LoadingIcon} alt="" />
              <p>Obteniendo datos...</p>
            </div>
          ) : user ? (
            <div className="payment-steps__contents__content__your-data">
              <i className="material-icons center">person_pin</i>
              <h5>¿Estos son tus datos?</h5>
              <p>
                <b>Nombres:</b> {user.firstName}
              </p>
              <p>
                <b>Apellidos:</b> {user.lastName}
              </p>
              <p>
                <b>Correo:</b> {user.email}
              </p>
              <p>
                <b>Número:</b> {user.whatsApp}
              </p>
              <div className="payment-steps__contents__content__your-data__confirm">
                <button
                  className="waves-effect waves-light btn"
                  type="button"
                  onClick={() => back()}
                >
                  <i className="material-icons left">chevron_left</i>No soy yo
                </button>
                <button
                  className="waves-effect waves-light btn"
                  type="button"
                  onClick={() => next()}
                >
                  <i className="material-icons right">chevron_right</i>Sí soy yo
                </button>
              </div>
            </div>
          ) : (
            <div className="payment-steps__contents__content__your-data">
              <i className="material-icons center">error</i>
              <h5>Error obteniendo usuario</h5>
              <p>
                No se pudo obtener el usuario <br /> con el correo y el whatsApp
                ingresado.
              </p>
              <p>
                Si no te has registrado aún, registrate haciendo <br /> click{" "}
                <a href="/iniciar">aquí</a> y prueba una semana del cruso TOC Base gratis.
              </p>
              <button
                className="waves-effect waves-light btn"
                type="button"
                onClick={() => back()}
              >
                <i className="material-icons left">chevron_left</i>Volver a
                intentar
              </button>
            </div>
          )}
        </motion.div>
        <motion.div
          initial={"hidden2"}
          animate={`${currentStep == 3 ? "visible" : "hidden2"}`}
          variants={stepsAnimation}
          className="payment-steps__contents__content"
        >
          {showLoading ? (
            <div className="payment-steps__contents__content__loading">
              <img src={LoadingIcon} alt="" />
              <p>Generando una referencia de pago...</p>
            </div>
          ) : paymentError ? (
            <div className="payment-steps__contents__content__payment">
              <i className="material-icons center">error</i>
              <h5>Error en el proceso de pago</h5>
              <p>
                No se pudo generar una nueva referencia para este pago, por
                favor vuelva a intentarlo
              </p>
              <button
                className="waves-effect waves-light btn-large"
                type="button"
                onClick={() => createReference()}
              >
                <i className="material-icons left">payment</i>PAGAR
              </button>
            </div>
          ) : (
            <div className="payment-steps__contents__content__payment">
              <i className="material-icons center">warning</i>
              <h5>Advertencia</h5>
              <p>
                Tenga en cuenta usar los mismos datos que ingresó para la
                verificación de su usuario en el proceso de pago.
              </p>
              <button
                className="waves-effect waves-light btn-large"
                type="button"
                onClick={() => createReference()}
              >
                <i className="material-icons left">payment</i>PAGAR
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default InfoUpdate;
