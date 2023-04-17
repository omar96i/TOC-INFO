import React, { useEffect, useState, useContext } from "react";
import CoursesService from "../../../services/CoursesService";
import "./PaymentPlan.scss";
import LoadingIcon from "../../../assets/icons/Upload.svg";

const PaymentPlan = ({ title, drop, price, time, postdata, pay, desc }) => {
  const [showLoading, setShowLoading] = useState(true);
  let courseService = new CoursesService();
  const [courses, setCourses] = useState([]);
  const elements = [
    { name: "Curso de medicina interna", id: "2", price: 13990000 },
  ];
  const [course, setCourse] = useState({});
  const [newPrice, setNewPrice] = useState(
    price == 0 ? "" : (price / 100).toString(10)
  );
  useEffect(() => {
    if (title == "Curso complementario") {
      setShowLoading(true);
      courseService
        .getAllCourses()
        .then((res) => {
          setCourses(res.data.result);
          setShowLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setShowLoading(false);
        });
    } else {
      setShowLoading(false);
    }
  }, []);
  const change = (event) => {
    var selected = courses.filter((elem) => elem.id == event.target.value);
    setCourse({
      name: event.target.options[event.target.selectedIndex].text,
      price: selected[0].cost * 100,
    });
    var output = selected[0].cost.toString(10);

    setNewPrice(output);
  };
  return (
    <div
      className={
        title == "Completo"
          ? "plan plan2"
          : title.includes("Curso de")
          ? "plan"
          : "plan"
      }
      itemType="https://schema.org/Product"
    >
      {!showLoading && (
        <>
          <h5 itemProp="name">{title}</h5>
          <span
            className={
              title == "Completo"
                ? "plan-hr plan2-hr"
                : title == "Curso complementario"
                ? "plan-hr plan3-hr"
                : "plan-hr"
            }
          ></span>

          {drop && (
            <select
              onChange={change}
              className="browser-default"
              name="courses"
            >
              <option value="-1">Selecciona un curso</option>
              {courses.length >= 1 &&
                courses.map((item, index) => {
                  var date = new Date(item.endDate);
                  if (date > new Date()) {
                    return (
                      <option key={index} value={item.id}>
                        {item.title}
                      </option>
                    );
                  }
                })}
              {/* {elements.map((item,index)=>{
        return(
          <option key={index} value={item.id}>{item.name}</option>
        )
      })} */}
            </select>
          )}

          <p
            className="plan__price"
            itemProp="offers"
            itemType="https://schema.org/Offer"
            itemScope
          >
            {title == "Completo"
                && <><span className="price">Paga solo</span><br/></>}
            <span className="plan__price__money-sign">$</span>
            <span itemProp="price">
              {newPrice == 0
                ? ""
                : [
                    newPrice.slice(0, newPrice.length - 3),
                    ".",
                    newPrice.slice(newPrice.length - 3),
                  ].join("")}
            </span>{" "}
            COP
            <br />
            <span className="plan__price__time">{time}</span>
          </p>
          {/* <p className="plan__includes">El plan incluye:</p> */}
          {postdata.map((data, index) => (
            (data != "") ? (
              <React.Fragment key={index}>
                <br />
                <span className="plan__includes__postdata">
                  <i className="material-icons">check_circle</i>
                  {data}
                </span>
              </React.Fragment>
            ) : ''
          ))}
          <h4>{desc}</h4>
          {title == "Completo" ? (
            <button
              className="second-button"
              type="button"
              onClick={() => pay("Completo", 45990000)}
            >
              Comprar
            </button>
          ) : title.includes("Base") ? (
            <button
              type="button"
              className="first-button"
              onClick={() => pay("Base", 13990000)}
            >
              Comprar
            </button>
          ) : (
            <button
              type="button"
              className="third-button"
              onClick={() => pay(title, price)}
            >
              Comprar
            </button>
          )}
        </>
      )}
      {showLoading && (
        <img src={LoadingIcon} className="blog-container__loading" alt="" />
      )}
    </div>
  );
};

export default PaymentPlan;
