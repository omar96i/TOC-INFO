import HttpService from "./httpService";
import TokenService from "./TokeService";
import { api } from "../common/enviroment";

export default class RecaptchaService {
  httpService = new HttpService();
  tokenService = new TokenService();

  verify = (data) => {
    console.log(data);
    return this.httpService.post(`https://www.google.com/recaptcha/api/siteverify`, data);
  };

  
}
