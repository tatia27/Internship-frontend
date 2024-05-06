import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import { toast } from "react-toastify";
import { type IInternship } from "../../filter/filter/filter";
import axios, { AxiosError } from "axios";
import like from "./../../../assets/icons/like.svg";
import "./actionForIntern.css";

function ActionForIntern(props: IInternship) {
  const { user } = useContext(UserContext);
  let navigate = useNavigate();

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

  return (
    <div className="full-current-card__top__action">
      <img
        src={like}
        alt="Избранное"
        onClick={(event) => {
          event.stopPropagation();
          if (!localStorage.getItem("token")) {
            navigate("/login");
          }
          addToFavorite(props._id.toString());
        }}
      />
      <button
        className="full-current-card__top__button-respond"
        onClick={(event) => {
          if (!user) {
            navigate("/login");
          }
          event.stopPropagation();
          applyForInternship(props._id.toString());
        }}
      >
        Откликнуться
      </button>
    </div>
  );
}

export default ActionForIntern;
