import React from "react";
import like from "./../../assets/like.svg";
import company from "./../../assets/Group.svg";
import location from "./../../assets/location.svg";
import "./card.css";

function Card() {
  return (
    <div className="current-card">
      <div className="current-card__text">
        <div className="current-card__top">
          <div className="current-card__top__logo">
            <img src={company} alt="Компания" />
            <div className="mgm">
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
          <div className="hhh">
            <p className="current-card__info_title">UI/UX дизайнер</p>
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

        <div className="current-card__button">
          <button className="button-respond">Откликнуться</button>
          <button className="button-more">Подробнее</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
