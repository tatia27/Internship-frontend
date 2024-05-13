import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import { toast } from "react-toastify";
import { type IInternship } from "../../filter/filter/filter";
import axios, { AxiosError } from "axios";
import like from "./../../../assets/icons/like.svg";
import { ReactComponent as LikeIcon } from "./../../../assets/icons/like.svg";
import { internshipService } from "../../../services/internship";
import { FavoritesContext } from "../../../context/favoritesContext";
import "./actionForIntern.css";
import cn from "classnames";

function ActionForIntern(props: IInternship) {
  const { user } = useContext(UserContext);
  const { setFavorites } = useContext(FavoritesContext);
  const [isApplied, setIsApplied] = useState(false);
  // TODO: add Favorites
  // const [favorites, setFavorites] = useState<string[]>([]);
  // const [isParticipant, setIsParticipant] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadFavorites() {
      if (user?.id) {
        const response = await internshipService.getFavoritesInternships(
          user.id
        );

        if (setFavorites) {
          setFavorites(response.data);
        }
      }
    }
    loadFavorites();
  }, [setFavorites, user?.id]);

  const applyForInternship = async (internshipId: string) => {
    try {
      if (user?.id) {
        await internshipService.applyForInternship(internshipId, user?.id);
      }

      setIsApplied(true);
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

  const favoriteIconOnClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();

    if (!localStorage.getItem("token")) {
      navigate("/login");
    }

    addToFavorite(props._id.toString());
  };

  const isParticipant =
    Boolean(user && (props.participants || []).includes(user.id)) || isApplied;

  return (
    <div className="full-current-card__top__action">
      <LikeIcon onClick={favoriteIconOnClick} />
      <button
        className={cn(
          isParticipant && "full-current-card__top__button-applied",
          "full-current-card__top__button-respond"
        )}
        onClick={(event) => {
          event.stopPropagation();
          if (isParticipant) {
            return;
          }
          if (!user) {
            navigate("/login");
          }
          applyForInternship(props._id.toString());
        }}
      >
        {isParticipant ? "Заявка подана" : "Откликнуться"}
      </button>
    </div>
  );
}

export default ActionForIntern;
