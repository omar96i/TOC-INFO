import axios from "axios";
import TokenService from "./TokeService";
import { api } from "../common/enviroment";

export default class HttpService {
  tokenService = new TokenService();

  constructor() {
    axios.defaults.baseURL = api.API_URL;

    axios.interceptors.request.use(
      (config) => {
        const token = this.tokenService.getToken();
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  get = axios.get;

  post = axios.post;

  put = axios.put;

  delete = axios.delete;

  all = axios.all;
}
