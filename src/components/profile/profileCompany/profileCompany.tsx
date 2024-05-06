import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CompanyContext } from "../../../context/companyContext";
import currentCompany from "./../../../assets/images/student.png";
import FullCard from "../../internships/fullCard/fullCard";
import { type IInternship } from "../../filter/filter/filter";
import axios, { AxiosError } from "axios";
import { UserContext } from "../../../context/userContext";
import "./profileCompany.css";

function ProfileCompany() {
  let navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const { company, setCompany } = useContext(CompanyContext);

  const [activeInternships, setActiveInternships] = useState<IInternship[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    axios
      .get(`${process.env.REACT_APP_API_URL}/v1/company/${user?.id}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCompany({
          name: response.data.name,
          description: response.data.description,
        });
      })
      .catch((error) => {
        if ((error as AxiosError).response?.status === 404) {
          navigate("/companies/error");
        }
      });
  }, [id, navigate, setCompany, user?.id]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/v1/internships/${user?.id}/active`)
      .then((response) => {
        setActiveInternships(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [activeInternships, user?.id]);

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
              return <FullCard key={item._id.toString()} {...item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCompany;
