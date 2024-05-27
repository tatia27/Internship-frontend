import { IUpdateUser } from "../components/profile/editingInternInfo/editingInternInfo";
import { type Cv } from "../components/resume/resume";
import { axiosInstance } from "./axiosInstance";

export const internService = {
  getIntern: (id: string) => {
    const token = localStorage.getItem("token");

    return axiosInstance.get(`/v1/intern/${id}/one`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
  },

  updateIntern: (id: string, userInfo: IUpdateUser) => {
    const token = localStorage.getItem("token");

    return axiosInstance.patch(`/v1/intern/${id}/update-intern`, userInfo, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
  },

  createResume: (id: string, resume: Cv) => {
    const token = localStorage.getItem("token");

    return axiosInstance.put(`/v1/intern/${id}/resume`, resume, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
  },

  getFavoritesInternship: (id: string) => {
    const token = localStorage.getItem("token");

    return axiosInstance.get(`/v1/intern/${id}/favorites`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
  },

  addToFavorites: (internshipId: string, id: string) => {
    const token = localStorage.getItem("token");

    return axiosInstance.patch(
      `/v1/intern/${internshipId}/add-to-favorites`,
      { id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
  },

  removeFromFavorites: (internshipId: string, id: string) => {
    const token = localStorage.getItem("token");

    return axiosInstance.patch(
      `/v1/intern/${internshipId}/remove-from-favorites`,
      { id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
  },
};
