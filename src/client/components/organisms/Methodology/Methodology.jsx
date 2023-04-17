import React, { useEffect } from "react";
import "./Methodology.scss";
import { Link } from "react-router-dom";
import methodMain1 from "../../../assets/icons/methodMain1.png";
import methodMain2 from "../../../assets/icons/methodMain2.png";
import methodMain3 from "../../../assets/icons/methodMain3.png";
import methodMain4 from "../../../assets/icons/methodMain4.png";
import comillasMoradas from "../../../assets/icons/comillasMoradas.png";
import present from "../../../assets/icons/present.png";
import cell from "../../../assets/icons/wppCellphone.png";
import methodBanner from "../../../assets/images/methodBanner.png";

const Methodology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="methodology">
      <div className="methodology-banner">
        {/* <img src={methodBanner}/> */}
      </div>
      <div className="methodology-content">
        <div className="methodology-content__title">
          <h2>Metodología de estudio TOC</h2>
          <p>
            TOC significa Técnica, Objetivo y Constancia. El objetivo es claro:
            pasar el examen de Residencia o Especialización Médica, quizás
            tengamos la constancia, pero a veces no sabemos con qué técnica
            prepararnos. Es por eso que muchos estudiantes se preguntan ¿por qué
            estudio tanto y me va mal en los exámenes?
          </p>
        </div>
        <div className="methodology-content__steps">
          <div className="methodology-content__steps--text">
            <h3>Pasos de la Metodología</h3>
            <p>
              Como estudiante de Cursos TOC seguirás estos cuatro pasos
              diariamente. Puedes hacerlo en cualquier momento del día desde tu
              celular o computadora.
            </p>
            <ul>
              <li>
                <span>1</span>
                Lee el AbstracTOC sobre un tema específico que enviaremos al
                grupo de Whatsapp.
              </li>

              <li>
                <span>2</span>
                Resuelve el examen con preguntas sobre ese tema en la app
                Socrative Student (descárgala). Así habituamos al cerebro a
                resolver preguntas tipo y además ganas puntos.
              </li>
              <li>
                <span>3</span>
                Resuelve un examen de repaso de los temas vistos en la
                semana. Repasar es fundamental y ganas más puntos.
                <div>
                  <img src={comillasMoradas} alt="comillas moradas" />
                  <span>
                    Nota: En TOC usamos la técnica de estudio “repetición
                    espaciada” por lo cual cada día se resolverán preguntas del
                    tema de hoy y el tema de ayer.
                  </span>
                </div>
              </li>

              <li>
                <span>4</span>
                En la semana 6, harás repasos generales de los temas vistos las 5
                semanas anteriores.
              </li>
            </ul>
          </div>
          <div className="methodology-content__steps--img">
            <div className="methodology-content__steps--img-card">
              <img src={methodMain1} alt="estudiante" />
            </div>
            <div className="methodology-content__steps--img-card">
              <img src={methodMain2} alt="estudiante" />
            </div>
            <div className="methodology-content__steps--img-card">
              <img src={methodMain3} alt="estudiante" />
            </div>
            <div className="methodology-content__steps--img-card">
              <img src={methodMain4} alt="estudiante" />
            </div>
          </div>
        </div>
        <div className="methodology-content__ps">
          <div className="methodology-content__ps--img">
            <img alt="Ten en cuenta" src={present} />
          </div>
          <div className="methodology-content__ps--text">
            <h3>Ten en cuenta</h3>
            <p>
              Los exámenes abren diariamente a las 7 am y cierran a las 2 pm del
              día siguiente, excepto el repaso del fin de semana que abre el
              sábado y cierra el lunes a las 2 pm.
              <br /> <br />
              Debes ingresar a Socrative Student con el número de cédula que
              pusiste en la matrícula.
              <br />
              <br />
              Puedes resolver el examen las veces que quieras.
              <br /> <br />
              Cuando resuelvas cada pregunta inmediatamente recibes la
              retroalimentación de la respuesta.
              <br />
              <br /> Debes pagar mensualmente para continuar en el curso TOC.
            </p>
          </div>
        </div>
        <div className="methodology-content__ps">
          <div className="methodology-content__ps--text">
            <h3>Grupo de whatsapp, rankings y premio TOC</h3>
            <p>
              En el curso TOC formarás parte de un grupo de estudio en WhatsApp,
              en el que diariamente se sube un AbstracTOC, es decir una síntesis
              actualizada de una temática específica de un tema recurrente en
              los exámenes de admisión para Especialidades Médico-Quirúrgicas.
              <br /> <br />
              Con cada examen que resuelves vas ganando puntos y diariamente
              llega al grupo un ranking en el que podrás ver tu posición con
              respecto a los demás estudiantes. Si al final de las 6 semanas del
              corte tienes el puntaje más alto del grupo, recibes un curso complementario gratis.
              <br /> <br /> Al finalizar la sexta semana los puntajes se
              reinician desde cero para renovar la motivación.
            </p>
          </div>
          <div className="methodology-content__ps--img2">
            <img alt="Gupo de whatsapp" src={cell} />
          </div>
        </div>
      </div>
      <div className="methodology-add">
        <h3>Elementos adicionales</h3>
        <span className="methodology-add__content">
          <div id="left">
            <span>
              <span></span>
              <p>
                Tienes la posibilidad de probar la metodología durante 5 días
                totalmente gratis antes de decidir si quieres iniciar el curso
                TOC.
              </p>
            </span>

            <span>
              <span></span>
              <p>
                Te enviaremos información valiosa como: calendarios de
                admisiones de las universidades que ofertan especializaciones
                médico-quirúrgicas y eventos académicos para la actualización en
                temas de la medicina.
              </p>
            </span>
          </div>
          <div id="right">
            <span>
              <span></span>
              <p>
                Sabemos que sostener la constancia requiere apoyo, por eso
                usamos estrategias de motivación durante el curso para que sigas
                preparándote día a día para el examen de residencia médica.
              </p>
            </span>
            <span>
              {" "}
              <span></span>
              <p>
                En nuestra página web puedes pagar fácilmente mes a mes y en
                nuestro blog tenemos artículos de interés para los médicos que
                quieren especializarse.
              </p>
            </span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Methodology;
