import { useEffect, useState } from "react";
import like from "./../../../assets//likeCard.svg";
import company from "./../../../assets/companyLogo.svg";
import location from "./../../../assets/location.svg";
import "./card.css";
import { useNavigate, useParams } from "react-router-dom";
import { Internship } from "../../filter/Filter";
import axios from "axios";

function Card() {
  let navigate = useNavigate();
  const [internships, setInternship] = useState<Internship>();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8000/v1/internships/${id}")
      .then((response) => {
        setInternship(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
