import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import like from "./../../../assets/icons/likeCard.svg";
import company from "./../../../assets/icons/logoSmall.svg";
import location from "./../../../assets/icons/location.svg";
import { UserContext } from "../../../context/userContext";
import { type IInternship } from "../../filter/filter/filter";
import "./card.css";

function Card({ id }: { id: string }) {
  let navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [internship, setInternship] = useState<IInternship>();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/v1/internships/${id}`)
      .then((response) => {
        setInternship(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleClick = () => {
    navigate(`/internships/${id}`);
  };

  const applyForInternship = async (internshipId: string) => {
    try {
      const token = localStorage.getItem("token");

      await axios.patch(
        `${process.env.REACT_APP_API_URL}/v1/internships/${internshipId}/apply`,
        { id: user?.id },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      if ((error as AxiosError).response?.status === 400) {
        toast.error("Заявка уже подана");
      } else if ((error as AxiosError).response?.status === 401) {
        toast.error("Авторизуйтесь в приложении");
      } else {
        toast.error("Упс, что-то пошло не так");
      }
    }
  };

  const addToFavorite = async (internshipId: string) => {
    try {
      const token = localStorage.getItem("token");

      await axios.patch(
        `${process.env.REACT_APP_API_URL}/v1/intern/${internshipId}/add-to-favorites`,
        { id: user?.id },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      if ((error as AxiosError).response?.status === 400) {
        toast.error("Стажировка уже добавлена в избранное");
      } else if ((error as AxiosError).response?.status === 401) {
        toast.error("Авторизуйтесь в приложении");
      } else {
        toast.error("Упс, что-то пошло не так");
      }
    }
  };

  // const removeFromFavorites = async (internshipId: string) => {
  //   const token = localStorage.getItem("token");

  //   await axios.patch(
  //     `${process.env.REACT_APP_API_URL}/v1/intern/${internshipId}/remove-from-favorites`,
  //     { id: user?.id },
  //     {
  //       withCredentials: true,
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  // };

  return (
    <div className="current-card">
      <div className="current-card__text">
        <div className="current-card__top">
          <div className="current-card__top__logo">
            <img src={company} alt="Компания" />
            <div className="current-card__top__logo__comapny">
              <h4>{internship?.company}</h4>
              <div className="location">
                <img src={location} alt="Локация" />
                <span>Таганрог</span>
              </div>
            </div>
          </div>
          <img
            src={like}
            alt="Избранное"
            onClick={() => {
              if (!localStorage.getItem("token")) {
                navigate("/login");
              }
              addToFavorite(id);
            }}
          />
        </div>
        <div>
          <div className="card-middle">
            <p className="current-card__info_title">{internship?.title}</p>
          </div>
          <div className="current-card__info">
            <div className="current-card__info__item-small">
              <span>
                {internship?.salary !== null
                  ? "Оплачиваемая"
                  : "Неоплачиваемая"}
              </span>
            </div>
            <div className="current-card__info__item-small">
              <span>
                {internship?.typeOfEmployment === "Full"
                  ? "Полный день"
                  : "Неполный день"}
              </span>
            </div>
            <div className="current-card__info__item-small">
              <span>
                {internship?.schedule === "Office" ? "В офиссе" : "Удалённо"}
              </span>
            </div>
          </div>
        </div>
        <div className="current-card__button">
          <button
            className="button-respond"
            onClick={(event) => {
              if (!localStorage.getItem("token")) {
                navigate("/login");
              }
              event.stopPropagation();
              applyForInternship(id);
            }}
          >
            Откликнуться
          </button>
          <button className="button-more" onClick={handleClick}>
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
