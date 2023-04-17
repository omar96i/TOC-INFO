import React, { useEffect, useState, useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import "./Join.scss";
import Input from "../../atoms/Input/Input";
import PhoneCode from "../../atoms/PhoneInput/PhoneInput";
import { LoadingContext } from "../../../providers/LoadingProvider";
import InscriptionService from "../../../services/InscriptionService";
import CoursesService from "../../../services/CoursesService";
import RecaptchaService from "../../../services/RecaptchaService";
import Resizer from "react-image-file-resizer";
import Skeleton from "react-loading-skeleton";
import { ModalContext } from "../../../providers/ModalProvider";
import ReCAPTCHA from "react-google-recaptcha";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { api } from "../../../common/enviroment";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import { deptos } from "../../../common/dptos";
import LogoIcon from "../../../assets/icons/logo.svg";
import { Switch, Route, Redirect, useLocation, Link } from "react-router-dom";
const Join = ({ history }) => {
  const axios = require("axios");
  const { setShowLoading } = useContext(LoadingContext);
  const [showImageMessage, setShowImageMessage] = useState(false);
  const reRef = useRef();
  let location = useLocation();
  const [whatsapp, setWhatsapp] = useState({
    valid: false,
  });
  const [formFull, setFormFull] = useState(false);
  const [loadedVideo, setLoadedVideo] = useState(false);
  const [terms, setTerms] = useState(false);
  const [disable, setDisable] = useState(true);
  const [courses, setCourses] = useState([{ id: 0, title: "Curso TOC BASE" }]);
  const [selectValue, setSelectValue] = useState("-1");
  const [selectCity, setSelectCity] = useState("-1");
  const [selectDepto, setSelectDepto] = useState("-1");
  const [cities, setCities] = useState({});
  const [dataNew, setDataNew] = useState({
    firstName: "",
    lastName: "",
    email: "",
    idCard: "",
  });
  const [freeWeek, setFreeWeek] = useState(false);
  const [isCourse, setIsCourse] = useState(false);
  const [departamentos, setDepartamentos] = useState([]);
  const [selectValueTxt, setSelectValueTxt] = useState("-1");
  let inscriptionService = new InscriptionService();
  let courseService = new CoursesService();
  let recaptchaService = new RecaptchaService();
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const { openModal, setModalMessage } = useContext(ModalContext);
  useEffect(() => {
    if (whatsapp.value === "") {
      setDisable(true);
    }
  }, [whatsapp]);
  useEffect(() => {
    window.scrollTo(0, 0);
    // const script = document.createElement("script");

    // script.src = "https://hcaptcha.com/1/api.js";
    // script.async = true;
    // script.defer = true;

    // document.body.appendChild(script);
    if (location.state) {
      if (location.state == "cursos") {
        setIsCourse(true);
      }
    }
    window.onSubmit = onSubmit;
    courseService
      .getAllCoursesActive()
      .then((res) => {
        setCourses(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });

    let departs = deptos.map((o) => o.departamento);
    setDepartamentos(Array.from(new Set(departs)).sort());
  }, []);

  // function onChange(value) {
  //   setRecaptcha(value);
  //   const data={
  //     response:value,
  //     secret:`${api.RECAPTCHA_S_KEY}`
  //   }
  //   recaptchaService.verify(data).then((res)=>{console.log(res)}).catch((error) => { console.log(error);});
  // }
  const validateFields = (data) => {
    // console.log(data);
    data.city = selectCity + "-" + selectDepto;
    // reRef.current.executeAsync().then((res) => { console.log(res); console.log("aqui") }).catch((error) => { });
    if (
      data.idCard.length < 1 ||
      data.firstName.length < 1 ||
      data.address.length < 1 ||
      data.lastName.length < 1 ||
      data.email.length < 1 ||
      data.password.length < 1
    ) {
      setModalMessage({
        title: "Hubo un problema",
        body: "No pueden haber campos vacios",
        actionName1: "Aceptar",
      });
      openModal();
      return;
    }
    if (data.address.length < 9) {
      setModalMessage({
        title: "Hubo un problema",
        body: "Debes ingresar una dirección válida",
        actionName1: "Aceptar",
      });
      openModal();
      return;
    }
    // if(!recaptcha){
    //   setModalMessage({
    //     title: "Recaptcha",
    //     body: "Verifique el recaptcha ('No soy un robot')",
    //     actionName1: "Aceptar",
    //   });
    //   openModal();
    //   return;
    // }

    if (!/^([0-9])*$/.test(data.idCard)) {
      setModalMessage({
        title: "Hubo un problema",
        body: "Por favor ingresa una cedula válida.",
        actionName1: "Aceptar",
      });
      openModal();
      return;
    }

    if (!/^([0-9])*$/.test(whatsapp.value)) {
      setModalMessage({
        title: "Hubo un problema",
        body: "Debes ingresar un número de celular valido para el país seleccionado, recuerda seleccionar tu país.",
        actionName1: "Aceptar",
      });
      openModal();
      return;
    }

    if (!terms) {
      setModalMessage({
        title: "Hubo un problema",
        body: "Debes aceptar las políticas",
        actionName1: "Aceptar",
      });
      openModal();
      return;
    }

    setModalMessage({
      title: "Confirmar datos",
      body: "¿Estas seguro de iniciar la prueba con estos datos?",
      user: [
        data.idCard,
        data.firstName,
        data.lastName,
        data.email,
        whatsapp.value,
      ],
      actionName1: "Cancelar",
      actionName2: "Aceptar",
      action: () => {
        onSubmitForm(data);
        setFormFull(true);
      },
    });
    openModal();
  };

  const onSubmitForm = (data) => {
    setShowLoading(true);
    data.countryCode = whatsapp.code;
    data.whatsApp = whatsapp.value;

    data.profilePicture = data.profilePicture[0];
    if (!data.profilePicture || data.profilePicture == undefined) {
      PostData(data);
      return;
    }

    if (
      !data.profilePicture ||
      (data.profilePicture.type !== "image/jpeg" &&
        data.profilePicture.type !== "image/png")
    ) {
      setShowLoading(false);
      return;
    }
    delete data.terms;

    Resizer.imageFileResizer(
      data.profilePicture,
      500,
      500,
      data.type,
      60,
      0,
      (image64) => {
        let newData = { ...data, profilePicture: image64 };
        PostData(newData);
      },
      "base64"
    );
  };
  const PostData = (data) => {
    setShowLoading(true);
    let newData = { ...data };
    newData.countryCode = parseInt(newData.countryCode, 10);
    newData.idCard = parseInt(newData.idCard, 10);
    newData.whatsApp = parseInt(newData.whatsApp, 10);
    newData.courseId = parseInt(newData.courseId, 10);
    newData.address = newData.address.toLowerCase();
    newData.lastName = newData.lastName.toLowerCase();
    newData.firstName = newData.firstName.toLowerCase();
    newData.freeWeek = freeWeek;
    var city = selectValueTxt.toLowerCase().split(" ").join("-");
    if (newData.profilePicture == undefined) {
      newData.profilePicture = "";
    }
    axios.post(`${api.API_URL_LARAVEL}/inscription/store`, newData).then(res=>{
      if(res.data.status){
        history.push({
          pathname: `/gracias`,
        });
      }
      else if(!res.data.status){
        history.push({
          pathname: `/dobleregistro`,
        });
      }
      console.log(res.data)
    }).catch(error=>{
      history.push({
        pathname: `/errormatricula`,
      });
      console.log(error.response)
    }).finally(res=>{
      setShowLoading(false);
    })

    return
    inscriptionService
      .create(newData)
      .then((res) => {
        // console.log(res);
        setShowLoading(false);
        if (res.data["success"] === true && selectValue == "0") {
          history.push({
            pathname: `/gracias`,
          });
        } else if (res.data["success"] === true && selectValue != "0") {
          // location.href = `/gracias-${city}`;
          history.push({
            pathname: `/gracias-${city}`,
            state: selectValueTxt.toLowerCase(),
          });
        } else if (res.data["success"] === false && selectValue == "0") {
          history.push({
            pathname: `/errormatricula-curso`,
          });
        } else {
          history.push({
            pathname: `/errormatricula`,
          });
        }
      })
      .catch((error) => {
        setShowLoading(false);
        if (selectValue == "0") {
          switch (error?.response?.data?.error?.code) {
            case 0:
              history.push({
                pathname: `/dobleregistro`,
              });

              break;
            default:
              history.push({
                pathname: `/errormatricula`,
              });
          }
        } else {
          switch (error?.response?.data?.error?.code) {
            case 0:
              history.push({
                pathname: `/dobleregistro-curso`,
              });

              break;
            default:
              history.push({
                pathname: `/errormatricula-curso`,
              });
          }
        }
      });
  };
  function onSubmit(token) {
    handleSubmit(validateFields);
    // console.log(token);
  }
  const handleChangeSelect = (event) => {
    setSelectValueTxt(event.target.options[event.target.selectedIndex].text);
    setSelectValue(parseInt(event.target.value, 10));
  };
  const handleChangeCities = (event) => {
    setSelectCity(event.target.value);
  };
  const handleChangeDeptos = (event) => {
    setSelectDepto(event.target.value);
    setSelectCity("-1");
    let filtered = deptos.filter((e) => e.departamento == event.target.value);
    setCities(filtered.sort());
  };

  const setFree = (e, data) => {
    setFreeWeek(e.target.checked)
  };
  const handleTerms = (e, data) => {
    var verifyEmpty = false;
    Object.values(dataNew).map((e) => (e === "" ? "" : (verifyEmpty = true)));
    if (
      !whatsapp.valid ||
      selectCity === "-1" ||
      selectDepto === "-1" ||
      selectValue === "-1"
    ) {
      verifyEmpty = true;
    }
    if (e.target.checked) {
      setTerms(true);
    } else {
      setTerms(false);
    }
    if (e.target.checked && verifyEmpty) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  return (
    <div className="signup">
      <div className="signup__content">
        <img src={LogoIcon} alt="logo cursos TOC" />
        <br />
        <br />
        {/* {isCourse ? (
          <p className="signup__content-p">Inscríbete a nuestros cursos</p>
        ) : (
          <p className="signup__content-p">
            Inscríbete a una semana de prueba gratis
          </p>
        )} */}

        <form onSubmit={handleSubmit(validateFields)}>
          <div className="body">
            {/* <HCaptcha
              sitekey="0fd4e0b9-fd5d-4201-b2ea-cae0a589155d"
              onVerify={(token,ekey) =>onVerifyCaptcha(token, ekey)}
              size="invisible"
            /> */}
            <Input
              type="text"
              placeholder="Nombres"
              name="firstName"
              register={register()}
              onChange={(e) => {
                setDataNew({ ...dataNew, firstName: e.target.value });
              }}
            />
            <Input
              type="text"
              placeholder="Apellidos"
              name="lastName"
              register={register()}
              onChange={(e) => {
                setDataNew({ ...dataNew, lastName: e.target.value });
              }}
            />
            <Input
              type="text"
              placeholder="Cédula"
              name="idCard"
              register={register()}
              onChange={(event) => {
                event.target.value = event.target.value.replace(/[^0-9]/g, "");
                setDataNew({ ...dataNew, idCard: event.target.value });
              }}
            />
            {/* <Input
              type="text"
              placeholder="Dirección"
              name="address"
              register={register()}
              onChange={(event) => {
                setDataNew({ ...dataNew, address: event.target.value });
              }}
            />
            <label>
              La dirección es utilizada para la facturación electrónica*
            </label> */}
            {/* <Input
              type="text"
              placeholder="Ciudad"
              name="city"
              register={register()}
            /> */}
            {/* <select
              name="depto"
              className="browser-default join-select"
              value={selectDepto}
              ref={register()}
              onChange={(e) => handleChangeDeptos(e)}
            >
              <option value="-1">Seleccione un departamento</option>
              {departamentos.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <select
              name="city"
              className="browser-default join-select"
              value={selectCity}
              ref={register()}
              disabled={selectDepto == "-1" ? true : false}
              onChange={(e) => handleChangeCities(e)}
            >
              <option value="-1">Seleccione una ciudad</option>
              {cities &&
                cities.length > 0 &&
                cities.map((item, index) => {
                  return (
                    <option key={index} value={item.municipio}>
                      {item.municipio}
                    </option>
                  );
                })}
            </select> */}
            <Input
              type="email"
              placeholder="Correo"
              name="email"
              register={register()}
              onChange={(e) => {
                setDataNew({ ...dataNew, email: e.target.value });
              }}
            />
            <Input
              type="password"
              placeholder="Contraseña"
              name="password"
              register={register()}
              onChange={(e) => {
                setDataNew({ ...dataNew, password: e.target.value });
              }}
            />
            <PhoneCode setWhatsapp={(whatsapp) => setWhatsapp(whatsapp)} />
            
            <label className="terms-input accept">
              <input
                type="checkbox"
                className="filled-in"
                name="terms"
                onClick={(e, data) => setFree(e, data)}
              />
              <span>
                Accede a una semana gratis de prueba!
              </span>
            </label>
            <label className="terms-input accept">
              <input
                type="checkbox"
                className="filled-in"
                name="terms"
                onChange={(e, data) => handleTerms(e, data)}
              />
              <span>
                He leído y acepto las{" "}
                <Link to="/terminos">
                  políticas de privacidad, el contrato de clientes y los
                  términos y condiciones.
                </Link>
              </span>
            </label>

            {/* <ReCAPTCHA
            sitekey={api.RECAPTCHA_PUBLIC_KEY}
            size="normal"
            ref={reRef}
            className="recaptcha"
            onChange={onChange}
          /> */}

            {/* <button class="h-captcha" data-sitekey="0fd4e0b9-fd5d-4201-b2ea-cae0a589155d" data-size="invisible" data-callback="onSubmit" type="submit">
              <span>Click para probar</span> <br />5 días gratis
            </button> */}
            <CustomButton type="submit" disabled={disable}>
              <span>Enviar datos</span>
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Join;
