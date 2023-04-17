import React, { useState } from "react";
import "./Login.scss";
import { useForm } from "react-hook-form";
import Logo from "../../../../assets/icons/logo.svg";
import Input from "../../atoms/Input/Input";
import Loading from "../../atoms/Loading/Loading";
import AuthService from "../../../services/AuthService";
import TokenService from "../../../services/TokeService";

const Login = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });
  let authService = new AuthService();
  let tokenService = new TokenService();
  const [error, setError] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  const onSubmit = (data) => {
    setShowLoading(true);
    data.rememberClient = true;
    authService
      .login(data)
      .then((res) => {
        setError("");
        tokenService.setToken(res.data.result.accessToken);
        window.location = "/";
        setShowLoading(false);
      })
      .catch((error) => {
        setError("Usuario o contraseña incorrecta");
        setShowLoading(false);
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)} className="login__content">
        <img src={Logo} alt="" />
        <Input
          type="text"
          placeholder="Correo"
          name="userNameOrEmailAddress"
          register={register({
            required: true,
          })}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          name="password"
          register={register({
            required: true,
          })}
        />
        <p className="login__content__error-message">
          {errors.email || errors.password
            ? "No puede haber campos vacios"
            : error}
        </p>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Iniciar Sesión
        </button>
      </form>
      {showLoading && <Loading />}
    </div>
  );
};

export default Login;
