import { type Cv } from "../components/resume/resume";
import { axiosInstance } from "./axiosInstance";

export const internService = {
  getIntern: (id: string) => {
    const token = localStorage.getItem("token");

    return axiosInstance.get(`/v1/intern/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  createResume: (id: string, resume: Cv) => {
    const token = localStorage.getItem("token");

    return axiosInstance.put(`/v1/intern/${id}/resume`, resume, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getFavoritesInternship: (id: string) => {
    const token = localStorage.getItem("token");

    return axiosInstance.get(`/v1/intern/${id}/favorites`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  addToFavorites: (id: string, internshipId: string) => {
    const token = localStorage.getItem("token");

    return axiosInstance.patch(
      `/v1/intern/${internshipId}/add-to-favorites`,
      id,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  removeFromFavorites: (id: string, internshipId: string) => {
    const token = localStorage.getItem("token");

    return axiosInstance.patch(
      `/v1/intern/${internshipId}/add-to-favorites`,
      id,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
};
