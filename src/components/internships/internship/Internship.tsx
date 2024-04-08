import "./internship.css";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../../context/userContext";

export type Internship = {
  _id: String;
  title: String;
  company: String;
  focusOfInternship: String;
  typeOfInternship: String;
  schedule: String;
  typeOfEmployment: String;
  durationOfInternship: String;
  salary: Number;
  skills: String;
  conditions: String;
  onClick: () => void;
};

function Internship() {
  const { id } = useParams();
  const [internship, setInternship] = useState<Internship>();
  const { isAuth } = useContext(UserContext);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/v1/internships/${id}`)
      .then((response) => {
        setInternship(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="intership">
        <div className="intership__title">
          <h4>{internship?.title}</h4>
          <h5>{internship?.company}</h5>
        </div>
        <div className="intership__card-info">
          <div className="intership__card-info__item">
            <span>
              {internship?.salary !== 0 ? "Оплачиваеамая" : "Неоплачиваемая"}
            </span>
          </div>
          <div className="intership__card-info__item">
            <span>
              {internship?.typeOfEmployment === "Full"
                ? "Полный день"
                : "Неполный день"}
            </span>
          </div>
          <div className="intership__card-info__item">
            <span>
              {internship?.schedule === "Office" ? "В офисе" : "Удалённо"}
            </span>
          </div>
        </div>
        <div className="intership__time-salary">
          <div className="intership__time-salary__all">
            <p>Длительность</p>
            <span>3 месяца</span>
          </div>
          <div className="intership__time-salary__all">
            <p>Зарплата</p>
            <span>
              {internship?.salary !== 0 ? `${internship?.salary} р.` : "-"}
            </span>
          </div>
        </div>

        <div className="intership__skills">
          <span>Навыки</span>
          <ul>
            <li>Владение Figma;</li>
            <li>Базовые знания Photoshop и Illustrator;</li>
            <li>Наличие портфолио;</li>
          </ul>
        </div>

        <div className="intership__conditions">
          <span>Условия</span>
          <ul>
            <li>Студент очной формы обучения;</li>
            <li>Интерес к сфере UX-исследований;</li>
            <li>
              Понимание основ по качественным и количественным исследованиям;
            </li>
          </ul>
        </div>
        <button
          className="intership__button"
          onClick={() => {
            if (!isAuth) {
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
