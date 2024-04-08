import { useEffect, useState, useContext } from "react";
import like from "./../../../assets/icons/likeCard.svg";
import company from "./../../../assets/icons/companyLogo.svg";
import location from "./../../../assets/icons/location.svg";
import "./card.css";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import { Internship } from "../../filter/filter/filter";
import axios from "axios";

function Card(props: Internship) {
  let navigate = useNavigate();
  const [internships, setInternship] = useState<Internship>();
  const { isAuth } = useContext(UserContext);

  const handleClick = () => {
    navigate(`/internships/${props._id}`);
  };

  return (
    <div className="current-card" onClick={handleClick}>
      <div className="current-card__text">
        <div className="current-card__top">
          <div className="current-card__top__logo">
            <img src={company} alt="Компания" />
            <div className="current-card__top__logo__comapny">
              <h4>{props.company}</h4>
              <div className="location">
                <img src={location} alt="Локация" />
                <span>Таганрог</span>
              </div>
            </div>
          </div>
          <img
            src={like}
            alt="Избранное"
            onClick={() => {
              if (!isAuth) {
                navigate("/login");
              }
            }}
          />
        </div>
        <div>
          <div className="card-middle">
            <p className="current-card__info_title">{props.title}</p>
          </div>
          <div className="current-card__info">
            <div className="current-card__info__item-small">
              <span>
                {props.typeOfInternship === "Paid"
                  ? "Оплачиваемая"
                  : "Неоплачиваемая"}
              </span>
            </div>
            <div className="current-card__info__item-small">
              <span>
                {props.typeOfEmployment === "Full"
                  ? "Полный день"
                  : "Неполный день"}
              </span>
            </div>
            <div className="current-card__info__item-small">
              <span>
                {props.schedule === "Office" ? "В офиссе" : "Удалённо"}
              </span>
            </div>
          </div>
        </div>
        <div className="current-card__button">
          <button className="button-respond" onClick={() => navigate("/login")}>
            Откликнуться
          </button>
          <button
            className="button-more"
            onClick={() => navigate("/internships/")}
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
