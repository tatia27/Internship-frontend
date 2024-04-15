import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import { useContext } from "react";
import like from "./../../../assets/icons/like.svg";
import "./actionForIntern.css";

function ActionForIntern() {
  const { isAuth } = useContext(UserContext);
  let navigate = useNavigate();
  return (
    <div className="full-current-card__top__action">
      <img src={like} alt="Избранное" />
      <button
        className="full-current-card__top__button-respond"
        onClick={() => {
          if (!isAuth) {
            navigate("/login");
          }
        }}
      >
        Откликнуться
      </button>
    </div>
  );
}

export default ActionForIntern;
