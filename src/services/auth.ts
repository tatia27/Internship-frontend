import { AuthorizationTypes } from "../components/authorization/authorization";
import { axiosInstance } from "../services/axiosInstance";

export const authService = {
  getAuth: () => {
    const token = localStorage.getItem("token");

    return axiosInstance.get(`/v1/auth/isAuth`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  login: (formAuth: AuthorizationTypes) => {
    return axiosInstance.post(`/v1/auth/login`, formAuth);
  },

  logout: () => {
    const token = localStorage.getItem("token");

    return axiosInstance.post(
      `/v1/auth/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
  },
};
