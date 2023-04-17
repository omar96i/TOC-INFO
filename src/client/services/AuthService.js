import HttpService from "./httpService";
import TokenService from "./TokeService";
import { api } from "../common/enviroment";

export default class AuthService {
  httpService = new HttpService();
  tokenService = new TokenService();

  login = (data) => {
    return this.httpService.post(`${api.TOKEN_AUTH_URL}/Authenticate`, data);
  };

  logout = () => {
    this.tokenService.clearToken();
  };

  isAuthenticated = () => {
    const token = this.tokenService.getToken();
    let expiresAt = token
      ? (this.tokenService.getExpiresAt(token)
          ? this.tokenService.getExpiresAt(token)
          : 0) * 1000
      : 0;
    return new Date().getTime() < expiresAt;
  };

  isAdmin = () => {
    const token = this.tokenService.getToken();
    return token && this.isAuthenticated()
      ? this.tokenService.getAttribute(
          token,
          "https://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ) === "Admin"
      : false;
  };
}
