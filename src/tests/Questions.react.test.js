// Search.react.test.js
import React from "react";
import Questions from "../client/components/organisms/Questions/Questions";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
const spyScrollTo = jest.fn();
Object.defineProperty(global.window, "scrollTo", { value: spyScrollTo });
test("rendering a component that uses useLocation", () => {
  const history = createMemoryHistory();
  const text = "¿Cuál es el objetivo del Curso TOC?";
  const route = "/preguntas";
  history.push(route);
  render(
    <Router history={history}>
      <Questions />
    </Router>
  );

  expect(screen.getByText(text)).toBeInTheDocument();
  // expect(BlogService).toHaveBeenCalledTimes(1);
  // if(process.env.NODE_ENV === "development"){
  //   const url="https://localhost:5000/api/services/app/Blog/GetAllPost"
  //   expect(axios.get).toHaveBeenCalledWith(url);
  // }else{
  //   const url="https://back.cursostoc.com/api/services/app/Blog/GetAllPost"
  //   expect(axios.get).toHaveBeenCalledWith(url);
  // }
  
});
it("calls window.scrollTo", () => {
  expect(spyScrollTo).toBeTruthy();
});