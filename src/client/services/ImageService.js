import HttpService from "./httpService";
import { api } from "../common/enviroment";

export default class ImageService {
  httpService = new HttpService();

  create = (name, data) => {
    return this.httpService.post(
      `${api.WEB_LAYER_URL}${api.IMAGE_URL}/CreateImage?name=${name}`,
      data
    );
  };

  delete = (fileName) => {
    return this.httpService.delete(
      `${api.WEB_LAYER_URL}${api.IMAGE_URL}/DeleteImage?fileName=${fileName}`
    );
  };

  multipleDelete = (fileNames) => {
    return this.httpService.all(
      fileNames.map((fileName) => this.delete(fileName))
    );
  };
}
