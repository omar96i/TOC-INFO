import React, { useState, useEffect } from "react";
import "./PaymentSteps.scss";
import CustomHr from "../../atoms/CustomHr/CustomHr";
import Steps from "../../molecules/Steps/Steps";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useLocation, useHistory } from "react-router-dom";
import { api } from "../../../common/enviroment";
import LoadingIcon from "../../../assets/icons/Upload.svg";
import PaymentService from "../../../services/PaymentService";
import InscriptionService from "../../../services/InscriptionService";
import Join from "../Join/Join"
const PaymentSteps = () => {
  const axios = require("axios");

  let location = useLocation();
  let history = useHistory();
  let paymentService = new PaymentService();
  let inscriptionService = new InscriptionService();
  const [plan, setPlan] = useState({});
  const [user, setUser] = useState({
    found: 0,
    updated: 0,
  });
  const [currentStep, setCurrentStep] = useState(2);
  const [showLoading, setShowLoading] = useState(false);
  const [showLoadingSecond, setShowLoadingSecond] = useState(false);
  const [paymentError, setPaymentError] = useState(false);
  const stepsList = [
    "Selecciona un plan",
    "Ingresa tus datos",
    "Confirma tus datos",
    "Realiza el pago",
  ];
  const { register, handleSubmit, reset } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    const amountInCents = location.state?.amountInCents;
    const name = location.state?.name;
    window.scrollTo(0, 0);
    setPlan({
      amountInCents,
      type: name,
    });
  }, []);

  const createReference = () => {
    setShowLoading(true);
    const planName=plan.type.split(" ").join("-")
    console.log(planName)
    axios.get(`http://127.0.0.1:8000/api/event/get/reference/${planName}`).then(res=>{
      setShowLoading(false);
      setPaymentError(false);
      pay(res.data.reference);
    }).catch(error=>{
      console.log(error.response)
      setShowLoading(false);
      setPaymentError(true);
    })
  };

  const pay = (reference) => {
    const planCheckout = new WidgetCheckout({
      currency: "COP",
      amountInCents: plan.amountInCents,
      reference: reference,
      optional:"cursos",
      publicKey: api.WOMPI_KEY,
      redirectUrl: `${api.FRONT_URL}/pago-finalizado`, // Opcional
      customerData: { // Opcional
        email:`${user.email}`,
        fullName: `${user.firstName} ${user.lastName}`,
        phoneNumber: `${user.whatsApp}`,
        phoneNumberPrefix: `+${user.countryCode}`,
        legalId: `${user.idCard}`,
        legalIdType: 'CC'
      }
    });
    planCheckout.open((result) => {
      const transaction = result.transaction;
      const data = {
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
          name:plan.type,
          idCard:user.idCard
      }
      setShowLoadingSecond(true);
      axios.post(`${api.API_URL_LARAVEL}/inscription/course/store`, data).then(res=>{
        if(res.data.status){
          history.push({
            pathname: "/pago-finalizado",
            search: `?id=${result.transaction.id}`,
            state: transaction,
          });
        }
      }).catch(error=>{
        console.log(error.response)
      }).finally(res=>{
        setShowLoadingSecond(false);
      })
      return
      // paymentService
      //   .createTransaction({
      //     transactionId: transaction.id,
      //     amountInCents: transaction.amountInCents,
      //     reference: transaction.reference,
      //     customerEmail: transaction.customerEmail,
      //     currency: transaction.currency,
      //     paymentMethodType: transaction.paymentMethodType,
      //     redirectUrl: transaction.redirectUrl,
      //     status: transaction.status,
      //     statusMessage: transaction.statusMessage,
      //     createdAt: transaction.createdAt,
      //     name:plan.type,
      //   })
      //   .then();
      // history.push({
      //   pathname: "/pago-finalizado",
      //   search: `?id=${result.transaction.id}`,
      //   state: transaction,
      // });
    });
  };

  const next = () => {
    if(stepsList.length > currentStep){
      setCurrentStep(currentStep + 1)
    }
  };

  const back = () => {
    reset();
    if(currentStep > 0){
      setCurrentStep(currentStep - 1)
    }
    
  };

  const onSubmit = (data) => {
    setShowLoading(true);
    if (user.found == -1) {
      paymentService
        .getUserInfo(data)
        .then((res) => {
          setUser({ ...res.data.result, ...user, found: 1 });
          setShowLoading(false);
        })
        .catch(() => {
          setUser({ ...user, found: 0 });
          setShowLoading(false);
        });
    } else {
      if (data.idCard == null || data.idCard == "" || data.idCard == 0) {
        setUser({ ...user, found: -2 });
        return setShowLoading(false);
      }

      inscriptionService
        .getByIdCardFromUser(data.idCard)
        .then((res) => {
          setUser({ ...user, ...res.data.result, found: 1 });
          setShowLoading(false);
        })
        .catch(() => {
          setUser({ ...user, found: -1, localIdCard: data.idCard });
          setShowLoading(false);
        });
    }
  };

  const updateUser = () => {
    setShowLoading(true);
    inscriptionService
      .updateFromUser({ ...user, idCard: user.localIdCard })
      .then(() => {
        setShowLoading(false);
        next();
      })
      .catch(() => {
        setTimeout(() => {
          setUser({ ...user, updated: 2 });
          setShowLoading(false);
        }, 3000);
      });
  };

  const stepsAnimation = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    hidden2: { x: "100%" },
  };

  return (
    <div className="payment-steps">
      <Steps currentStep={currentStep} stepsList={stepsList} />

      {stepsList.length - currentStep > 0 && (
        <h5 className="payment-steps__post-data">
          Estas a solo {stepsList.length - currentStep}{" "}
          {stepsList.length - currentStep <= 1 ? "paso" : "pasos"} de prepararte
          en Cursos TOC
        </h5>
      )}

      <div className="payment-steps__selected-plan">
        <div className="payment-steps__selected-plan__data">
          <p>
            Pago Seleccionado <br />
            <b>{plan.type}</b> <br />
            {plan.amountInCents == 13990000 ? "" :"Un único pago"}
          </p>
          <p>${[
                    (plan.amountInCents/100).toString().slice(0, (plan.amountInCents/100).toString().length - 3),
                    ".",
                    (plan.amountInCents/100).toString().slice((plan.amountInCents/100).toString().length - 3),
                  ].join("")} COP</p>
        </div>
      </div>

      <div className="payment-steps__contents">
        <motion.div
          initial={`${currentStep != 2 ? "hidden" : "visible"}`}
          animate={`${currentStep != 2 ? "hidden" : "visible"}`}
          variants={stepsAnimation}
          className="payment-steps__contents__content"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={(e) => (e.keyCode === 13 ? e.preventDefault() : null)}
          >
            <h5>Datos básicos</h5>
            <i className="material-icons left">warning</i>{" "}
            {user.found != -1 ? (
              <>
                <p>
                  Ingresa la cédula con el que te inscribiste a nuestro curso de
                  Cursos TOC.
                </p>
                <div className="input-field">
                  <input
                    id="idCard"
                    type="number"
                    name="idCard"
                    ref={register()}
                  />
                  <label htmlFor="idCard">Cédula</label>
                </div>
              </>
            ) : (
              <>
                <p>
                  Ingresa los datos con el que te inscribiste a nuestro curso de
                  Cursos TOC.
                </p>
                <div className="input-field">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    ref={register()}
                  />
                  <label htmlFor="email">Correo</label>
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
              </>
            )}
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
            currentStep == 3
              ? "visible"
              : currentStep == 4
              ? "hidden"
              : "hidden2"
          }`}
          variants={stepsAnimation}
          className="payment-steps__contents__content"
        >
          {showLoading ? (
            <div className="payment-steps__contents__content__loading">
              <img src={LoadingIcon} alt="" />
              {user.updated == 0 ? (
                <p>Obteniendo datos...</p>
              ) : (
                <p>Acutalizando usuario...</p>
              )}
            </div>
          ) : user.found > 0 && user.updated == 0 ? (
            <div className="payment-steps__contents__content__your-data">
              <i className="material-icons center">person_pin</i>
              <h5>¿Estos son tus datos?</h5>
              <p>
                <b>Cédula:</b> {user.idCard}
              </p>
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
                  onClick={() =>
                    user.idCard != 0 ? next() : setUser({ ...user, updated: 1 })
                  }
                >
                  <i className="material-icons right">chevron_right</i>Sí soy yo
                </button>
              </div>
            </div>
          ) : (
            <div className="payment-steps__contents__content__your-data">
              {user.updated == 1 ? (
                <>
                  <i className="material-icons center">person_pin</i>
                  <h5>Actualizar usuario</h5>
                  <p>
                    Necesitamos actualizar tu usuario de Cursos TOC para
                    identificarte mejor.
                  </p>
                  <p>Agregaremos la cédula {user.localIdCard} en tu perfil.</p>
                </>
              ) : user.updated == 2 ? (
                <>
                  <i className="material-icons center">person_pin</i>
                  <h5>Error de actualización</h5>
                  <p>
                    Hubo un error actualizando <br /> los datos de tu usuario.
                  </p>
                  <p>
                    Haz click en "Aceptar" para intentarlo una vez más <br /> si
                    el error persiste escribenos al{" "}
                    <a
                      href="https://wa.link/96ys70"
                      target="__blank"
                      rel="noopener"
                    >
                      Whatsapp
                    </a>
                  </p>
                </>
              ) : user.found == 0 ? (
                <>
                  <i className="material-icons center">error</i>
                  <h5>Error obteniendo usuario</h5>
                  <p>
                   Regístrate aquí:
                  </p>
                  {/* <p>
                    No se pudo obtener el usuario <br /> con el correo y el
                    whatsApp ingresado.
                  </p>
                  <p>
                    Si no te has registrado aún, registrate haciendo <br />{" "}
                    click <a href="/iniciar">aquí</a> y prueba una semana del curso TOC Base
                    gratis.
                  </p> */}
                  <Join/>
                </>
              ) : (
                <>
                  <i className="material-icons center">error</i>
                  <h5>Error obteniendo usuario</h5>
                  <p>
                    No se pudo obtener el usuario <br /> con la cédula
                    ingresada.
                  </p>
                  {user.found == -1 ? (
                    <p>
                      Haz click en "Volver a intentar" <br /> para obtener los
                      datos con tu correo y tu whatsapp.
                    </p>
                  ) : (
                    <p>Asegurese de ingresar una cédula valida.</p>
                  )}
                </>
              )}
              {user.updated == 0 ? (
                <button
                  className="waves-effect waves-light btn"
                  type="button"
                  onClick={() => back()}
                >
                  <i className="material-icons left">chevron_left</i>Volver a
                  intentar
                </button>
              ) : (
                <button
                  className="waves-effect waves-light btn"
                  type="button"
                  onClick={() => updateUser()}
                >
                  Aceptar<i className="material-icons rigth">check</i>
                </button>
              )}
            </div>
          )}
        </motion.div>
        <motion.div
          initial={"hidden2"}
          animate={`${currentStep == 4 ? "visible" : "hidden2"}`}
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
          ) : showLoadingSecond ? (
            <div className="payment-steps__contents__content__loading">
              <img src={LoadingIcon} alt="" />
              <p>Estamos terminando de completar el pago....</p>
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

export default PaymentSteps;
