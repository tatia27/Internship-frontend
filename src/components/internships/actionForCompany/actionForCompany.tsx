import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import { useContext } from "react";
import "./actionForCompany.css";

function ActionForCompany() {
    const { isAuth } = useContext(UserContext);
    let navigate = useNavigate();
  
    return (
      <div className="full-current-card__top__action">
        <button
          className="full-current-card__top__button-respond"
          onClick={(event) => {
            if (!isAuth) {
              event.stopPropagation();
              navigate("/login");
            }
          }}
        >
          Посмотреть участников
        </button>
      </div>
    );
}

export default ActionForCompany;
