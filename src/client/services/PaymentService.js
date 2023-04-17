import HttpService from "./httpService";
import { api } from "../common/enviroment";

export default class PaymentService {
  httpService = new HttpService();

  getUserInfo = (data) => {
    return this.httpService.get(
      `${api.WEB_LAYER_URL}${api.PAYMENT_URL}/GetUserInfo?Email=${data.email}&WhatsApp=${data.whatsApp}`
    );
  };

  getReference = (data) => {
    return this.httpService.get(
      `${api.WEB_LAYER_URL}${api.PAYMENT_URL}/GetPaymentReference?courseName=${data}`
    );
  };

  createTransaction = (data) => {
    return this.httpService.post(
      `${api.WEB_LAYER_URL}${api.PAYMENT_URL}/CreateTransaction`,
      data
    );
  };

  getByUser = (id) => {
    return this.httpService.get(
      `${api.WEB_LAYER_URL}${api.PAYMENT_URL}/GetPaymentsByUser?userId=${id}`
    );
  };

  getByDate = (initialDate, finalDate) => {
    return this.httpService.get(
      `${api.WEB_LAYER_URL}${api.PAYMENT_URL}/GetPaymentsByDate?${
        initialDate && finalDate
          ? `startDate=${initialDate}&finalDate=${finalDate}`
          : initialDate
          ? `startDate=${initialDate}`
          : finalDate
          ? `finalDate=${finalDate}`
          : ""
      }`
    );
  };
}
