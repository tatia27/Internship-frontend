import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CompanyContext } from "../../../context/companyContext";
import currentCompany from "./../../../assets/images/student.png";
import { AxiosError } from "axios";
import { companyService } from "../../../services/company";
import "../profileCompany/profileCompany.css";
import { toast } from "react-toastify";

function ProfileCompanyForIntern() {
  const navigate = useNavigate();
  const { company, setCompany } = useContext(CompanyContext);

  useEffect(() => {
    async function loadCompany() {
      if (company.id) {
        try {
          const response = await companyService.getCompany(company.id);

          setCompany({
            name: response.data.name,
            description: response.data.description,
            id: response.data._id,
          });
        } catch (error) {
          if ((error as AxiosError).response?.status === 404) {
            toast.error("Упс, компания не найдена....");
          }
        }
      }
    }

    loadCompany();
  }, [company.id, navigate, setCompany]);

  return (
    <div className="user-profile">
      <div className="container">
        <div className="company-profiles__info">
          <div>
            <img src={currentCompany} alt="Логотип компании"></img>
          </div>
          <div className="company-profiles__wrapper">
            <div className="company-profiles__company">
              <h2 className="company-profiles__company__title">
                {company?.name}
              </h2>
              <p> {company?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCompanyForIntern;
