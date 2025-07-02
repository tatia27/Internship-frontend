import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import iconStudent from "./../../../assets/images/student.png";
import { UserContext } from "../../../context/userContext";
import { type Cv } from "../../resume/resume";
import { FavoritesContext } from "../../../context/favoritesContext";
import { internService } from "../../../services/intern";
import { FavoriteCarousel } from "../../favoriteCarousel/favoriteCarousel";
import editing from "../../../assets/icons/editing.svg";
import { toast } from "react-toastify";
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
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });

    async function loadIntern() {
      try {
        if (user?.id) {
          const response = await internService.getIntern(user?.id);
          setIntern(response.data);
        }
      } catch (error) {
        if ((error as AxiosError).response?.status === 404) {
          toast.info("Упс, интерн не найден....");
        }
      }
    }

    async function loadFavorites() {
      try {
        if (user?.id) {
          const response = await internService.getFavoritesInternship(user?.id);
          if (setFavorites) {
            setFavorites(response.data);
          }
        }
      } catch (error) {
        if ((error as AxiosError).response?.status === 404) {
          toast.error("Упс, стажировки не найдены...");
        }
      }
    }

    loadIntern();
    loadFavorites();
  }, [navigate, setFavorites, user?.id]);

  const navigateToEditPage = () => {
    navigate("/intern/editing");
  };
  return (
    <div className="user-profile">
      <div className="container">
        <div className="user-profiles__info">
          <div>
            <img src={iconStudent} alt="Иконка пользователя"></img>
          </div>
          <div className="user-profiles__wrapper">
            <div className="user-profiles__student">
              <div className="user-profiles__student__editing">
                <h2 className="user-profiles__student__title">
                  {`${
                    intern?.lastName !== undefined
                      ? intern?.lastName
                      : "Фамилия"
                  } ${
                    intern?.firstName !== undefined ? intern?.firstName : "Имя"
                  } 
                ${
                  intern?.middleName !== undefined
                    ? intern?.middleName
                    : "Отчество"
                }`}
                </h2>
                <img
                  src={editing}
                  alt="редактирование"
                  className="editing"
                  onClick={navigateToEditPage}
                />
              </div>

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
        <div className="user-profile__skills-intern">
          <div>
            <button
              className="button-resume"
              onClick={() => navigate(`/intern/profile/resume`)}
            >
              Добавить резюме
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
          <FavoriteCarousel favorites={favorites} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ProfileIntern;
