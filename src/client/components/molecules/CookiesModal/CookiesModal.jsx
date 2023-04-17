import React, { useEffect, useState } from "react";
import "./CookiesModal.scss";
import { motion } from "framer-motion";

const CookiesModal = () => {
  const [cookiesShowed, setCookiesShowed] = useState(true);
  const [showCookies, setShowCookies] = useState(!cookiesShowed);

  useEffect(() => {
    let cookiesFlag =
      localStorage.getItem("cookiesShowed") == null ? false : true;
    setTimeout(() => {
      setCookiesShowed(cookiesFlag);
      setShowCookies(true);
    }, 1000);
  });

  const acceptCookies = () => {
    setShowCookies(false);
    localStorage.setItem("cookiesShowed", true);

    setTimeout(() => {
      setCookiesShowed(true);
    }, 1500);
  };

  const cookiesAnimation = {
    hidden: { y: "200%" },
    visible: { y: -0 },
  };

  return (
    <>
      {!cookiesShowed && (
        <motion.div
          initial={`${showCookies ? "hidden" : "visible"}`}
          animate={`${!showCookies ? "hidden" : "visible"}`}
          variants={cookiesAnimation}
          className="cookies-modal z-depth-2"
        >
          <p>
            Utilizamos sus datos para analizar y personalizar nuestro contenido
            y anuncios durante su navegación en nuestra plataforma y en
            servicios de terceros asociados. Al navegar por el sitio, authoriza
            a Cursos TOC a recopilar dicha información y utilizarla para estos
            fines. Si tiene alguna pregunta, visite nuestra Política de
            privacidad .
          </p>
          <button className="waves-effect btn white" onClick={acceptCookies}>
            entiendo y acepto
          </button>
        </motion.div>
      )}
    </>
  );
};

export default CookiesModal;
