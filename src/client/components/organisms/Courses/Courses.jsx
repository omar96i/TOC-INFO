import React, { useEffect, useRef, useState, useContext } from "react";
import "./Courses.scss";
import cursosPequeno from "../../../assets/images/cursos-pequena.png";
import imgMedInterna from "../../../assets/images/medicina-interna-grande.jpeg";
import {
  months,
  monthsShort,
  days,
  daysShort,
  daysAbbrev,
} from "../../../common/dateLabels";
import cursosGrande from "../../../assets/images/cursos-grande.png";
import BannerImg from "../../../assets/images/cursos-banner-img.png";
import contrato from "../../../assets/icons/contrato1.png";
import semana from "../../../assets/icons/semana1.png";
import saving from "../../../assets/icons/saving.png";
import pc from "../../../assets/icons/pc1.png";
import chica from "../../../assets/images/chica-cursos.png";
import { Link, useLocation } from "react-router-dom";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import CoursesService from "../../../services/CoursesService";
import { LoadingContext } from "../../../providers/LoadingProvider";
const Courses = ({ history }) => {
  const axios = require("axios");
  const coursestRef = useRef(null);
  const [courses, setCourses] = useState([]);
  let coursesService = new CoursesService();
  const { setShowLoading } = useContext(LoadingContext);
  const baseRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowLoading(true);
    axios.get('http://127.0.0.1:8000/api/course/get').then(res=>{
      setShowLoading(false);
      setCourses(res.data.courses);
    }).catch(error=>{
      console.log(error.response)
    })
  }, []);
  const handlePassPage = (e) => {
    e.preventDefault();
    var link = (
      <a
        href="https://cursostoc.com/blog/residencias-medicas-mas-populares-en-colombia"
        target="__blank"
      >
        {" "}
        residencias medicas mas populares en colombia
      </a>
    );
    let data = {
      date: "19 Julio de 2021 al 18 agosto de 2021.",
      type: "100% online",
      hour: "Horario flexible.",
      price: "Inversión: $119.000.",
      title: "Anestesiología",
      description1: `Sabemos que anestesiología es una de las especializaciones más demandadas en Colombia (mira en nuestro blog el artículo ${link}) por eso hemos diseñado un curso complementario para esta área.`,

      description2:
        "El curso complementario TOC para anestesiología estudiarás durante 1 mes, 24 temas de anestesia que salen usualmente en los exámenes de admisión de especializaciones médicas. Se incluyen temas como:",
      postData: [
        "Secuencia de Intubación Rápida",
        "Anestésicos Locales",
        "Bloqueos para el Médico General",
      ],
      img: cursosGrande,
    };
    var dataString = JSON.stringify(data);
    if (typeof window !== "undefined") {
      localStorage.setItem("dataCard", dataString);
    }
    history.push({
      pathname: "/cursos/medicina-interna",
    });
  };
  const handleGoToCourses = () => {
    coursestRef.current.scrollIntoView();
  };
  const handleGoToBase = () => {
    baseRef.current.scrollIntoView();
  };
  return (
    <div className="courses">
      <div className="courses-banner">
        <div className="courses-banner__cont">
          <div className="courses-banner__cont--txt">
            <h3>Cursos </h3>
            <p>
              En TOC te ofrecemos el Curso Base con temas de diversas áreas y
              cursos complementarios que tienen el objetivo de profundizar en
              las áreas en las que buscas especializarte.
            </p>
            <div className="courses-banner__cont--txt-btns">
              <button className="normal" onClick={handleGoToCourses}>
                Ver cursos complementarios
              </button>
              <button className="base" onClick={handleGoToBase}>
                Ver curso TOC base
              </button>
            </div>
          </div>
          <img src={BannerImg} alt="banner img" />
        </div>
      </div>
      <div className="courses-prepare" ref={baseRef}>
        <h4>Curso TOC base</h4>
        <div className="courses-prepare__cont">
          <img src={chica} alt="Chica en portatil" />
          <div className="courses-prepare__cont--txt">
            <h4>Prepárate en 4 meses en casa o desde donde quieras</h4>
            <p>
            En el Curso TOC Base estudiarás durante 4 meses, 80 temas que son
              recurrentes en los exámenes de admisión a residencia o
              especializaciones médico-quirúrgicas. Se incluyen temas de áreas
              diversas como neurología, oftalmología, pediatría, cirugía
              general, gineco-obstetricia, urgencias, dermatología, urología,
              ortopedia, medicina interna, toxicología, etc.
            </p>
          </div>
        </div>
      </div>
      <div className="courses-feature">
        <div className="courses-feature__cont">
          <h4>Características del curso</h4>
          <div className="courses-feature__cont--features">
            <span>
              <img src={contrato} />
              <p>Inscripciones abiertas de manera permanente.</p>
            </span>
            <span>
              <img src={semana} />
              <p>Cada 15 días iniciamos un grupo nuevo del curso base TOC.</p>
            </span>
            <span>
              <img src={saving} />
              <p>
                $139.900 (IVA incluido) mensuales o un único pago de solo
                $459.900 (IVA incluido) si pagas el curso de cuatro meses.
              </p>
            </span>
            <span>
              <img src={pc} />
              <p>
                100% online. Horario flexible. Técnicas de estudio comprobadas.
                Si quieres saber más de la metodología del curso TOC{" "}
                <Link to="/metodologia">clic aquí</Link>.
              </p>
            </span>
          </div>
          <p>
            Si quieres saber más de la metodología del curso TOC{" "}
            <Link to="/metodologia">clic aquí</Link>.
          </p>
          <Link to="/iniciar">
            {" "}
            <CustomButton>Prueba una semana gratis del Curso Base AQUÍ</CustomButton>
          </Link>
        </div>
      </div>
      <div className="courses__cards" ref={coursestRef}>
        <h4>Nuestros cursos complementarios</h4>
        {courses.map((item, index) => {
          var cost = item.cost.toString(10);
          var date = new Date(item.startDate);
        // if(date > new Date()){
          return (
            <div className="courses__cards-card" key={index}>
              
                <Link
                  to={{
                    pathname: `/cursos/${(item.title.includes('Curso de ') ? item.title.split("Curso de ")[1].split(" ").join("-") : item.title.split(" ").join("-"))}/${item.id}`,
                    state: {id:item.id, image:item.imageUrl, desc: item.description, date: `${date.getDate()} de ${
                      months[date.getMonth()]
                    } de ${date.getFullYear()} al ${date.getDate()} de ${
                      date.getMonth()==12?months[0]:months[date.getMonth()+1]
                    } de ${date.getFullYear()}`}, course:item
                  }}
                >
                  {" "}
                  <img src={item.imageUrl} />
                </Link>
              
                <Link
                  to={{
                    pathname:  `/cursos/${(item.title.includes('Curso de ') ? item.title.split("Curso de ")[1].split(" ").join("-") : item.title.split(" ").join("-"))}/${item.id}`,
                    state: {id:item.id, image:item.imageUrl, desc: item.description, date: `${date.getDate()} de ${
                      months[date.getMonth()]
                    } de ${date.getFullYear()} al ${date.getDate()} de ${
                      date.getMonth()==12?months[0]:months[date.getMonth()+1]
                    } de ${date.getFullYear()}`},
                  }}
                >
                  <div className="courses__cards-card--content">
                    <div className="title">
                      {" "}
                      <h4>{item.title}</h4>
                      <span>Inscripciones abiertas</span>
                      <div>Cupos limitados</div>
                    </div>
                    <div className="details">
                      {" "}
                      <span>
                        <i className="large material-icons">
                          perm_contact_calendar
                        </i>
                        {`${date.getDate()} de ${
                          months[date.getMonth()]
                        } de ${date.getFullYear()}`}
                      </span>
                      <span>
                        <i className="large material-icons">laptop</i>100%
                        online
                      </span>
                      <span>
                        <i className="large material-icons">access_time</i>
                        Horario flexible.
                      </span>
                      <span>
                        <i className="large material-icons">attach_money</i>
                        Inversión: {item.cost} COP
                        {/* {cost == 0
                          ? ""
                          : [
                              cost.slice(0, cost.length - 3),
                              ".",
                              cost.slice(cost.length - 3),
                            ].join("")} */}
                      </span>
                    </div>

                    {item.title.includes("Anestes") ? (
                      <p>
                        Sabemos que anestesiología es una de las
                        especializaciones más demandadas en Colombia por eso
                        hemos diseñado un curso complementario para esta área.
                        <br />
                        <br />
                        ¿Quieres pasar el examen de residencia? ¿Quieres ser
                        anestesiólogo?..
                      </p>
                    ) : item.title.includes("Banco") ? (
                      <p>
                      Accede al Banco de 3000 preguntas de Cursos TOC y entrénate diariamente y en cualquier lugar para pasar el examen de residencia. Cada pregunta tiene retroalimentación inmediata para que repases los conceptos.
                      <br />
                      <br />
                      </p>
                    ) : item.title.includes("Técnicas") ? (
                      <p>
                      ¿Cansado de estudiar y no ver los resultados que esperas? Este curso te ayudará a desarrollar técnicas y hábitos efectivos de estudio y motivación para que alcances las metas que deseas.
                      <br />
                      <br />
                      </p>
                    ) : item.title.includes("Premédico") ? (
                      <p>
                      ¿Quieres llegar preparado a tu primer semestre de medicina? El premédico TOC te dará los conocimientos fundamentales para que no te quedes atrás en tu pregrado de medicina. También te ayudaremos a desarrollar técnicas de estudio efectivas para que tengas un buen desempeño en la universidad.
                      <br />
                      <br />
                      </p>
                    ) : (
                      <p>
                        Sabemos que {item.title.split("Curso de")[1]} es una de las
                        especializaciones más demandadas en Colombia por eso
                        hemos diseñado un curso complementario para esta área.
                        <br />
                        <br />
                        ¿Quieres pasar el examen de residencia?...
                      </p>
                    )}

                    <span>Haz clic para conocer más</span>
                  </div>
                </Link>
              
                {item.title.includes("TOC") ? (
                  <a
                    href="https://checkout.wompi.co/l/5egQYA"
                    target="_blank"
                  >
                    <button>Inscribirme</button>
                  </a>
                ) : (
                  <Link
                    to={{
                      pathname: "/iniciar",
                      state: `cursos`,
                    }}
                  >
                    <button>Inscribirme</button>
                  </Link>
                )}
            </div>
          );
        // }
        })}

        <p>
        ¡Próximamente más cursos complementarios, como cirugía general y ginecología! Contáctanos al{" "}
          <a href="https://wa.me/+573216677865">whatsapp</a> y cuéntanos cuál
          curso TOC nuevo te interesaría encontrar. Inscríbete en{" "}
          <Link to="/cursos">www.cursostoc.com/cursos</Link>
        </p>
      </div>
    </div>
  );
};

export default Courses;
