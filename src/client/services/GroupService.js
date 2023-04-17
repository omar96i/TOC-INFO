import HttpService from "./httpService";
import { api } from "../common/enviroment";

export default class GroupService {
  httpService = new HttpService();

  getAll = () => {
    return this.httpService.get(
      `${api.WEB_LAYER_URL}${api.GROUP_URL}/GetAllGroups`
    );
  };

  getGroupInfo = () => {
    return this.httpService.get(
      `${api.WEB_LAYER_URL}${api.GROUP_URL}/GetGroupInfo`
    );
  };

  updateStatus = (id, status) => {
    return this.httpService.put(
      `${api.WEB_LAYER_URL}${api.GROUP_URL}/UpdateGroupStatus?id=${id}&input=${status}`
    );
  };

  deleteGroup = (id) => {
    return this.httpService.delete(
      `${api.WEB_LAYER_URL}${api.GROUP_URL}/DeleteGroup?id=${id}`
    );
  };
}
