import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import companyLogo from "../../../assets/icons/fullCardLogo.svg";
import town from "./../../../assets/icons/location.svg";
import { UserContext } from "../../../context/userContext";
import { type IInternship } from "../../filter/filter/filter";
import ActionForIntern from "../actionForIntern/actionForIntern";
import ActionForCompany from "../actionForCompany/actionForCompany";
import "./fullCard.css";

function FullCard(props: IInternship) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
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
    <div className="user-profiles__card" onClick={handleClick}>
      <div className="full-current-card">
        <div className="current-card__text">
          <div className="full-current-card__top">
            <div className="full-current-card__top__company">
              <img src={companyLogo} alt="Компания" />
              <h4>{props.company}</h4>
            </div>
            {selectAction()}
          </div>
        </div>
        <div>
          <p className="current-card__info__title">{props.title}</p>
          <div className="locatio">
            <img src={town} alt="Местоположение" />
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
