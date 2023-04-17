import React, { useEffect, useRef, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  months,
  monthsShort,
  days,
  daysShort,
  daysAbbrev,
} from "../../../common/dateLabels";
import { cirugia } from "../../../common/cursosComplementarios";
import { gineco } from "../../../common/cursosComplementarios";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import imgMedInterna from "../../../assets/images/medicina-interna-grande.jpeg";
import imgAnestesia from "../../../assets/images/cursos-grande.png";
import imgPediatria from "../../../assets/images/pediatria-grande.jpg";
import { LoadingContext } from "../../../providers/LoadingProvider";
import "./CourseDetail.scss";
import CoursesService from "../../../services/CoursesService";

const CourseDetail = () => {
  const axios = require("axios");
  let location = useLocation();
  let coursesService = new CoursesService();
  const EditorJS =
    typeof window !== "undefined" ? require("@editorjs/editorjs") : null;
  const Header =
    typeof window !== "undefined" ? require("@editorjs/header") : null;
  const Paragraph =
    typeof window !== "undefined" ? require("@editorjs/paragraph") : null;
  const Marker =
    typeof window !== "undefined" ? require("@editorjs/marker") : null;
  const Delimiter =
    typeof window !== "undefined" ? require("@editorjs/delimiter") : null;
  const ImageTool =
    typeof window !== "undefined" ? require("@editorjs/image") : null;
  const Embed =
    typeof window !== "undefined" ? require("@editorjs/embed") : null;
  const List = typeof window !== "undefined" ? require("@editorjs/list") : null;
  // const [stateLocation, setStateLocation] = useState(
  //   location.state ? location.state : null
  // );
  const [stateLocation, setStateLocation] = useState(null);
  const [blocks, setBlocks] = useState(null);
  const [id, setId] = useState(location.pathname.split("/")[3]);
  const [editorJs, setEditorJs] = useState({});
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [price, setPrice] = useState(0)
  const [editorReady, setEditorReady] = useState(false);
  const { setShowLoading } = useContext(LoadingContext);
  const [data, setData] = useState({
    date: "10 Enero de 2022 al 10 Febrero de 2022.",
    type: "100% online",
    hour: "Horario flexible.",
    price: "Inversión: $139.900.",
    title: "Pediatría",
    description1: `Sabemos que ${location.pathname
      .split("/")[2]
      .replace(
        "-",
        " "
      )} es una de las especializaciones más demandadas en Colombia  por eso hemos diseñado un curso complementario para esta área.
    ¿Quieres pasar el examen de residencia?  
    `,

    description2: `El curso complementario TOC para ${location.pathname
      .split("/")[2]
      .replace(
        "-",
        " "
      )} estudiarás durante 1 mes, 24 temas de ${location.pathname
      .split("/")[2]
      .replace(
        "-",
        " "
      )} que salen usualmente en los exámenes de admisión de especializaciones médicas. Se incluyen temas como:`,
    postData: [
      "Vacunación",
      "Patología digestiva pediátrica ",
      "Sepsis Neonatal",
      "Infecciones urinarias",
      "Epilepsia en pediatria ",
      "Convulsión febril",
    ],
    postData2: [
      "Historia de la anestesia ",
      "Anatomía de la vía aérea ",
      "RCP AVANZADO ",
      "Analgesia perioperatoria ",
      "Bloqueos para el médico general ",
      "Anestesia raquídea ",
    ],
    postData3: [
      "HTA ",
      "Dislipidemias",
      "Enfermedad renal crónica ",
      "Enfermedad arterial periférica ",
      "Generalidades de los antibióticos ",
      "Infección de piel y tejidos blandos ",
    ],
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log(location.pathname.split("/")[2].replace("-", " "));
    // console.log(location.pathname.split("/")[3]);

    // console.log(stateLocation);

    // if (location.state != undefined) {
    //   setStateLocation(location.state);
    //   setBlocks(location.state.desc);
    //   const editor = new EditorJS({
    //     holder: "editorjsLocked",
    //     readOnly: true,
    //     data: JSON.parse(location.state.desc),
    //     onReady: () => {
    //       setEditorReady(true);
    //     },
    //     tools: {
    //       header: Header,
    //       paragraph: Paragraph,
    //       marker: Marker,
    //       delimiter: Delimiter,
    //       image: ImageTool,
    //       embed: Embed,
    //       list: List,
    //     },
    //   });
    //   setEditorJs(editor);
    // } else {
    setShowLoading(true);
    axios.get(`http://127.0.0.1:8000/api/course/getbyid/${parseInt(id, 10)}`).then(res=>{
      console.log(res.data)
      setShowLoading(false);
      // console.log(res.data.result);
      setStateLocation(res.data.course);
      let date1 = new Date(res.data.course.endDate);
      let date2 = new Date(res.data.course.startDate);
      let price = res.data.course.cost;

      setDateEnd(
        `${date1.getDate()} de ${
          months[date1.getMonth()]
        } de ${date1.getFullYear()}`
      );

      setDateStart(
        `${date2.getDate()} de ${
          months[date2.getMonth()]
        } de ${date2.getFullYear()}`
      );

      setPrice(price);
      setBlocks(res.data.course.description);
      const editor = new EditorJS({
        holder: "editorjsLocked",
        readOnly: true,
        data: JSON.parse(res.data.course.description),
        onReady: () => {
          setEditorReady(true);
        },
        tools: {
          header: Header,
          paragraph: Paragraph,
          marker: Marker,
          delimiter: Delimiter,
          image: ImageTool,
          embed: Embed,
          list: List,
        },
      });
      setEditorJs(editor);
    }).catch(error=>{
      console.log(error.response)
    })
  }, []);

  return (
    <div className="course-detail">
      <div className="course-detail__container">
        <h4>
          Curso complementario{" "}
          {location.pathname.split("/")[2].replace("-", " ")}
        </h4>
        <div className="img">
          <img src={stateLocation ? stateLocation.imageUrl : ""} />
          <div>
            {stateLocation && dateEnd && dateStart && (
              <span>
                <i className="large material-icons">perm_contact_calendar</i>
                {location.pathname.split("/")[2].replace("-", " ").includes("Banco") ? `${dateStart}` : `${dateStart} al ${dateEnd}`}
              </span>
            )}
            <span>
              <i className="large material-icons">laptop</i>100% online
            </span>
            <span>
              <i className="large material-icons">access_time</i>Horario
              flexible.
            </span>
            <span>
              <i className="large material-icons">attach_money</i>Inversión: {price} COP.
            </span>
            {location.pathname.split("/")[2].replace("-", " ").includes("TOC") ? (
              <a
                href="https://checkout.wompi.co/l/5egQYA"
                target="_blank"
              >
                <CustomButton>Inscribirme</CustomButton>
              </a>
            ) : (
              <Link
                to={{
                  pathname: "/iniciar",
                  state: `cursos`,
                }}
              >
                <CustomButton>Inscribirme</CustomButton>
              </Link>
            )}
          </div>
        </div>
        <div className="title">
          {" "}
          <span>Inscripciones abiertas</span>
          <div>Cupos limitados</div>
        </div>
        {location.pathname.split("/")[2].replace("-", " ").includes("TOC") ? (
          <div className="cont">
            {" "}
            <div>
              <p>Accede al Banco de 3000 preguntas de Cursos TOC y entrénate diariamente y en cualquier lugar para pasar el examen de residencia. Cada pregunta tiene retroalimentación inmediata para que repases los conceptos.</p>
            </div>
          </div>
        ) : (location.pathname.split("/")[2].replace("-", " ").includes("Técnicas")) ? 
        (
          <div className="cont">
            {" "}
            <div>
              <p>¿Cansado de estudiar y no ver los resultados que esperas? Este curso te ayudará a desarrollar técnicas y hábitos efectivos de estudio y motivación para que alcances las metas que deseas.</p>
            </div>
          </div>
        ) : (location.pathname.split("/")[2].replace("-", " ").includes("Premédico")) ? 
        (
          <div className="cont">
            {" "}
            <div>
              <p>¿Quieres llegar preparado a tu primer semestre de medicina? El premédico TOC te dará los conocimientos fundamentales para que no te quedes atrás en tu pregrado de medicina. También te ayudaremos a desarrollar técnicas de estudio efectivas para que tengas un buen desempeño en la universidad.</p>
            </div>
          </div>
        ) : (
          <div className="cont">
            {" "}
            <div>
              {data.description1} <br />
              <a
                href="https://cursostoc.com/blog/residencias-medicas-mas-populares-en-colombia"
                target="__blank"
              >
                {" "}
                residencias medicas mas populares en colombia
              </a>
            </div>
            <p>{data.description2}</p>
          </div>
        )}
        
        {/* <div id="editorjsLocked"></div> */}
        {blocks && stateLocation && window && <div id="editorjsLocked"></div>}

        <div className="course-detail__cont">
          {/* {!blocks &&
            !stateLocation &&
            location.pathname.includes("Interna") &&
            data.postData3?.map((item, index) => (
              <span key={index}>
                <i className="large material-icons">check_circle</i>
                {item}
              </span>
            ))}
          {!blocks &&
            !stateLocation &&
            location.pathname.includes("Pediatr") &&
            data.postData?.map((item, index) => (
              <span key={index}>
                <i className="large material-icons">check_circle</i>
                {item}
              </span>
            ))} */}

          <p>
            ¡Próximamente más cursos complementarios, como cirugía general y
            ginecología! Contáctanos al whatsapp y cuéntanos cuál curso TOC
            nuevo te interesaría encontrar. Inscríbete en{" "}
            <Link to="/cursos">www.cursostoc.com/cursos</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
