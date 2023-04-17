import HttpService from "./httpService";
import { api } from "../common/enviroment";

export default class CoursesService {
  httpService = new HttpService();

  create = (data) => {
    return this.httpService.post(
      `${api.WEB_LAYER_URL}${api.COURSE_URL}/CreateCourse`,
      data
    );
  };

  getAllCoursesActive = () => {
    return this.httpService.get(
      `${api.WEB_LAYER_URL}${api.COURSE_URL}/GetAllCoursesActive`
    );
  };
  getAllCourses = () => {
    return this.httpService.get(
      `${api.WEB_LAYER_URL}${api.COURSE_URL}/GetAllCourses`
    );
  };

  getCourseDetail = (id) => {
    return this.httpService.get(
      `${api.WEB_LAYER_URL}${api.COURSE_URL}/GetCourseDetail?id=${id}`
    );
  };

 
}
