import HttpService from "./httpService";
import { api } from "../common/enviroment";

export default class BlogService {
  httpService = new HttpService();

  create = (data) => {
    return this.httpService.post(
      `${api.WEB_LAYER_URL}${api.BLOG_URL}/Create`,
      data
    );
  };

  update = (data) => {
    return this.httpService.put(
      `${api.WEB_LAYER_URL}${api.BLOG_URL}/Update`,
      data
    );
  };

  delete = (id) => {
    return this.httpService.delete(
      `${api.WEB_LAYER_URL}${api.BLOG_URL}/Delete?Id=${id}`
    );
  };

  getAll = (skipCount, maxResultCount = 10) => {
    return this.httpService.get(
      `${api.WEB_LAYER_URL}${api.BLOG_URL}/GetAllPost?SkipCount=${skipCount}&MaxResultCount=${maxResultCount}`
    );
  };

  getByUrlSlug = (urlSlug) => {
    return this.httpService.get(
      `${api.WEB_LAYER_URL}${api.BLOG_URL}/GetByUrlSlug?urlSlug=${urlSlug}`
    );
  };
}
