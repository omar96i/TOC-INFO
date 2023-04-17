import HttpService from "./httpService";
import { api } from "../common/enviroment";

export default class InscriptionService {
  httpService = new HttpService();

  getAllStates=()=>{
    return this.httpService.get(`https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json`)
  }
  create = (data) => {
    return this.httpService.post(
      `${api.WEB_LAYER_URL}${api.INSCRIPTION_URL}/CreateInscription`,
      data
    );
  };

  getInscriptionsByGroup = (id) => {
    return this.httpService.get(
      `${api.WEB_LAYER_URL}${api.INSCRIPTION_URL}/GetInscriptionsByGroup?groupId=${id}`
    );
  };

  update = (data) => {
    return this.httpService.put(
      `${api.WEB_LAYER_URL}${api.INSCRIPTION_URL}/UpdateInscription`,
      data
    );
  };

  updateFromUser = (data) => {
    return this.httpService.put(
      `${api.WEB_LAYER_URL}${api.INSCRIPTION_URL}/UpdateInscriptionUser`,
      data
    );
  };

  delete = (id) => {
    return this.httpService.delete(
      `${api.WEB_LAYER_URL}${api.INSCRIPTION_URL}/DeleteInscription?id=${id}`
    );
  };

  get = (id, groupId) => {
    return this.httpService.get(
      `${api.WEB_LAYER_URL}${api.INSCRIPTION_URL}/GetInscription?id=${id}&groupId=${groupId}`
    );
  };

  getByIdCard = (idCard) => {
    return this.httpService.get(
      `${api.WEB_LAYER_URL}${api.INSCRIPTION_URL}/GetInscriptionByIdCard?idCard=${idCard}`
    );
  };

  getByIdCardFromUser = (idCard) => {
    return this.httpService.get(
      `${api.WEB_LAYER_URL}${api.INSCRIPTION_URL}/GetInscriptionByIdCardUser?idCard=${idCard}`
    );
  };
}
