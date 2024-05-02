import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import { useContext } from "react";
import { Internship } from "../internship/internship";
import deleteInternship from "./../../../assets/icons/delete.svg";
import { toast } from "react-toastify";
import "./actionForCompany.css";
import axios from "axios";
import AllUsers from "../../users/allUsers/allUsers";
import Test from "../../test/test";

function ActionForCompany(props: Internship) {
  let navigate = useNavigate();
  const getIdInternship = (id: string): string => {
    return String(id);
  };

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ): void => {
    event.stopPropagation();
    <Test id={id} title={props.title} />;
    navigate(`/company/${id}/participants`);
  };

  const handleCardClick = async (id: string) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_API_URL}/v1/internships/${id}/inactive`,
        null,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      toast.error("Ошибка при деактивации стажировки");
    }
  };

  return (
    <div className="full-current-card__top__action">
      <button
        className="full-current-card__top__button-respond"
        // onClick={handleButtonClick}
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
