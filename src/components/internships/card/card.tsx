import { useNavigate } from "react-router-dom";
import company from "./../../../assets/icons/logoSmall.svg";
import location from "./../../../assets/icons/location.svg";
import { type IInternship } from "../../filter/filter/filter";
import { ApplyButton } from "../../applyButton/applyButton";
import Favorites from "../../favorites/favorites";
import s from "./card.module.scss";

type Props = {
  item: IInternship;
};

export const Card = ({ item: internship }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/internships/${internship._id}`);
  };

  return (
    <div className={s.currentCard}>
      <div>
        <div className={s.currentCard__top}>
          <div className={s.currentCard__logo}>
            <img src={company} alt="Компания" />
            <div className={s.currentCard__company}>
              <h4>{internship?.company}</h4>
              <div className={s.location}>
                <img src={location} alt="Локация" />
                <span>Таганрог</span>
              </div>
            </div>
          </div>
          <Favorites item={internship} />
        </div>
        <div>
          <div className={s.cardMiddle}>
            <p className={s.cardMiddle__title}>{internship?.title}</p>
          </div>
          <div className={s.info}>
            <div className={s.info__small}>
              <span>
                {internship?.salary !== null
                  ? "Оплачиваемая"
                  : "Неоплачиваемая"}
              </span>
            </div>
            <div className={s.info__small}>
              <span>
                {internship?.typeOfEmployment === "Full"
                  ? "Полный день"
                  : "Неполный день"}
              </span>
            </div>
            <div className={s.info__small}>
              <span>
                {internship?.schedule === "Office" ? "В офиссе" : "Удалённо"}
              </span>
            </div>
          </div>
        </div>
        <div className={s.currentCard__button}>
          <ApplyButton id={internship._id} />
          <button className={s.buttonMore} onClick={handleClick}>
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};
