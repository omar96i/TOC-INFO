import jwt from "jwt-decode";

export default class TokenService {
  tokenKey = "token";

  getToken = () => {
    return localStorage.getItem(this.tokenKey);
  };

  setToken = (newToken) => {
    localStorage.setItem(this.tokenKey, newToken);
  };

  clearToken = () => {
    localStorage.removeItem(this.tokenKey);
  };

  getAttribute = (token, value) => {
    return jwt(token)[value];
  };

  getExpiresAt = (token) => {
    return this.getAttribute(token, "exp");
  };
}
