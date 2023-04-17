import React from "react";
import "./PaymentGuide.scss";
import CustomHr from "../../atoms/CustomHr/CustomHr";

const PaymentGuide = () => {
  return (
    <div className="payment-guide">
      <CustomHr />
      <div className="payment-guide__content">
        <img
          src="https://blogtoc.s3.amazonaws.com/procedimientopagos.jpg"
          alt=""
        />
        <p>
          Si no puedes visualizar bien esta imagen haz{" "}
          <a
            href="https://blogtoc.s3.amazonaws.com/procedimientopagos.jpg"
            target="_blank"
          >
            click aquí
          </a>
        </p>
      </div>
    </div>
  );
};

export default PaymentGuide;
