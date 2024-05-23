import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if ((error as AxiosError).response?.status === 401) {
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);

export { axiosInstance };
