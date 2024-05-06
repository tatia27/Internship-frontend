import axios from "axios";

export const authService = {
  getAuth: () => {
    const token = localStorage.getItem("token");

    return axios.get(`${process.env.REACT_APP_API_URL}/v1/auth/isAuth`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
