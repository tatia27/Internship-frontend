import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

export const useLogout = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const logout = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
    if (setUser) {
      setUser(null);
    }
    navigate("/");
  };
  return logout;
};
