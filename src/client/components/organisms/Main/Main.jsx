import React, { useEffect, useRef, useState, useContext } from "react";
import "./Main.scss";
import Image2 from "../../../assets/images/img-banner.png";
import Community from "../../../assets/icons/community.png";
import Free from "../../../assets/icons/free.png";
// import Image from 'react-image-webp';
// import {isWebpSupported} from 'react-image-webp/dist/utils';
import comillas from "../../../assets/icons/comillas.png";
import usr1 from "../../../assets/icons/usr1.png";
import AmaliaCoy from "../../../assets/images/AmaliaCoy.jpg";
import method1 from "../../../assets/icons/method1.png";
import method2 from "../../../assets/icons/method2.png";
import method3 from "../../../assets/icons/method3.png";
import method4 from "../../../assets/icons/method4.png";
import method5 from "../../../assets/icons/method5.png";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import SubscriptionService from "../../../services/SubscriptionService";
import { LoadingContext } from "../../../providers/LoadingProvider";
import FacebookIcon from "../../../assets/icons/FacebookIcon.png";
import InstagramIcon from "../../../assets/icons/InstagramIcon.png";
import { ModalContext } from "../../../providers/ModalProvider";
import { Link } from "react-router-dom";
import ItemsCarousel from "react-items-carousel";
import axios from "axios";
const Main = ({ btnClickProp }) => {
  const { setShowLoading } = useContext(LoadingContext);
  const { openModal, setModalMessage } = useContext(ModalContext);
  const contactRef = useRef(null);
  const [fields, setFields] = useState({});
  const [errorVisible, setErrorVisible] = useState({});
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [btnClick, setBtnClick] = useState(btnClickProp);
  let subscriptionService = new SubscriptionService();
  const chevronWidth = 40;
  const M =
    typeof window !== "undefined"
      ? require("materialize-css/dist/js/materialize.min.js")
      : null;
  useEffect(() => {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, {});

    if (location.pathname === "/contacto") {
      contactRef.current.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  });
  const handleInputChange = (event) => {
    if (event.target.name == "terms") {
      setFields({
        ...fields,
        [event.target.name]: event.target.checked,
      });
    } else {
      setFields({
        ...fields,
        [event.target.name]: event.target.value,
      });
    }
  };
  const validateFields = (event) => {
    event.preventDefault();
    if (!fields.nombre || fields.nombre == "") {
      setErrorVisible({ ...fields, nombre: true });
    } else if (!fields.correo || fields.correo == "") {
      setErrorVisible({ ...fields, correo: true, nombre: false });
    } else if (!fields.message || fields.message == "") {
      setErrorVisible({
        ...fields,
        correo: false,
        nombre: false,
        message: true,
      });
    } else if (!fields.terms || fields.terms == "") {
      setErrorVisible({
        ...fields,
        correo: false,
        nombre: false,
        message: false,
        terms: true,
      });
    } else {
      setErrorVisible({
        ...fields,
        correo: false,
        nombre: false,
        message: false,
        terms: false,
      });
      contactForm();
    }
  };
  const contactForm = () => {
    setShowLoading(true);
    let data = {
      name: fields.nombre,
      email: fields.correo,
      message: fields.message,
    };
    axios.post('http://127.0.0.1:8000/api/contact/store', data).then(res=>{
      if (typeof document !== "undefined") {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      }

      setShowLoading(false);
      setModalMessage({
        title: "Contacto exitoso",
        body: "Muy pronto te estaremos contactando",
        actionName1: "Aceptar",
      });
      openModal();
    }).catch(error=>{
      console.log(error.response)
      setShowLoading(false);
      setModalMessage({
        title: "Contacto fallido",
        body: "Hubo un error en suscribirse, intentelo de nuevo",
        actionName1: "Aceptar",
      });
      openModal();
    })
  };
  const handleSwipe = (event) => {
    event.preventDefault();
    setBtnClick(true);
  };
  return (
    <main className="main">
      <div className="main-banner">
        <div className="main-banner__content">
          <div>
            <p className="title">
              Logra tu meta y entra en la especialización médica que tanto
              deseas
            </p>
            <p className="body">
              En TOC Education diseñamos cursos virtuales para que, a través de
              técnicas de estudio efectivas, logres tu meta de ingresar a la
              especialización médica que sueñas.
            </p>
            <Link to="/iniciar">
              <CustomButton>
                Prueba una semana gratis del Curso Base AQUÍ
              </CustomButton>
            </Link>
          </div>
          <div>
            <img alt="imagen banner" src={Image2} />
          </div>
        </div>
      </div>
      <div className="main-method">
        <div className="main-method__ppal">
          <h3>Metodología de los cursos TOC</h3>
          <p>
            En los cursos TOC estudiarás de manera virtual, diversos temas que
            son recurrentes en los exámenes de admisión para Residencia Médica.
            Como es una gran cantidad de información, nos valemos de técnicas de
            estudio que se ha comprobado que son efectivas. Algunos aspectos
            claves de la metodología TOC son:
          </p>
        </div>
        <div className="main-method__content">
          <div className="main-method__content-card">
            <img alt="metodologia 1" src={method1} />
            <h4>Practicar las preguntas tipo.</h4>
            <p>
              Evaluamos el aprendizaje diariamente, a través de preguntas tipo
              de los exámenes de Residencia.
            </p>
          </div>
          <div className="main-method__content-card">
            <img alt="metodologia 2" src={method2} />
            <h4>Mantenernos motivados.</h4>
            <p>
              También diseñamos estrategias para que puedas sostener la
              motivación en los seis meses del curso TOC.
            </p>
          </div>
          <div className="main-method__content-card">
            <img alt="metodologia 3" src={method3} />
            <h4>En cualquier momento del día.</h4>
            <p>
              Puedes estudiar y hacer el examen de cada tema en cualquier
              momento en que tengas el espacio durante el día. Puedes repetir el
              examen varias veces.
            </p>
          </div>
          <div className="main-method__content-card">
            <img alt="metodologia 4" src={method4} />
            <h4>Técnica para recordar más y por más tiempo.</h4>
            <p>
              Usamos la técnica de repetición espaciada, estudiamos un tema hoy,
              lo repasamos mañana, una semana y un mes después. Así aumentamos
              la probabilidad de recordar más y por mayor tiempo.
            </p>
          </div>
          <div className="main-method__content-card">
            <img alt="metodologia 5" src={method5} />
            <h4>Estudiar un poco diariamente. </h4>
            <p>
              Generamos el hábito de estudiar diariamente un tema de medicina,
              en lugar de mucha cantidad de temas en un solo día. El tema te
              llega como un resumen “AbstracTOC”, con lo clave que necesitas
              saber.
            </p>
          </div>
        </div>
        <div className="main-method__community">
          <div>
            <p className="main-method__community-title">¡Formamos comunidad!</p>
            <p className="main-method__community-body">
              La comunicación permanente a través de los grupos de estudio de
              Whatsapp y las redes sociales, nos permite atender tus inquietudes
              rápidamente y facilita la comunicación con otros estudiantes que
              también sueñan con convertirse en Especialistas.
            </p>
            <p className="main-method__community-title">
              Queremos mantenerte informado y preparado.
            </p>
            <p className="main-method__community-body">
              Adicionalmente nos gusta darte información valiosa en este proceso
              de alcanzar la meta de ser especialista: convocatorias de las
              universidades, eventos académicos para médicos, asesorías
              personalizadas para las entrevistas en los procesos de admisión,
              consejos para tomar el examen de residencia.
            </p>
          </div>
          <div>
            <img
              alt="imagen community"
              className="main-method__community-img"
              src={Community}
            />
          </div>
        </div>
      </div>
      <div className="main-banner2">
        <h5>¿Estás listo para hacer parte de la comunidad TOC?</h5>
        <p>
          Nosotros trabajamos día a día para ofrecerte el mejor curso de
          preparación para ser admitido en la Residencia Médica que deseas.
        </p>
        <p>
          Si tienes dudas de nuestro método o servicios te invitamos a visitar{" "}
          <Link to="/preguntas">Preguntas Frecuentes</Link>
        </p>
      </div>
      <div className="main-btnsToCourses">
        <Link to="/iniciar">
          <button id="btn_iniciar">Iniciar el Curso TOC Base</button>
        </Link>
        <br />
        <Link to="/cursos">
          <button id="btn_iniciar">Ver la oferta de cursos</button>
        </Link>
      </div>

      {/* <div className="main-calendarSlider">
        <h3>Agenda TOC</h3>
        <p>
          Conoce cuáles y cuando son los próximos exámenes en las universidades
          en Colombia.
        </p>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={4}
          gutter={5}
          disableSwipe
          leftChevron={
            <button onClick={handleSwipe} className="main-calendarSlider__btn">
              {"<"}
            </button>
          }
          rightChevron={
            <button onClick={handleSwipe} className="main-calendarSlider__btn">
              {">"}
            </button>
          }
          chevronWidth={chevronWidth}
        >
          <Link to="/agenda">
            <div className="main-calendarSlider__card">
              <h4>24</h4>
              <h6>Abril</h6>
              <p>Examen para residencia de la Universidad de Medellín</p>
              <h6>7:30 AM - 10:00 AM</h6>
              <button>Detalles</button>
            </div>
          </Link>
          <Link to="/agenda">
            <div className="main-calendarSlider__card">
              <h4>25</h4>
              <h6>Abril</h6>
              <p>Examen para residencia de la Universidad de Medellín</p>
              <h6>7:30 AM - 10:00 AM</h6>
              <button>Detalles</button>
            </div>
          </Link>
          <Link to="/agenda">
            <div className="main-calendarSlider__card">
              <h4>26</h4>
              <h6>Abril</h6>
              <p>Examen para residencia de la Universidad de Medellín</p>
              <h6>7:30 AM - 10:00 AM</h6>
              <button>Detalles</button>
            </div>
          </Link>
          <Link to="/agenda">
            <div className="main-calendarSlider__card">
              <h4>27</h4>
              <h6>Abril</h6>
              <p>Examen para residencia de la Universidad de Medellín</p>
              <h6>7:30 AM - 10:00 AM</h6>
              <button>Detalles</button>
            </div>
          </Link>
          <Link to="/agenda">
            <div className="main-calendarSlider__card">
              <h4>28</h4>
              <h6>Abril</h6>
              <p>Examen para residencia de la Universidad de Medellín</p>
              <h6>7:30 AM - 10:00 AM</h6>
              <button>Detalles</button>
            </div>
          </Link>
          <Link to="/agenda">
            <div className="main-calendarSlider__card">
              <h4>29</h4>
              <h6>Abril</h6>
              <p>Examen para residencia de la Universidad de Medellín</p>
              <h6>7:30 AM - 10:00 AM</h6>
              <button>Detalles</button>
            </div>
          </Link>
          <Link to="/agenda">
            <div className="main-calendarSlider__card">
              <h4>30</h4>
              <h6>Abril</h6>
              <p>Examen para residencia de la Universidad de Medellín</p>
              <h6>7:30 AM - 10:00 AM</h6>
              <button>Detalles</button>
            </div>
          </Link>
        </ItemsCarousel>
      </div> */}
      <div className="main-free">
        <div className="main-free__text">
          <h3>
            ¡Te ofrecemos una semana de prueba gratis en el curso TOC base!
          </h3>
          <p>
            Para que pruebes y te animes con nuestra metodología TOC, deberás
            registrarte, una vez registrado, te llegará un correo electrónico de
            bienvenida confirmando el comienzo de una semana de prueba gratis.
          </p>
          <h5>¿Cómo funciona la semana de prueba gratis en Cursos TOC?</h5>
          <ul>
            <li>
              <i className="large material-icons">check_circle</i>La semana de
              prueba siempre comienza los lunes, y ese grupo está conformado por
              todos los estudiantes que se inscribieron desde el lunes hasta el
              domingo a las 20 horas.
            </li>
            <li>
              <i className="large material-icons">check_circle</i>El día viernes
              de la semana de prueba, te llegará un correo electrónico
              pidiéndote que confirmes que quieres continuar con el curso y las
              instrucciones para que hagas el pago para el primer mes.
            </li>
            <li>
              <i className="large material-icons">check_circle</i> Recuerda que
              el curso TOC, que te prepara para el examen de admisión a
              Residencia Médica tiene una duración de seis meses y por cada mes
              inviertes $139.900 (IVA incluido) COP (30 USD Aprox.){" "}
              <Link to="/pagos">Ver precios</Link>.
            </li>
          </ul>
          <Link to="/iniciar">
            <CustomButton>Iniciar Curso TOC Base</CustomButton>
          </Link>
          <Link to="/cursos">
            <CustomButton>Ver la oferta de cursos</CustomButton>
          </Link>
        </div>
        <div className="main-free__img">
          <img src={Free} alt="imagen-gratis" />
          {/* <picture>
            <source srcSet="../../../assets/icons/free.webp" type="image/webp" /> 
            <source srcSet={Free} type="image/png" />
            <img src={Free} alt="imagen-gratis" />
          </picture> */}

          {/* <Image src={Free} webp="../../../assets/icons/free.webp" alt="I'm a webp image" /> */}
          {/* {isWebpSupported() ? <img src="../../../assets/icons/free.webp" /> : <img src="../../../assets/icons/free.png" /> } */}
        </div>
      </div>
      <div className="main-opinions">
        <div className="main-opinions__cont">
          <p className="main-opinions__cont__title">
            Experiencias de clientes TOC
          </p>

          <div className="carousel">
            <div
              className="carousel-item main-opinions__cont-card"
              itemProp="comment"
              itemScope
              itemType="http://schema.org/UserComment"
            >
              <img alt="comillas" src={comillas} />
              <h4>Muy bueno el curso</h4>
              <p itemProp="commentText">
                Muy bueno el curso, súper recomendable, yo lo estoy realizando y
                he visto mi progreso, deseo pasar a Anestesiología, en este
                última convocatoria de la UdeA saqué un puntaje muy superior al
                puntaje que había sacado en la convocatoria anterior, esto me
                deja muy satisfecho con el curso porque con 70 puntos he
                aumentado mi rendimiento en este tipo de pruebas y me acerca
                mucho al resultado que necesito para lograr mi meta.
              </p>
              <div className="main-opinions__cont-card--usr">
                <img alt="usr-foto" src={usr1} />
                <span>
                  <h5>Fran Ferley Cosme</h5>
                  <p>Aspirante a la especialización en Anestesiología</p>
                </span>
              </div>
            </div>
            <div
              className="carousel-item main-opinions__cont-card"
              itemScope
              itemProp="comment"
              itemType="http://schema.org/UserComment"
            >
              <img alt="comillas" src={comillas} />
              <h4>Me ha gustado mucho</h4>
              <p itemProp="commentText">
                Me ha gustado mucho el curso TOC , su metodología y constancia
                me ha servido mucho en mi preparación como médico y para los
                exámenes de admisión de posgrado, 100% recomendado. Los
                artículos escritos en el curso son la forma más práctica de
                interiorizar la medicina, los principales tópicos, cortos,
                concisos, digerible y después las preguntas de opción múltiple a
                las cuales se ve enfrentado uno en los exámenes de admisión, el
                mejor método de preparación.
              </p>
              <div className="main-opinions__cont-card--usr">
                <img alt="usr-foto" src={usr1} />
                <span>
                  <h5> Juan Felipe Blanco</h5>
                  <p>Aspirante a la especialización en Cirugía plástica</p>
                </span>
              </div>
            </div>
            <div
              className="carousel-item main-opinions__cont-card"
              itemScope
              itemProp="comment"
              itemType="http://schema.org/UserComment"
            >
              <img alt="comillas" src={comillas} />
              <h4>Tuve un gran éxito</h4>
              <p itemProp="commentText">
                ...Tuve un gran éxito, noté lo importante que fue un
                entrenamiento guiado y adecuado para mi tiempo y mis
                condiciones, sentí la diferencia abismal entre el primer intento
                y éste, la claridad con la que pude contestar muchas de las
                preguntas, la habilidad con la que supe manejar otras cuantas y
                posteriormente la dicha al obtener el resultado es
                indescriptible, por esto les comparto esta experiencia y los
                invito a perseguir sus sueños.
              </p>
              <div className="main-opinions__cont-card--usr">
                <img alt="usr-foto" src={AmaliaCoy} />
                <span>
                  <h5>Amalia Coy</h5>
                  <p>Residente en pediatría UdeA</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="payments" >
          <p className="payments__title">
            Prepárate para el examen de residencia
          </p>
          <div className="payments__content">
            <div className="payments__content__data">
              <p className="payments__content__data__description">
              <i className="material-icons">monetization_on</i> Precios en pesos
              colombianos
            </p>
            <p className="payments__content__data__description">
              <i className="material-icons">security</i> Compra segura
            </p> 
              <p className="payments__content__data__description-small">
                Los pagos de Cursos TOC son procesados por Wompi, una solución
                de Bancolombia. Nunca tendremos acceso a los detalles o
                información de tu tarjeta o cuenta, sólo procesamos la
                información que nos suministra Bancolombia cuando el pago es
                exitoso.
              </p>
              <p>
                <b>Múltiples medios de pago</b>
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
            <PaymentPlan
              title="Base"
              price="139.900 (IVA incluido) COP"
              time="Mes"
              postdata={[
                "Características 1",
                "Características 1",
                "Características 1",
              ]}
              desc="Paga mes a mes durante los 6 meses."
            />
            <PaymentPlan
              title="Completo"
              price="539.900 COP"
              time="Mes"
              postdata={[
                "Características 1",
                "Características 1",
                "Características 1",
              ]}
              desc="Un único pago de $539.900 COP (162 USD aprox.) por los 6 meses."
            />
          </div>
        </div> */}
      </div>
      <div className="main-contact" ref={contactRef}>
        <div className="main-contact__text">
          <h3>Contacto TOC</h3>
          <p>
            Para consultas generales y preguntas sobre los cursos puedes visitar
            nuestra sección de <Link to="/preguntas">Preguntas frecuentes</Link>
            , si tienes otras dudas o desea más información, por favor
            escríbenos.
          </p>

          <a
            className="main-contact__text--link"
            href="mailto:contacto@cursostoc.com"
          >
            <i className="material-icons">email</i>contacto@cursostoc.com
          </a>
          <a className="main-contact__text--link" href="tel:+573216677865">
            <i className="material-icons">phone</i>+57 321 6677865
          </a>
          <a
            href="https://www.facebook.com/cursostoc"
            target="__blank"
            rel="noopener"
            className="main-contact__text--link"
          >
            <img src={FacebookIcon} alt="" />
            /cursostoc
          </a>
          <a
            href="https://www.instagram.com/cursostoc/"
            target="__blank"
            rel="noopener"
            className="main-contact__text--link"
          >
            <img src={InstagramIcon} alt="" />
            @cursostoc
          </a>
        </div>
        <div className="main-contact__form">
          <form if="form-contact" onSubmit={validateFields}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  name="nombre"
                  id="name"
                  type="text"
                  className="validate"
                  onChange={handleInputChange}
                />
                <label className="active" htmlFor="first_name2">
                  Nombre*
                </label>
                <span
                  className={
                    errorVisible.nombre ? "error-warning" : "not-visible"
                  }
                >
                  Debe llenar este campo
                </span>
              </div>
              <div className="input-field col s6">
                <input
                  name="correo"
                  id="email"
                  type="email"
                  className="validate"
                  onChange={handleInputChange}
                />
                <label className="active" htmlFor="mail">
                  Correo*
                </label>
                <span
                  className={
                    errorVisible.correo ? "error-warning" : "not-visible"
                  }
                >
                  Debe llenar este campo
                </span>
              </div>
              <div className="input-field col s6">
                <input
                  name="message"
                  id="message"
                  type="text"
                  className="validate"
                  onChange={handleInputChange}
                />
                <label className="active" htmlFor="message">
                  Mensaje*
                </label>
                <span
                  className={
                    errorVisible.message ? "error-warning" : "not-visible"
                  }
                >
                  Debe llenar este campo
                </span>
              </div>
              <div className="input-field col s6">
                <p>
                  <label>
                    <input
                      type="checkbox"
                      name="terms"
                      onChange={handleInputChange}
                    />
                    <span id="accept-terms">
                      Confirmo que acepto los{" "}
                      <Link to="/terminos">Términos y Condiciones</Link>
                    </span>
                  </label>
                  <br />
                  <span
                    className={
                      errorVisible.terms ? "error-warning" : "not-visible"
                    }
                  >
                    Debe llenar este campo
                  </span>
                </p>
              </div>
              <CustomButton type="submit">Enviar</CustomButton>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Main;
