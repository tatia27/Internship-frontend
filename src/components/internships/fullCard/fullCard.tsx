import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import companyLogo from "../../../assets/icons/fullCardLogo.svg";
import town from "./../../../assets/icons/location.svg";
import { UserContext } from "../../../context/userContext";
import { type IInternship } from "../../filter/filter/filter";
import { ActionForIntern } from "../actionForIntern/actionForIntern";
import { ActionForCompany } from "../actionForCompany/actionForCompany";
import s from "./fullCard.module.scss";

type FullCardProps = IInternship & {
  onRemove?: (id: string) => void;
};

export const FullCard = (props: FullCardProps) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (event: { stopPropagation: () => void }) => {
    event?.stopPropagation();
    navigate(`/internships/${props._id}`);
  };

  const selectAction = () => {
    if (
      user?.role === "company" &&
      location.pathname.includes("/company/internships")
    ) {
      return <></>;
    } else if (user?.role === "company") {
      return <ActionForCompany {...props} />;
    } else if (user?.role === "intern") {
      return <ActionForIntern {...props} />;
    } else {
      return <ActionForIntern {...props} />;
    }
  };

  return (
    <div onClick={handleClick}>
      <div className={s.fullCurrentCard}>
        <div>
          <div className={s.fullCurrentCard__top}>
            <div className={s.fullCurrentCard__company}>
              <img src={companyLogo} alt="Компания" />
              <h4>{props.company}</h4>
            </div>
            {selectAction()}
          </div>
        </div>
        <div>
          <p className={s.title}>{props.title}</p>
          <div className={s.location}>
            <img src={town} alt="Местоположение" />
            <span>Таганрог</span>
          </div>
          <div className={s.currentCard__info}>
            <div className={s.currentCard__info__item}>
              <span>
                {props.salary !== null ? "Оплачиваемая" : "Неоплачиваемая"}
              </span>
            </div>
            <div className={s.currentCard__info__item}>
              <span>
                {props.typeOfEmployment === "Full"
                  ? "Полный день"
                  : "Неполный день"}
              </span>
            </div>
            <div className={s.currentCard__info__item}>
              <span>
                {props.schedule === "Office" ? "В офиссе" : "Удалённо"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
