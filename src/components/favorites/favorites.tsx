import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LikeIcon } from "../../assets/icons/like.svg";
import { internshipService } from "../../services/internship";
import { UserContext } from "../../context/userContext";
import { FavoritesContext } from "../../context/favoritesContext";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import cn from "classnames";
import "./favorites.css";
import { internService } from "../../services/intern";

function Favorites({ id }: { id: string }) {
  const { user } = useContext(UserContext);
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(false);
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

  const addToFavorite = async (internshipId: string) => {
    try {
      const token = localStorage.getItem("token");

      // await internService.addToFavorites(internshipId, user?.id);

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
      setIsFavorite(true);
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

  const removeFromFavorites = async (internshipId: string) => {
    // const token = localStorage.getItem("token");
    if (user?.id) {
      await internService.removeFromFavorites(internshipId, user?.id);
    }

    // await axios.patch(
    //   `${process.env.REACT_APP_API_URL}/v1/intern/${internshipId}/remove-from-favorites`,
    //   { id: user?.id },
    //   {
    //     withCredentials: true,
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // );
    setIsFavorite(false);
  };

  const favoriteIconOnClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();

    if (!localStorage.getItem("token")) {
      navigate("/login");
      return;
    }

    if (favorites.includes(id)) {
      removeFromFavorites(id);
    } else {
      addToFavorite(id);
    }
  };

  // debugger;
  const isFavoriteInternship =
    Boolean(user && favorites.includes(id)) || isFavorite;
  // debugger;
  return (
    <>
      <LikeIcon
        onClick={favoriteIconOnClick}
        className={cn({
          "like-icon path": isFavoriteInternship,
          "like-icon-unused path": !isFavoriteInternship,
        })}
      />
    </>
  );
}

export default Favorites;
