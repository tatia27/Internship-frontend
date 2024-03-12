import React from "react";
import currentCompany from "./../../assets/CurrentCompany.svg";
import like from "./../../assets/like.svg";
import company from "./../../assets/Avatar.svg";
import location from "./../../assets/location.svg";
import "./fullCard.css";
import { useNavigate } from "react-router-dom";

function FullCard() {
  let navigate = useNavigate();
  return (
    <div className="user-profiles__card">
      <div className="full-current-card">
        <div className="current-card__text">
          <div className="full-current-card__top">
            <div className="full-current-card__top__company">
              <img src={company} alt="Компания" />
              <h4>BeHance</h4>
            </div>
            <div className="full-current-card__top__action">
              <img src={like} alt="Избранное" />
              <button
                className="full-current-card__top__button-respond"
                onClick={() => navigate("/login")}
              >
                Откликнуться
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="current-card__info__title">UI/UX дизайнер</p>
          <div className="locatio">
            <img src={location} alt="Локация" />
            <span>Таганрог</span>
          </div>
          <div className="current-card__info">
            <div className="current-card__info__item">
              <span>Оплачиваеамая</span>
            </div>
            <div className="current-card__info__item">
              <span>Полный день</span>
            </div>
            <div className="current-card__info__item">
              <span>В офисе</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullCard;
