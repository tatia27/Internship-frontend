import { InternshipForm } from "../components/internships/addInternship/addInternship";
import { axiosInstance } from "./axiosInstance";

export const internshipService = {
  getInternships: (id: string) => {
    const token = localStorage.getItem("token");

    return axiosInstance.get(`/v1/internships/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getFavoritesInternships: (id: string) => {
    const token = localStorage.getItem("token");

    return axiosInstance.get(`/v1/intern/${id}/favorites`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getPopularInternships: () => {
    return axiosInstance.get(`/v1/internships/new-popular`);
  },

  getInternshipsForIntern: (id: string) => {
    const token = localStorage.getItem("token");

    return axiosInstance.get(`/v1/internships/${id}/applications`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getFilteredInternships: (currentPage: number) => {
    const token = localStorage.getItem("token");

    return axiosInstance.get(`/v1/internships?page=${currentPage}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  deleteInternship: (id: string) => {
    const token = localStorage.getItem("token");

    return axiosInstance.patch(
      `/v1/internships/${id}/inactive`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  getInternship: (id: string | undefined) => {
    const token = localStorage.getItem("token");

    return axiosInstance.get(`/v1/internships/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getActiveInternships: (id: string) => {
    const token = localStorage.getItem("token");

    return axiosInstance.get(`/v1/internships/${id}/active`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getInternsForInternship: (id: string | null) => {
    const token = localStorage.getItem("token");

    return axiosInstance.get(`/v1/internships/${id}/participants`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  applyForInternship: (internshipId: string, id: string | null) => {
    const token = localStorage.getItem("token");

    return axiosInstance.patch(
      `/v1/internships/${internshipId}/apply`,
      { id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },

  addInternship: (id: string | null, internship: InternshipForm) => {
    const token = localStorage.getItem("token");

    return axiosInstance.post(`/v1/internships/${id}`, internship, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
