import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CompanyContext } from "../../../context/companyContext";
import currentCompany from "./../../../assets/icons/currentCompany.svg";
import FullCard from "../../internships/fullCard/fullCard";
import { Internship } from "../../internships/internship/internship";
import axios, { AxiosError } from "axios";
import "./profileCompany.css";

function ProfileCompany() {
  let navigate = useNavigate();
  const { id } = useParams();
  const { company, setCompany } = useContext(CompanyContext);
  const [activeInternships, setActiveInternships] = useState<Internship[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/v1/company/${id}`)
      .then((response) => {
        setCompany({
          name: response.data.name,
          description: response.data.description,
        });
      })
      .catch((error) => {
        if ((error as AxiosError).response?.status === 404) {
          navigate('/profile-company/error');
        }
      });
  }, [company, id, setCompany]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/v1/internships/${id}/active`)
      .then((response) => {
        setActiveInternships(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [activeInternships, id]);

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
              onClick={() => navigate(`/profileCompany/${id}/company-info`)}
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

// const logout = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//   e.preventDefault();
//   try {
//     const { data } = await axios.get("http://localhost:8000/v1/auth/logout", {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       withCredentials: true,
//     });
//     localStorage.clear();
//     navigate("/");
//   } catch (error) {
//     toast.error("Пользователь не был авторизован", {
//       position: "bottom-right",
//     });
//   }
// };
