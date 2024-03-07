import React from "react";
import like from "./../../assets/Like2.svg";
import company from "./../../assets/Avatar.svg";
import location from "./../../assets/location.svg";
import "./newCard.css";

function NewCard() {
  return (
    <div>
      <div className="full-current-card">
        <div className="current-card__text">
          <div className="full-current-card__top">
            <div className="full-current-card__top__company">
              <img src={company} alt="Компания" />
              <h4>BeHance</h4>
            </div>
            <div className="full-current-card__top__action">
              <img src={like} alt="Избранное" />
              <button className="full-current-card__top__button-respond">
                Откликнуться
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="current-card__info_title">UI/UX дизайнер</p>
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

export default NewCard;
