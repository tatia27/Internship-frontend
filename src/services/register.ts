import { axiosInstance } from "../services/axiosInstance";
import { type CompanyForm } from "../components/registration/registrationCompany/registrationCompany";
import { type InternForm } from "../components/registration/registrationIntern/registrationIntern";

export const registerService = {
  registerCompany: (form: CompanyForm) => {
    return axiosInstance.post(`/v1/company/`, form);
  },

  registerIntern: (form: InternForm) => {
    return axiosInstance.post(`/v1/intern/`, form);
  },
};
