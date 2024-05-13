import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import deleteInternship from "./../../../assets/icons/delete.svg";
import { type IInternship } from "../../filter/filter/filter";
import { CompanyContext } from "../../../context/companyContext";
import { internshipService } from "../../../services/internship";
import "./actionForCompany.css";

function ActionForCompany(props: IInternship) {
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

  const handleCardClick = async (id: string) => {
    await removeInternship(id);
  };

  async function removeInternship(id: string) {
    const token = localStorage.getItem("token");
    if (token) {
      await internshipService.deleteInternship(id);
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
        onClick={(event) => {
          event.stopPropagation();
          handleCardClick(props._id.toString());
        }}
      />
    </div>
  );
}

export default ActionForCompany;
