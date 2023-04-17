import React, { useEffect, useState } from "react";
import {
  useHistory,
  useLocation,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import "./Header.scss";
// import M from "materialize-css/dist/js/materialize.min.js";
import Logo from "../../../assets/icons/logo.svg";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import CustomButton2 from "../../atoms/CustomButton2/CustomButton2";
import Payments from "../../organisms/Payments/Payments";
const Header = () => {
  const M =
    typeof window !== "undefined"
      ? require("materialize-css/dist/js/materialize.min.js")
      : null;
  const [location, setLocation] = useState(useLocation().pathname);
  const [sidenavInstance, setInstanceSideNav] = useState(null);
  const history = useHistory();
  const options = [
    {
      name: "Inicio",
      route: "/",
      informative: false,
      isExternal: false,
    },
    {
      name: "Metodología",
      route: "/metodologia",
      informative: false,
      isExternal: false,
    },
    {
      name: "Pagos",
      route: "/pagos",
      informative: false,
      isExternal: false,
    },
    {
      name: "Cursos",
      route: "/cursos",
      informative: false,
      isExternal: false,
    },
    {
      name: "Contacto",
      route: "/contacto",
      informative: false,
      isExternal: false,
    },
    {
      name: "Blog",
      route: "/blog?pagina=1",
      informative: false,
      isExternal: false,
    },
  ];

  useEffect(() => {
    let sidenav = document.querySelector("#menu");
    setInstanceSideNav(M.Sidenav.init(sidenav, {}));
  }, []);

  useEffect(() => {
    return history.listen((location) => {
      setLocation(location.pathname);
    });
  }, [history]);

  const go = (route) => {
    setLocation(route);
    sidenavInstance.close();
  };

  return (
    <>
      <div className="navbar-fixed">
        <nav className="navbar">
          <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo" exact={true}>
              <img src={Logo} className="logo" alt="" />
            </NavLink>
            <a href="./" data-target="menu" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <div className="nav-wrapper__content">
              <ul className="left hide-on-med-and-down">
                {options.map(
                  (option) =>
                    option.informative && (
                      <li key={option.name}>
                        {!option.isExternal ? (
                          option.name != "Pagos" ? (
                            <NavLink
                              to={option.route}
                              activeClassName="custom-active"
                              exact={true}
                            >
                              {option.name}
                            </NavLink>
                          ) : (
                            <a href="/pagos#" activeClassName="custom-active">
                              {option.name}
                            </a>
                          )
                        ) : (
                          <a></a>
                        )}
                      </li>
                    )
                )}
              </ul>

              <ul className="new-nav hide-on-med-and-down">
                {options.map(
                  (option) =>
                    !option.informative && (
                      <li key={option.name}>
                        {!option.isExternal ? (
                          option.name != "Pagos" ? (
                            <NavLink
                              to={option.route}
                              activeClassName="custom-active"
                              exact={true}
                            >
                              {option.name}
                            </NavLink>
                          ) : (
                            <NavLink
                            to={option.route}
                            activeClassName="custom-active"
                            exact={true}
                            >
                              {option.name}
                            </NavLink>
                          )
                        ) : (
                          <a></a>
                        )}
                      </li>
                    )
                )}

                <NavLink to='/iniciar'><CustomButton2>Registrarse</CustomButton2></NavLink>
                {/* <CustomButton>Iniciar sesión</CustomButton> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="menu">
        <div>
          <img alt="logo blanco" src={Logo} />
        </div>
        <li>
          <br />
        </li>
        {options.map((option) => (
          <li
            key={option.name}
            className={`${location === option.route ? "active" : ""}`}
            onClick={() => go(option.route)}
          >
            <NavLink to={option.route} exact={true}>
              {option.name}
            </NavLink>
          </li>
        ))}
        <span>
        <NavLink to='/iniciar'><button className="sidenav-btn2">Registrarse</button></NavLink>
        {/* <button className="sidenav-btn1">Iniciar sesión</button> */}
        
        </span>
      </ul>
    </>
  );
};

export default Header;
