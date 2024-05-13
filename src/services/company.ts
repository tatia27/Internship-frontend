import { axiosInstance } from "./axiosInstance";

export const companyService = {
  getCompany: (id: string) => {
    const token = localStorage.getItem("token");

    return axiosInstance.get(`/v1/company/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  updateCompanyInfo: (id: string, company: {}) => {
    const token = localStorage.getItem("token");

    return axiosInstance.patch(`/v1/company/${id}`, company, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
