import axios from "axios";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

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
