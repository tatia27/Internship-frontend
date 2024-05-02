import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import axios from "axios";
import "./internship.css";
// import { Internship } from "../../filter/filter/filter";

export type Internship = {
  _id: string;
  title: string;
  company: string;
  focusOfInternship: string;
  typeOfInternship: string;
  schedule: string;
  typeOfEmployment: string;
  durationOfInternship: string;
  salary: number;
  skills: string;
  conditions: string;
  isActive: boolean;
  onClick: () => void;
};

function Internship() {
  const { id } = useParams();
  const [internship, setInternship] = useState<Internship>();
  const { user } = useContext(UserContext);

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/v1/internships/${id}`)
      .then((response) => {
        setInternship(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="container">
      <div className="internship">
        <div className="internship__title">
          <h4>{internship?.title}</h4>
          <h5>{internship?.company}</h5>
        </div>
        <div className="internship__card-info">
          <div className="internship__card-info__item">
            <span>
              {internship?.salary !== null ? "Оплачиваемая" : "Неоплачиваемая"}
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
            <p className="internship__time-salary__all__title">Длительность</p>
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
        <button
          className="internship__button"
          onClick={() => {
            if (!user) {
              navigate("/login");
            }
          }}
        >
          Подать заявку
        </button>
      </div>
    </div>
  );
}

export default Internship;
