import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import deleteInternship from "./../../../assets/icons/delete.svg";
import { type IInternship } from "../../filter/filter/filter";
import { CompanyContext } from "../../../context/companyContext";
import { internshipService } from "../../../services/internship";
import "./actionForCompany.css";
import { UserContext } from "../../../context/userContext";

type ActionForCompanyProps = IInternship & {
  onRemove?: (id: string) => void;
};

function ActionForCompany(props: ActionForCompanyProps) {
  const { setInternshipId } = useContext(CompanyContext);
  // const [activeInternships, setActiveInternships] = useState<IInternship[]>([]);
  // const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   async function loadActiveInternships() {
  //     if (user?.id) {
  //       debugger;
  //       const response = await internshipService.getActiveInternships(user?.id);
  //       setActiveInternships(response.data);
  //     }
  //   }

  //   loadActiveInternships();
  // }, [user?.id, setActiveInternships]);

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ): void => {
    event.stopPropagation();
    setInternshipId(id);
    navigate(`/company/profile/participants`);
  };

  async function handleCardClick(id: string) {
    await internshipService.deleteInternship(id);
    if (props.onRemove) {
      debugger;
      props.onRemove(id);
    }
  }
  // const handleCardClick = async (id: string) => {
  //   if (id) {
  //     await internshipService.deleteInternship(id);
  //   }
  // };

  // async function removeInternship(id: string) {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     await internshipService.deleteInternship(id);
  //   }
  // }

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
