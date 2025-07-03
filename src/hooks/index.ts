import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { FavoritesContext } from "../context/favoritesContext";
import { CompanyContext } from "../context/companyContext";
import { authService } from "../services/auth";

export const useLogout = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const { setFavorites } = useContext(FavoritesContext);
  const { setInternshipId } = useContext(CompanyContext);

  const logout = async () => {
    if (localStorage.getItem("token")) {
      await authService.logout();
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

export const useToTopPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
