import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import { useContext } from "react";
import { Internship } from "../internship/internship";
import deleteInternship from "./../../../assets/icons/delete.svg";
import { toast } from "react-toastify";
import "./actionForCompany.css";
import axios from "axios";

function ActionForCompany(props: Internship) {
  const { id } = useParams();
  const { isAuth } = useContext(UserContext);
  let navigate = useNavigate();

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

  // const showInters = async (internshipId: string) => {
  //   try {
  //     await axios.patch(
  //       `${process.env.REACT_APP_API_URL}/v1/company/${internshipId}/interns`,
  //       { userId },
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //   } catch (error) {
  //     if ((error as AxiosError).response?.status === 400) {
  //       toast.error("Заявка уже подана");
  //     } else {
  //       toast.error("Упс, что-то пошло не так");
  //     }
  //   }
  // };
  return (
    <div className="full-current-card__top__action">
      <button
        className="full-current-card__top__button-respond"
        onClick={(event) => {
          // if (!isAuth) {
          //   event.stopPropagation();
          //   navigate("/login");
          // }
          event.stopPropagation();
          navigate(`/companies/${id}/participants`);
        }}
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
