import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import iconStudent from "./../../../assets/images/student.png";
import Favorite from "../../favorite/favorite";
import { UserContext } from "../../../context/userContext";
import { Cv } from "../../resume/resume";
import "./profileIntern.css";

export interface IIntern {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  role: string;
  description: string;
  favorites: [];
  cv: Cv;
}

function ProfileIntern() {
  const [intern, setIntern] = useState<IIntern>();
  const [favorites, setFavorites] = useState<string[]>([]);
  const { user } = useContext(UserContext);
  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    if (token) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/v1/intern/${user?.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setIntern(response.data);
        })
        .catch((error) => {
          if ((error as AxiosError).response?.status === 404) {
            navigate("/intern/error");
          }
          console.log(error);
        });

      axios
        .get(
          `${process.env.REACT_APP_API_URL}/v1/intern/${user?.id}/favorites`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setFavorites(response.data.favoriteInternshipIds);
        });
      // .catch((error) => {
      //   if ((error as AxiosError).response?.status === 404) {
      //     navigate("/intern/error");
      //   }
      // });
    }
  }, [navigate, user?.id]);

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
              onClick={() => navigate(`/intern/profile/resume`)}
            >
              Загрузить резюме
            </button>
          </div>
          <div className="skills">
            <h4 className="skills__hard-soft">Hard Skills</h4>
            <p className="skills__description">{intern?.cv.hardSkills}</p>
          </div>
          <div className="skills">
            <h4 className="skills__hard-soft">Soft Skills</h4>
            <p className="skills__description">{intern?.cv.softSkills}</p>
          </div>
        </div>
        {favorites.length !== 0 ? (
          <Favorite favorites={favorites}></Favorite>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ProfileIntern;
