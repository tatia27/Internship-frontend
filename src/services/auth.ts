import axios from "axios";
import { AuthorizationTypes } from "../components/authorization/authorization";

export const authService = {
  getAuth: () => {
    const token = localStorage.getItem("token");

    return axios.get(`${process.env.REACT_APP_API_URL}/v1/auth/isAuth`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  login: (formAuth: AuthorizationTypes) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}/v1/auth/login`,
      formAuth
    );
  },
};
