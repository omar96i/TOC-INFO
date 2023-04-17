import React, { useContext } from "react";
import "./Footer.scss";
import { useLocation, Link } from "react-router-dom";
import whiteLogo from "../../../assets/icons/whiteLogo.svg";
import FacebookIcon from "../../../assets/icons/facebookIcon.svg";
import InstagramIcon from "../../../assets/icons/instagramIcon.svg";
import YoutubeIcon from "../../../assets/icons/youtubeIcon.svg";
import Input from "../../atoms/Input/Input";
import { useForm } from "react-hook-form";
import SubscriptionService from "../../../services/SubscriptionService";
import { LoadingContext } from "../../../providers/LoadingProvider";
import { ModalContext } from "../../../providers/ModalProvider";
const Footer = () => {
  let location = useLocation();
  const { setShowLoading } = useContext(LoadingContext);
  const { openModal, setModalMessage } = useContext(ModalContext);
  let subscriptionService = new SubscriptionService();
  const { register, handleSubmit, reset } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    setShowLoading(true);
    subscriptionService
      .create(data)
      .then(() => {
        setShowLoading(false);
        reset();
      })
      .catch(() => {
        setShowLoading(false);
        setModalMessage({
          title: "Suscripción fallida",
          body: "Hubo un error en suscribirse, intentelo de nuevo",
          actionName1: "Aceptar",
        });
        openModal();
      });
  };

  return (
    <>
      <footer>
        <div>
          <img className="white-logo" src={whiteLogo} alt="" />
          {/* {location.pathname === "/blog" ? (
            <form className="subscribe" onSubmit={handleSubmit(onSubmit)}>
              <p>Suscríbete a nuestro newsletter</p>
              <div className="email-input">
                <Input
                  type="email"
                  register={register({ required: true })}
                  name="email"
                />
                <button
                  className="btn waves-effect waves-light white orange-text text-darken-4"
                  type="submit"
                >
                  enviar
                </button>
              </div>
            </form>
          ) : location.pathname !== "/iniciar" ? (
            <Link className="test-link" to="/iniciar">
              <span>Click para probar</span> <br />5 días gratis
            </Link>
          ) : (
            <Link className="test-link" to="/preguntas">
              <span>¿Tienes dudas?</span> <br />
              Aquí las respondemos
            </Link>
          )} */}
          <div className="contact">
            <p className="contact__title" id="contact__title">Contáctanos</p>
            <div>
              <a
                href="https://www.facebook.com/cursostoc"
                target="__blank"
                rel="noopener"
              >
                <img src={FacebookIcon} alt="" />
              </a>
              <a
                href="https://www.instagram.com/cursostoc/"
                target="__blank"
                rel="noopener"
              >
                <img src={InstagramIcon} alt="" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCzkvAkpE-WTPKqiJRNVJD2g"
                target="__blank"
                rel="noopener"
              >
                <img src={YoutubeIcon} alt="" />
              </a>
            </div>
            <p>
              <i className="material-icons">email</i>contacto@cursostoc.com
            </p>
            <p>
              <i className="material-icons">phone</i>+57 321 6677865
            </p>

          </div>
          <div className="contact">
            <p className="contact__title" id="contact__title">Explora</p>
            <Link to="/metodologia">
              <p>
                Metodología
            </p>
            </Link>
            <Link to="/preguntas">
              <p>
                Preguntas frecuentes
            </p>
            </Link>
            <Link to="/blog?pagina=1">
              <p>
                Blog
            </p>
            </Link>

          </div>
          <div className="contact">
            <p className="contact__title" id="contact__title">Legales</p>
            <Link to="/terminos">
              <p>
                Términos y condiciones
            </p>
            </Link>
            

          </div>
        </div>

        <div className="second-footer">
          <p>
          <b>TOC Education 2021.</b> Prohibida su reproducción no autorizada; los derechos de la obra se entienden registrados a favor de TOC EDUCATION y/o su titular; cualquier imitación será debidamente sancionada por las autoridades pertinentes; Toda copia no autorizada acarreará consecuencias civiles y penales.
          </p>

        </div>
      </footer>
    </>
  );
};

export default Footer;
