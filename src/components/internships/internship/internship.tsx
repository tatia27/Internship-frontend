import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { type IInternship } from "../../filter/filter/filter";
import { internshipService } from "../../../services/internship";
import ApplyButton from "../../applyButton/applyButton";
import "./internship.css";

function Internship() {
  const [internship, setInternship] = useState<IInternship>();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });

    async function loadInternship() {
      if (id) {
        try {
          debugger;
          const response = await internshipService.getInternship(id);
          setInternship(response.data);
        } catch {
          toast.error("Упс, что-то пошло не так...");
        }
      }
    }

    loadInternship();
  }, [id]);

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
          <ApplyButton id={internship?._id.toString() || ""} />
        </div>
      </div>
    </div>
  );
}

export default Internship;
