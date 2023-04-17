import React, { useState, useEffect } from "react";
import "./PaymentResult.scss";
import { useLocation } from "react-router-dom";
import CustomHr from "../../atoms/CustomHr/CustomHr";
import VisaIcon from "../../../assets/icons/banks/visa.png";
import MasterIcon from "../../../assets/icons/banks/mastercard.png";
import AmericaIcon from "../../../assets/icons/banks/america.png";
import NequiIcon from "../../../assets/icons/banks/nequi.png";
import BancolombiaIcon from "../../../assets/icons/banks/bancolombia.jpg";
import PseIcon from "../../../assets/icons/banks/pse.png";
import WompiService from "../../../services/WompiService";
import LogoImage from "../../../assets/images/logo.jpg";
import { jsPDF } from "jspdf";

const PaymentResult = ({ history }) => {
  let location = useLocation();
  let wompiService = new WompiService();
  const [success, setSuccess] = useState(false);
  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    const transaction = location.state;
    console.log(transaction);
    if (!transaction) {
      const idTransaction = location.search
        ?.split("&")
        .find((data, indexData) => {
          let name =
            indexData !== 0 ? data.substring(0, 2) : data.substring(1, 3);
          return name == "id";
        })
        ?.split("=")[1];

      if (!idTransaction) {
        history.replace("/pagos");
        return;
      }

      wompiService
        .getTestInvoce(idTransaction)
        .then((res) => {
          showTransaction(res.data.data);
        })
        .catch(() => {
          history.replace("/pagos");
        });
      return;
    }

    showTransaction(transaction);
  }, []);

  const showTransaction = (transaction) => {
    if (transaction?.status === "APPROVED") {
      const createdAt = new Date(
        transaction.createdAt || transaction.created_at
      );
      setSuccess(true);
      setTransaction({
        currency: transaction.currency,
        amountInCents: transaction.amountInCents || transaction.amount_in_cents,
        createdAt: `${createdAt.getDate()}/${
          createdAt.getMonth() + 1
        }/${createdAt.getFullYear()}`,
        cardData:
          transaction.paymentMethod?.extra.lastFour ||
          transaction.payment_method?.extra.last_four,
        phoneNumber:
          transaction.paymentMethod?.phoneNumber ||
          transaction.payment_method?.phone_number,
        type: transaction.paymentMethodType || transaction.payment_method_type,
        reference: transaction.reference,
      });
    }
  };
  
  const showPaymentMethodData = () => {
    switch (transaction.type) {
      case "CARD":
        return (
          <>
            Datos de tu tarjeta:{" "}
            <br className="payment-result__content__data-jump" />
            <span className="payment-result__content__data-value">
              XXXX XXXX {transaction.cardData}
            </span>
            <span className="type-icon">
              <img src={MasterIcon} alt="" />
              <img src={VisaIcon} alt="" />
              <img src={AmericaIcon} alt="" />
            </span>
          </>
        );

      case "NEQUI":
        return (
          <>
            Datos de tu cuenta:{" "}
            <span className="payment-result__content__data-value">
              {transaction.phoneNumber}
            </span>
            <span className="type-icon">
              <img className="type-icon__medium" src={NequiIcon} alt="" />
            </span>
          </>
        );

      case "BANCOLOMBIA_TRANSFER":
        return (
          <>
            Datos de tu cuenta:{" "}
            <span className="payment-result__content__data-value">
              Bancolombia
            </span>
            <span className="type-icon">
              <img src={BancolombiaIcon} alt="" />
            </span>
          </>
        );

      case "PSE":
        return (
          <>
            Datos de tu cuenta:{" "}
            <span className="payment-result__content__data-value">PSE</span>
            <span className="type-icon">
              <img src={PseIcon} alt="" />
            </span>
          </>
        );
    }
  };

  const downloadPdf = () => {
    let invoice = new jsPDF();
    let paymentMethod;
    let paymentMethodData;
    switch (transaction.type) {
      case "CARD":
        paymentMethod = "Tarjeta";
        paymentMethodData = `XXXX XXXX ${transaction.cardData}`;
        break;

      case "NEQUI":
        paymentMethod = "Nequi";
        paymentMethodData = transaction.data;
        break;

      case "BANCOLOMBIA_TRANSFER":
        paymentMethod = "Bancolombia";
        break;

      case "PSE":
        paymentMethod = "PSE";
        break;

      default:
        paymentMethod = transaction.type;
    }

    let line = 90;

    invoice.addImage(LogoImage, "JPG", 60, 40, 70, 30);

    invoice.setFont("helvetica");
    for (let i = 0; i < transaction.reference.length; i += 20) {
      if (i != 0) {
        invoice.text(128, line, transaction.reference.slice(i, 2 * i));
      } else {
        invoice.text(
          60,
          line,
          `Comprobante número: ${transaction.reference.slice(0, 20)}`
        );
      }

      line += 8;
    }

    invoice.text(
      60,
      line + 10,
      `Total pagado: COP $${transaction.amountInCents / 100}`
    );
    invoice.text(60, line + 20, `Medio de pago: ${paymentMethod}`);
    paymentMethodData
      ? invoice.text(60, line + 30, `Datos de tu cuenta: ${paymentMethodData}`)
      : null;
    invoice.text(
      60,
      paymentMethodData ? line + 40 : line + 30,
      `Fecha de pago: ${transaction.createdAt}`
    );
    invoice.line(60, line + 50, 170, line + 50);
    invoice.setFontSize(11);
    invoice.text(60, line + 55, "Gracias por tu compra en CursosTOC.");
    invoice.text(
      60,
      line + 60,
      "Este comprobante es valida en el transcurso de un mes."
    );

    invoice.save(`comprobante${transaction.reference}`);
  };

  return (
    <div className="payment-result">
      <CustomHr />
      {success ? (
        <>
          <h4>
            <i className="material-icons">check_circle</i> <br />
            El cobro de tu plan{" "}
            {transaction.name}{" "}
            <br /> ha sido exitoso.
          </h4>
          <div className="payment-result__content">
            <p className="payment-result__content__message">
              Gracias por ser parte de <b>Cursos TOC</b>
              <br />
              Estamos validando la información con el banco, pero desde ya
              puedes disfrutar de <b>Cursos TOC</b>. El curso que prepara a los
              Médicos Generales que quieren cumplir el sueño de convertirse en
              Especialistas. Si tienes alguna duda o inconveniente comunícate
              con nosotros al correo <b>contacto@cursostoc.com</b> o al whatsApp{" "}
              <a
                href="https://api.whatsapp.com/send?phone=573216677865"
                target="_blank"
              >
                +57 3216677865
              </a>
            </p>
            <p className="payment-result__content__data">
              Total pagado:{" "}
              <span className="payment-result__content__data-value">
                {`${transaction.currency} $${transaction.amountInCents / 100}`}
              </span>
            </p>
            <p className="payment-result__content__data">
              {showPaymentMethodData()}
            </p>
            <p className="payment-result__content__data">
              Fecha del pago:{" "}
              <span className="payment-result__content__data-value">
                {transaction.createdAt}
              </span>
            </p>
            <p className="payment-result__content__data payment-result__content__data-invoice">
              Comprobante <br />
              <span className="payment-result__content__data-value">
                #{transaction.reference}
              </span>
            </p>
            <button
              className="waves-effect waves-light btn payment-result__content__button"
              type="button"
              onClick={() => downloadPdf()}
            >
              <i className="material-icons left">file_download</i>Descargar
              Comprobante
            </button>
          </div>
        </>
      ) : (
        <>
          <h4 className="error-title">
            <i className="material-icons">error</i> <br />
            El cobro de tu plan básico <br /> Falló.
          </h4>
          <div className="payment-result__content">
            <p className="payment-result__content__message">
              Se ha producido un error con tu pago en <b>Cursos TOC</b>
              <br />
              Por favor comunícate con la entidad emisora de tu tarjeta o
              contáctanos al correo <b>contacto@cursostoc.com</b> o al WhatsApp:{" "}
              <a
                href="https://api.whatsapp.com/send?phone=573216677865"
                target="_blank"
              >
                +57 3216677865
              </a>{" "}
              para ofrecerte otras posibilidades de pago. Te deseamos un feliz
              día de parte del Equipo de Cursos TOC
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentResult;
