import React, { useEffect, useRef } from "react";
import "./SubNavbar.scss";
import SearchInput from "../../atoms/SearchInput/SearchInput";
import {
  months,
  monthsShort,
  days,
  daysShort,
  daysAbbrev,
} from "../../../common/dateLabels";

const SubNavbar = ({ onDate, palceholder, onSearhInput }) => {
  const M =
    typeof window !== "undefined"
      ? require("materialize-css/dist/js/materialize.min.js")
      : null;

  const initialDateRef = useRef();
  const finalDateRef = useRef();

  useEffect(() => {
    let datepicker = document.querySelectorAll(".datepicker");
    M.Datepicker.init(datepicker, {
      format: "dd/mm/yyyy",
      showClearBtn: true,
      i18n: {
        cancel: "Cancelar",
        done: "Aceptar",
        clear: "Borrar",
        months: months,
        monthsShort: monthsShort,
        weekdays: days,
        weekdaysShort: daysShort,
        weekdaysAbbrev: daysAbbrev,
      },
      onClose: () => {
        if (onDate) {
          onDate({
            initialDate: initialDateRef.current.value,
            finalDate: finalDateRef.current.value,
          });
        }
      },
    });
  }, []);

  return (
    <div className="blog-navbar">
      {onDate && (
        <>
          <input
            type="text"
            className="datepicker"
            placeholder="Fecha inicial"
            ref={initialDateRef}
          />
          <input
            type="text"
            className="datepicker"
            placeholder="Fecha final"
            ref={finalDateRef}
          />
        </>
      )}
      {onSearhInput && (
        <SearchInput
          onChange={onSearhInput}
          placeholder={palceholder ? placeholder : "Buscar"}
        />
      )}
    </div>
  );
};

export default SubNavbar;
