import { InternshipForm } from "../components/internships/addInternship/addInternship";
import { axiosInstance } from "./axiosInstance";

export const internshipService = {
  getFavoritesInternships: (id: string) => {
    const token = localStorage.getItem("token");

    return axiosInstance.get(`/v1/intern/${id}/favorites`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
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
      withCredentials: true,
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
        withCredentials: true,
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
      withCredentials: true,
    });
  },

  getInternsForInternship: (id: string | null) => {
    const token = localStorage.getItem("token");

    return axiosInstance.get(`/v1/internships/${id}/participants`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
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
        withCredentials: true,
      }
    );
  },

  addInternship: (id: string | null, internship: InternshipForm) => {
    const token = localStorage.getItem("token");

    return axiosInstance.post(`/v1/internships/${id}`, internship, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
  },
};
