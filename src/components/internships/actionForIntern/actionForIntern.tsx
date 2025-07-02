import { useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../../context/userContext";
import { type IInternship } from "../../filter/filter/filter";
import { internshipService } from "../../../services/internship";
import { FavoritesContext } from "../../../context/favoritesContext";
import { ApplyButton } from "../../applyButton/applyButton";
import Favorites from "../../favorites/favorites";
import s from "./actionForIntern.module.scss";

export const ActionForIntern = (props: IInternship) => {
  const { user } = useContext(UserContext);
  const { setFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    async function loadFavorites() {
      if (user?.id) {
        try {
          const response = await internshipService.getFavoritesInternships(
            user.id
          );

          if (setFavorites) {
            setFavorites(response.data);
          }
        } catch {
          toast.error("Упс, что-то пошло не так...");
        }
      }
    }
    loadFavorites();
  }, [setFavorites, user?.id]);

  return (
    <div className={s.action}>
      <Favorites item={props} />
      <ApplyButton id={props._id.toString()} />
    </div>
  );
};
