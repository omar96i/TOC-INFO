import HttpService from "./httpService";
import { api } from "../common/enviroment";

export default class MetricService {
  httpService = new HttpService();

  getDashInfo = () => {
    return this.httpService.get(
      `${api.WEB_LAYER_URL}${api.METRIC_URL}/GetDashInfo`
    );
  };
}
