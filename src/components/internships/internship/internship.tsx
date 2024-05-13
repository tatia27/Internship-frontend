import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../../../context/userContext";
import { type IInternship } from "../../filter/filter/filter";
import { internshipService } from "../../../services/internship";
import "./internship.css";

function Internship() {
  const [internship, setInternship] = useState<IInternship>();
  const { user } = useContext(UserContext);
  const { id } = useParams();
  //ToDo подача заявки на стажировку

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });

    async function loadInternship() {
      if (id) {
        try {
          const response = await internshipService.getInternship(id);
          setInternship(response.data);
        } catch {
          toast.error("Упс, что-то пошло не так...");
        }
      }
    }

    loadInternship();
  }, [id]);

  // const applyForInternship = async (internshipId: string) => {
  //   try {
  //     if (user?.id) {
  //       await internshipService.applyForInternship(internshipId, user?.id);
  //     }
  //   } catch (error) {
  //     if ((error as AxiosError).response?.status === 400) {
  //       toast.error("Заявка уже подана");
  //     } else if ((error as AxiosError).response?.status === 401) {
  //       toast.error("Авторизуйтесь в приложении");
  //     } else {
  //       toast.error("Упс, что-то пошло не так");
  //     }
  //   }
  // };

  return (
    <div>
      <div className="container">
        <div className="internship">
          <div className="internship__title">
            <h4>{internship?.title}</h4>
            <h5>{internship?.company}</h5>
          </div>
          <div className="internship__card-info">
            <div className="internship__card-info__item">
              <span>
                {internship?.salary !== null
                  ? "Оплачиваемая"
                  : "Неоплачиваемая"}
              </span>
            </div>
            <div className="internship__card-info__item">
              <span>
                {internship?.typeOfEmployment === "Full"
                  ? "Полный день"
                  : "Неполный день"}
              </span>
            </div>
            <div className="internship__card-info__item">
              <span>
                {internship?.schedule === "Office" ? "В офисе" : "Удалённо"}
              </span>
            </div>
          </div>
          <div className="internship__time-salary">
            <div className="internship__time-salary__all">
              <p className="internship__time-salary__all__title">
                Длительность
              </p>
              <span>
                <span>{internship?.durationOfInternship}</span>
              </span>
            </div>
            <div className="internship__time-salary__all">
              <p className="internship__time-salary__all__title">Зарплата</p>
              <span>
                {internship?.salary !== 0 ? `${internship?.salary} р.` : "-"}
              </span>
            </div>
          </div>
          <div className="internship__skills">
            <p className="internship__skills__title">Навыки</p>
            <ul>
              <li>{internship?.skills}</li>
            </ul>
          </div>
          <div className="internship__conditions">
            <p className="internship__skills__title">Условия</p>
            <ul>
              <li>{internship?.conditions}</li>
            </ul>
          </div>
          {user && user?.role === "intern" ? (
            <button
              className="internship__button"
              onClick={(event) => {
                event.stopPropagation();
                // applyForInternship(internship?._id.toString());
              }}
            >
              Подать заявку
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Internship;
