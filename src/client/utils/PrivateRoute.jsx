import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthService from "../services/AuthService";

const PrivateRoute = ({ component: Component, ...props }) => {
  let authService = new AuthService();

  return (
    <Route
      {...props}
      render={(props) => {
        if (authService.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
