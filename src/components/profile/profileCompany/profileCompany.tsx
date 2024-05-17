import { useState, useEffect, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CompanyContext } from "../../../context/companyContext";
import currentCompany from "./../../../assets/images/student.png";
import FullCard from "../../internships/fullCard/fullCard";
import { type IInternship } from "../../filter/filter/filter";
import { AxiosError } from "axios";
import { UserContext } from "../../../context/userContext";
import { internshipService } from "../../../services/internship";
import { companyService } from "../../../services/company";
import "./profileCompany.css";

function ProfileCompany() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { company, setCompany } = useContext(CompanyContext);
  const [activeInternships, setActiveInternships] = useState<IInternship[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    async function loadInternships() {
      if (user?.id) {
        debugger;
        const response = await internshipService.getActiveInternships(user?.id);
        setActiveInternships(response.data);
      }
    }

    async function loadCompany() {
      if (user?.id) {
        try {
          const response = await companyService.getCompany(user?.id);
          setCompany({
            name: response.data.name,
            description: response.data.description,
          });
        } catch (error) {
          if ((error as AxiosError).response?.status === 404) {
            navigate("/company/error");
          }
        }
      }
    }
    loadInternships();
    loadCompany();
  }, [navigate, setCompany, user?.id]);

  const handleRemove = useCallback((id: string) => {
    setActiveInternships((prev) => {
      if (prev.length) {
        return prev.filter((it) => it._id !== id);
      }
      return prev;
    });
  }, []);

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
        <div className="company-profiles__active-internhip">
          <div>
            <button
              className="button-resume"
              onClick={() => navigate(`/company/company-info`)}
            >
              Добавить информацию
            </button>
          </div>
          <div>
            <h3 className="company-profiles__active-internhip__title">
              Активные стажировки
            </h3>
          </div>
        </div>
        <div className="company-profiles__active-internhip__active">
          <div>
            {activeInternships.map((item) => {
              return (
                <FullCard
                  key={item._id.toString()}
                  {...item}
                  onRemove={handleRemove}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCompany;
