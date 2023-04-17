import React from "react";
import "./PaymentGModal.scss";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const PaymentGModal = () => {
  let history = useHistory();

  const modalAnimation = {
    hidden: { x: "66%" },
    hover: { x: 25 },
  };

  const handlerOnClick = () => {
    history.push("/pago-guia");
  };

  return (
    <motion.div
      initial="hidden"
      whileHover="hover"
      variants={modalAnimation}
      onClick={() => handlerOnClick()}
      className="paymentg-modal"
    >
      <div className="paymentg-modal__icon"></div>
      <h4>
        ¿Sabes
        <br />
        cómo pagar?
      </h4>
    </motion.div>
  );
};

export default PaymentGModal;
