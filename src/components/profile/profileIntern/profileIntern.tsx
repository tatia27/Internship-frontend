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
import s from "./profileIntern.module.scss";

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
      <div className={s.container}>
        <div className={s.info}>
          <div>
            <img src={iconStudent} alt="Иконка пользователя"></img>
          </div>
          <div className={s.wrapper}>
            <div className="user-profiles__student">
              <div className={s.student__editing}>
                <h2 className={s.student__title}>
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
                  className={s.editing}
                  onClick={navigateToEditPage}
                />
              </div>

              <div className={s.userProfiles}>
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
        <div className={s.skills}>
          <div>
            <button
              className={s.buttonResume}
              onClick={() => navigate(`/intern/profile/resume`)}
            >
              Добавить резюме
            </button>
          </div>
          <div className={s.skillsUser}>
            <h4 className={s.skillsUser__hardSoft}>Hard Skills</h4>
            <p className={s.skillsUser____description}>
              {intern?.cv.hardSkills}
            </p>
          </div>
          <div className={s.skillsUser}>
            <h4 className={s.skillsUser__hardSoft}>Soft Skills</h4>
            <p className={s.skillsUser____description}>
              {intern?.cv.softSkills}
            </p>
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
