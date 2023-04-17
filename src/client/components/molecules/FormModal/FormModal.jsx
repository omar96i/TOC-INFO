import React, { useEffect } from "react";
import "./FormModal.scss";
// import M from "materialize-css/dist/js/materialize.min.js";

var formModalInstance = null;

export var openModal = () => formModalInstance.open();
const M =
  typeof window !== "undefined"
    ? require("materialize-css/dist/js/materialize.min.js")
    : null;

const FormModal = ({ message }) => {
  useEffect(() => {
    let elems = document.querySelector("#formModal");
    formModalInstance = M.Modal.init(elems, {});
    formModalInstance.open().close();
  }, []);

  return (
    <div id="formModal" className="form-modal">
      <div className="modal-content">
        <h4>{message.title}</h4>
        <p>{message.body}</p>
        {message.user &&
          message.user.map((data, index) => {
            return <p key={index}>- {data}</p>;
          })}
      </div>
      <div className="modal-footer">
        {message.actionName1 && (
          <button className="modal-close waves-effect waves-green btn-flat">
            {message.actionName1}
          </button>
        )}
        {message.actionName2 && (
          <button
            className="modal-close waves-effect waves-green btn-flat"
            onClick={message.action}
          >
            {message.actionName2}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormModal;
