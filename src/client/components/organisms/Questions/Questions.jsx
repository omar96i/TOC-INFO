import React, { useEffect, useState } from "react";
import "./Questions.scss";
import CustomHr from "../../atoms/CustomHr/CustomHr";
const M =
  typeof window !== "undefined"
    ? require("materialize-css/dist/js/materialize.min.js")
    : null;
const Questions = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems, {});
  });

  return (
    <div className="questions">
      <h1>Preguntas frecuentes</h1>
      <ul className="collapsible popout">
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿Cuál es el objetivo del Curso TOC?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Preparar el examen de residencia o especializaciones médicas con
              la mejor técnica de preparación de exámenes.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">¿Qué Significa TOC?</div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Técnica, Objetivo y Constancia. El objetivo es claro (pasar el
              examen de residencia), a veces tenemos la constancia, pero no
              sabemos con qué técnica estudiar. En el curso TOC ya tenemos
              resuelto esto, anímate.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿Cuánto es el valor del curso TOC?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              El curso tiene un valor de $139.900 (IVA incluido) mensuales y la duración es de
              seis meses. Si pagas el curso completo al iniciar, te hacemos un
              descuento del 10%
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿Tienen algún tipo de descuento?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Por supuesto.  Si pagas el curso completo al iniciar, te hacemos
              un descuento del 10% así no pagas $720.000 sino $539.900.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">¿Cuánto dura el curso TOC?</div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>4 meses.</span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿Cuántos temas de estudio manejan en Cursos TOC?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Tenemos experiencia en este tipo de exámenes, por eso hemos
              depurado los  125 temas que más se repiten en este tipo de
              pruebas.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿Cuáles son los temas que estudiamos en CURSOS TOC?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Los temas son clínicos, ginecología y obstetricia, cirugía,
              medicina interna, pediatría, trauma. Como te contamos
              anteriormente son temas seleccionados que hacen parte de los 125
              temas más preguntados en los exámenes de residencia.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿Cuál es la ventaja que Cursos TOC tiene  sobre otros cursos?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Que nuestra metodología tiene resultados comprobados, es una
              técnica de estudio novedosa  y además estamos seguros que es el
              precio más económico de mercado.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿El Curso TOC es virtual o presencial?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              El curso es 100% virtual, no tienes que desplazarte a ningún lado,
              lo puedes realizar desde tu casa, tu trabajo, una biblioteca,
              conectado a tu computadora o a tu dispositivo celular.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿Cuál es el horario del curso?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Al ser un curso de modalidad virtual no manejamos horarios, la
              hora de estudio la eliges tu de acuerdo a tu comodidad.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            Escuché que manejan puntajes y ranking, ¿Cuál es el objetivo de eso?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Lo utilizamos como método de motivación, así estarás compitiendo
              en un grupo de estudio por las mejores calificaciones. De acuerdo
              a tus resultados, irás acumulando  puntos que te irán situando en
              las diferentes posiciones de nuestro Ranking.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            Si tienen un Ranking…¿Quiere decir que tienen un premio?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              ¡Claro que si! y eso es lo mejor :). Cada 6 semanas realizamos un
              corte y la persona que lleve el mejor puntaje gana un mes gratis
              del curso. En ese momento se reinician todos los puntajes.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿Qué pasa si por algún motivo debo retirarme del curso?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Si no puedes continuar por algún motivo, simplemente te retiras
              sin ningún costo adicional y puedes retomar cuando desees.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿Cuál es la mejor técnica para preparar el examen de residencia?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Sin duda, la mejor técnica  es hacer preguntas tipo examen todos
              los días.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿Cuántas preguntas resolvemos en el curso?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Semanalmente 50; Cada 6 semanas hay simulacros diarios con 25
              preguntas. Total de preguntas resueltas en el curso: 1.875
              preguntas
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿Qué es lo que generalmente preguntan en los exámenes?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Las 3 cosas que más preguntan son:  1. ¿cuál es el diagnóstico del
              caso planteado?2. ¿Cuál es el examen o imagen de elección?3. ¿Cuál
              es el manejo o tratamiento más adecuado?Por eso al estudiar un
              tema te debes centrar en estos tres elementos.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿Cuántas veces puedo resolver los exámenes diariamente?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Todas las veces que quieras y se tomará en cuenta la calificación
              más alta.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿Dónde se resuelven los exámenes?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Los exámenes se responden por medio de la aplicación “Socrative
              Student” desde tu celular o desde un computador.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿Qué se hace en la semana de repaso?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Cada cinco semanas de estudio, realizamos una semana de repaso
              general, donde cada día deberás resolver un simulacro de 20
              preguntas y el fin de semana uno de 25 preguntas.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿Cuánto tiempo debo estudiar a la semana?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Es más importante cómo estudiar, que cuánto tiempo estudiar. Lo
              más recomendado es que estudies todos los días un poco, y no dejar
              para estudiar un solo día todo lo de la semana. En el curso TOC
              todos los días estudiamos un tema por medio de un resumen o
              AbstracTOC y resolvemos un examen de 5 preguntas de lunes a
              viernes, el fin de semana se realiza un examen acumulativo (ver
              metodología). 6-8 horas de dedicación semanal como mínimo.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">¿Cuándo inicia el curso?</div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Los Cursos inician todos los lunes, con un grupo de estudio mínimo
              de 10 personas.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿Si vivo fuera de Colombia puedo realizar el curso TOC?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Claro que si, el curso lo puedes realizar desde cualquier parte
              del mundo, lo único que necesitas es acceso a internet.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿Qué requisitos técnicos debe tener mi computador o celular para
            realizar el curso?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Simplemente acceso a internet y descargar la aplicación “Socrative
              Student” que dicho sea de paso es gratuita.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">¿Cómo es el método de pago?</div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Trabajamos con la pasarela de pagos PAYU, así que puedes pagar a
              través del PSE, o con tarjeta de crédito, incluso en efectivo en
              los puntos de pago authorizados. El pago lo haces desde nuestra
              página web haciendo clic aquí.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿Qué es eso de la Gamificación?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Es una metodología de motivación tomada de los juegos (game), en
              la cual apareces en un ranking de puntajes para ir compitiendo con
              los demás integrantes de tu grupo de estudio.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header" itemScope itemType="https://schema.org/Question" itemProp="name">
            ¿Cómo es el final o cierre del curso?
          </div>
          <div className="collapsible-body" itemProp="suggestedAnswer acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <span>
              Al culminar el estudio y repaso de los 125 temas, se realizan
              exámenes de simulacros para que te des cuenta de lo mucho que has
              aprendido y cómo tu cerebro ha aprendido a resolver exámenes.
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Questions;
