import HttpService from "./httpService";
import { api } from "../common/enviroment";

export default class WompiService {
  httpService = new HttpService();

  getTestInvoce = (id) => {
    return this.httpService.get(`${api.WOMPI_URL}/transactions/${id}`);
  };
}
