import HttpService from "./httpService";
import { api } from "../common/enviroment";

export default class SubscriptionService {
  httpService = new HttpService();

  create = (data) => {
    return this.httpService.post(
      `${api.WEB_LAYER_URL}${api.SUBSCRIPTION_URL}/CreateSuscription`,
      data
    );
  };
  createContact = (data) => {
    return this.httpService.post(
      `${api.WEB_LAYER_URL}${api.CONTACT_URL}/CreateContact`,
      data
    );
  };
}
