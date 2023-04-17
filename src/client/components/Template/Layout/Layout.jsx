import React from "react";
import "./Layout.scss";
import Header from "../../molecules/Header/Header";
import SocialFloat from "../../molecules/SocialFloat/SocialFloat";
import Footer from "../../molecules/Footer/Footer";
import CookiesModal from "../../molecules/CookiesModal/CookiesModal";
import LoadingProvider from "../../../providers/LoadingProvider";
import ModalProvider from "../../../providers/ModalProvider";
import WhatsApp from "../../atoms/WhatsApp/WhatsApp";
import AuthService from "../../../services/AuthService";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
const Layout = ({ noFooter, children }) => {
  let authService = new AuthService();

  return (
    <LoadingProvider>
      <ModalProvider>
        <Header />
        {children}
        {/* {!authService.isAdmin() && <SocialFloat />} */}
        {/* <WhatsApp/> */}
        {!noFooter && <Footer />}
        <CookiesModal />
      </ModalProvider>
    </LoadingProvider>
  );
};

export default Layout;
