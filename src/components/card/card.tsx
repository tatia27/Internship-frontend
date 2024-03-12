import React from "react";
import like from "./../../assets/likeCard.svg";
import company from "./../../assets/Group.svg";
import location from "./../../assets/location.svg";
import "./card.css";
import { useNavigate } from "react-router-dom";

function Card() {
  let navigate = useNavigate();
  return (
    <div className="current-card">
      <div className="current-card__text">
        <div className="current-card__top">
          <div className="current-card__top__logo">
            <img src={company} alt="Компания" />
            <div className="current-card__top__logo__comapny">
              <h4>BeHance</h4>
              <div className="location">
                <img src={location} alt="Локация" />
                <span>Таганрог</span>
              </div>
            </div>
          </div>
          <img src={like} alt="Избранное" />
        </div>

        <div>
          <div className="card-middle">
            <p className="current-card__info_title">UI/UX дизайнер</p>
          </div>
          <div className="current-card__info">
            <div className="current-card__info__item-small">
              <span>Оплачиваеамая</span>
            </div>
            <div className="current-card__info__item-small">
              <span>Полный день</span>
            </div>
            <div className="current-card__info__item-small">
              <span>В офисе</span>
            </div>
          </div>
        </div>

        <div className="current-card__button">
          <button className="button-respond" onClick={() => navigate("/login")}>
            Откликнуться
          </button>
          <button
            className="button-more"
            onClick={() => navigate("/internship")}
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
