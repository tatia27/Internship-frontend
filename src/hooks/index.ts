import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { FavoritesContext } from "../context/favoritesContext";
import { CompanyContext } from "../context/companyContext";

export const useLogout = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const { setFavorites } = useContext(FavoritesContext);
  const { setInternshipId } = useContext(CompanyContext);

  const logout = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
    if (setUser) {
      setUser(null);
    }
    if (setFavorites) {
      setFavorites([]);
    }
    if (setInternshipId) {
      setInternshipId(null);
    }

    navigate("/");
  };
  return logout;
};
