import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import company from "./../../../assets/icons/logoSmall.svg";
import location from "./../../../assets/icons/location.svg";
import { type IInternship } from "../../filter/filter/filter";
import { internshipService } from "../../../services/internship";
import ApplyButton from "../../applyButton/applyButton";
import Favorites from "../../favorites/favorites";
import "./card.css";

type Props = {
  item: IInternship;
};

function Card({ item: internship }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/internships/${internship._id}`);
  };

  return (
    <div className="current-card">
      <div className="current-card__text">
        <div className="current-card__top">
          <div className="current-card__top__logo">
            <img src={company} alt="Компания" />
            <div className="current-card__top__logo__comapny">
              <h4>{internship?.company}</h4>
              <div className="location">
                <img src={location} alt="Локация" />
                <span>Таганрог</span>
              </div>
            </div>
          </div>
          <Favorites item={internship} />
        </div>
        <div>
          <div className="card-middle">
            <p className="current-card__info_title">{internship?.title}</p>
          </div>
          <div className="current-card__info">
            <div className="current-card__info__item-small">
              <span>
                {internship?.salary !== null
                  ? "Оплачиваемая"
                  : "Неоплачиваемая"}
              </span>
            </div>
            <div className="current-card__info__item-small">
              <span>
                {internship?.typeOfEmployment === "Full"
                  ? "Полный день"
                  : "Неполный день"}
              </span>
            </div>
            <div className="current-card__info__item-small">
              <span>
                {internship?.schedule === "Office" ? "В офиссе" : "Удалённо"}
              </span>
            </div>
          </div>
        </div>
        <div className="current-card__button">
          <ApplyButton id={internship._id} />
          <button className="button-more" onClick={handleClick}>
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
