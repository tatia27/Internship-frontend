import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import deleteInternship from "./../../../assets/icons/delete.svg";
import { type IInternship } from "../../filter/filter/filter";
import { CompanyContext } from "../../../context/companyContext";
import { internshipService } from "../../../services/internship";
import s from "./actionForCompany.module.scss";

type ActionForCompanyProps = IInternship & {
  onRemove?: (id: string) => void;
};

export const ActionForCompany = (props: ActionForCompanyProps) => {
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
    <div className={s.action}>
      <button
        className={s.button}
        onClick={(event) => handleButtonClick(event, props._id.toString())}
      >
        Посмотреть участников
      </button>
      <img
        src={deleteInternship}
        alt="Крестик"
        className={s.action__remove}
        onClick={(event) => {
          event.stopPropagation();
          handleCardClick(props._id.toString());
        }}
      />
    </div>
  );
};
