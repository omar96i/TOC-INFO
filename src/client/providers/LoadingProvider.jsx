import React, { useState, createContext } from "react";
import Loading from "../components/atoms/Loading/Loading";

export const LoadingContext = createContext();

function LoadingProvider({ children }) {
  const [showLoading, setShowLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        showLoading,
        setShowLoading,
      }}
    >
      {children}
      {showLoading && <Loading />}
    </LoadingContext.Provider>
  );
}
export default LoadingProvider;
