import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AxiosError } from "axios";
import iconStudent from "./../../../assets/images/student.png";
import { type Cv } from "../../resume/resume";
import { internService } from "../../../services/intern";
import "./profileInternForCompany.css";
import { toast } from "react-toastify";
import { type IIntern } from "../profileIntern/profileIntern";

function ProfileInternForCompany() {
  const [intern, setIntern] = useState<IIntern>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });

    async function loadIntern() {
      try {
        if (id) {
          const response = await internService.getIntern(id);
          setIntern(response.data);
        }
      } catch (error) {
        if ((error as AxiosError).response?.status === 404) {
          toast.error("Упс, интерн не найден...");
        }
      }
    }

    loadIntern();
  }, [navigate, id]);

  return (
    <div className="user-profile">
      <div className="container">
        <div className="user-profiles__info">
          <div>
            <img src={iconStudent} alt="Иконка пользователя"></img>
          </div>
          <div className="user-profiles__wrapper">
            <div className="user-profiles__student">
              <h2 className="user-profiles__student__title">
                {`${
                  intern?.lastName !== undefined ? intern?.lastName : "Фамилия"
                } ${
                  intern?.firstName !== undefined ? intern?.firstName : "Имя"
                } 
                ${
                  intern?.middleName !== undefined
                    ? intern?.middleName
                    : "Отчество"
                }`}
              </h2>
              <div className="user-profiles__student__person-info">
                <p>
                  Возраст: {intern?.cv.age !== null ? `${intern?.cv.age}` : ""}
                </p>
                <p>Образование: {intern?.cv.levelOfEducation}</p>
                <p>Специализация: {intern?.cv.specialization}</p>
                <p>Местоположение: {intern?.cv.location}</p>
                <p>Email: {intern?.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="user-profile__skills">
          <div className="skills">
            <h4 className="skills__hard-soft">Hard Skills</h4>
            <p className="skills__description">{intern?.cv.hardSkills}</p>
          </div>
          <div className="skills">
            <h4 className="skills__hard-soft">Soft Skills</h4>
            <p className="skills__description">{intern?.cv.softSkills}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInternForCompany;
