import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import iconStudent from "./../../../assets/images/student.png";
import Favorite from "../../favorite/favorite";
import { UserContext } from "../../../context/userContext";
import { Cv } from "../../resume/resume";
import axios, { AxiosError } from "axios";
import "./profileIntern.css";

interface IIntern {
  firstName: String;
  middleName: String;
  lastName: String;
  email: String;
  role: String;
  description: String;
  favorites: [];
  cv: Cv;
}

function ProfileIntern() {
  const [intern, setIntern] = useState<IIntern>();
  let navigate = useNavigate();
  const { id } = useParams();

  // const { isAuth } = useContext(UserContext);
  // if (!isAuth) {
  //   return navigate("/login");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/v1/intern/${id}`)
      .then((response) => {
        setIntern(response.data);
      })
      .catch((error) => {
        if ((error as AxiosError).response?.status === 404) {
          navigate("/profile-intern/error");
        }
        console.log(error);
      });
  }, []);

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
          <div>
            <button
              className="button-resume"
              onClick={() => navigate(`/profile-intern/${id}/resume`)}
            >
              Загрузить резюме
            </button>
          </div>
          <div className="skills">
            <h4 className="skills__hard-soft">Hard Skills</h4>
          </div>
          <div className="skills">
            <h4 className="skills__hard-soft">Soft Skills</h4>
          </div>
        </div>
        <Favorite></Favorite>
      </div>
    </div>
  );
}

export default ProfileIntern;
