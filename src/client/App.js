import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./utils/Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes />
      
    </BrowserRouter>
  );
}

export default App;
