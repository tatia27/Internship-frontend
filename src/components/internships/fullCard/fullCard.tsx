import like from "./../../../assets/icons/like.svg";
import companyLogo from "../../../assets/icons/companyLogo.svg";
import location from "./../../../assets/icons/location.svg";
import "./fullCard.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { Internship } from "../internship/internship";

function FullCard(props: Internship) {
  const { isAuth } = useContext(UserContext);
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/internships/${props._id}`);
  };

  return (
    <div className="user-profiles__card" onClick={handleClick}>
      <div className="full-current-card">
        <div className="current-card__text">
          <div className="full-current-card__top">
            <div className="full-current-card__top__company">
              <img src={companyLogo} alt="Компания" />
              <h4>{props.company}</h4>
            </div>
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
          </div>
        </div>
        <div>
          <p className="current-card__info__title">{props.title}</p>
          <div className="locatio">
            <img src={location} alt="Местоположение" />
            <span>Таганрог</span>
          </div>
          <div className="current-card__info">
            <div className="current-card__info__item">
              <span>
                {props.salary !== null ? "Оплачиваемая" : "Неоплачиваемая"}
              </span>
            </div>
            <div className="current-card__info__item">
              <span>
                {props.typeOfEmployment === "Full"
                  ? "Полный день"
                  : "Неполный день"}
              </span>
            </div>
            <div className="current-card__info__item">
              <span>
                {props.schedule === "Office" ? "В офиссе" : "Удалённо"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullCard;
