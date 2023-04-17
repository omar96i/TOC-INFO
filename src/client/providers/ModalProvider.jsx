import React, { useState } from "react";
import FormModal, {
  openModal,
} from "../components/molecules/FormModal/FormModal";

export const ModalContext = React.createContext();

function ModalProvider({ children }) {
  const [modalMessage, setModalMessage] = useState({});

  return (
    <ModalContext.Provider
      value={{
        openModal,
        modalMessage,
        setModalMessage,
      }}
    >
      {children}
      <FormModal message={modalMessage} />
    </ModalContext.Provider>
  );
}
export default ModalProvider;
