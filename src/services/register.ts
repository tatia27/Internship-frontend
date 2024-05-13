import axios from "axios";
import { type CompanyForm } from "../components/registration/registrationCompany/registrationCompany";
import { type InternForm } from "../components/registration/registrationIntern/registrationIntern";

export const registerService = {
  registerCompany: (form: CompanyForm) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/v1/company/`, form);
  },
  registerIntern: (form: InternForm) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/v1/intern/`, form);
  },
};
