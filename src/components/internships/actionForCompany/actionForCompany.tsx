import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import deleteInternship from "./../../../assets/icons/delete.svg";
import { type IInternship } from "../../filter/filter/filter";
import { CompanyContext } from "../../../context/companyContext";
import { internshipService } from "../../../services/internship";
import "./actionForCompany.css";

type ActionForCompanyProps = IInternship & {
  onRemove?: (id: string) => void;
};

function ActionForCompany(props: ActionForCompanyProps) {
  const { setInternshipId } = useContext(CompanyContext);
  const navigate = useNavigate();

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ): void => {
    event.stopPropagation();
    setInternshipId(id);
    navigate(`/company/profile/participants`);
  };

  async function handleCardClick(id: string) {
    const confirmed = window.confirm(
      "Вы уверены, что хоитите удалить стажировку?"
    );

    if (confirmed) {
      await internshipService.deleteInternship(id);
      if (props.onRemove) {
        props.onRemove(id);
      }
    }
  }

  return (
    <div className="full-current-card__top__action">
      <button
        className="full-current-card__top__button-respond"
        onClick={(event) => handleButtonClick(event, props._id.toString())}
      >
        Посмотреть участников
      </button>
      <img
        src={deleteInternship}
        alt="Крестик"
        className="full-current-card__top__action__remove"
        onClick={(event) => {
          event.stopPropagation();
          handleCardClick(props._id.toString());
        }}
      />
    </div>
  );
}

export default ActionForCompany;
