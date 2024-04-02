import { useEffect, useState } from "react";
import FullCard from "../internships/fullCard/FullCard";
import "./filter.css";
import axios from "axios";

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
};

function Filter() {
  const [internships, setInternships] = useState<Internship[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/v1/internships/")
      .then((response) => {
        setInternships(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(internships);

  return (
    <div className="internship">
      <div className="container">
        <div className="internship__filter">
          <div className="filter">
            <h3 className="filter_title">Специализация</h3>
            <form action="" className="specialization">
              <div className="checkbox-filter">
                <input type="checkbox" value="fender" />
                <label>Frontend-разработчик</label>
              </div>
              <div className="checkbox-filter">
                <input type="checkbox" value="fender-japan" />
                <label>Backend-разработчик</label>
              </div>
              <div className="checkbox-filter">
                <input type="checkbox" value="squier-by-fender" />
                <label>Мобильный разработчик</label>
              </div>
              <div className="checkbox-filter">
                <input type="checkbox" value="squier" />
                <label>Системный администратор</label>
              </div>
              <div className="checkbox-filter">
                <input type="checkbox" value="guyatone" />
                <label>Разработчик игр</label>
              </div>
              <div className="checkbox-filter">
                <input type="checkbox" value="not-specified" />
                <label>Тестировщик</label>
              </div>
              <div className="checkbox-filter">
                <input type="checkbox" value="not-specified" />
                <label>Аналитик</label>
              </div>
              <div className="checkbox-filter">
                <input type="checkbox" value="not-specified" />
                <label>Дизайнер</label>
              </div>
              <div className="checkbox-filter">
                <input type="checkbox" value="not-specified" />
                <label>Менеджер</label>
              </div>
              <div className="checkbox-filter">
                <input type="checkbox" value="not-specified" />
                <label>Рекрутер</label>
              </div>
            </form>
            <h3 className="filter_title">Вид стажировки</h3>
            <form action="" className="direction">
              <div className="checkbox-filter">
                <input type="checkbox" value="black" />
                <label>Оплачиваемая</label>
              </div>
              <div className="checkbox-filter">
                <input type="checkbox" value="red" />
                <label>Неоплачиваемая</label>
              </div>
            </form>
            <h3 className="filter_title">График работы</h3>
            <form action="" className="work">
              <div className="checkbox-filter">
                <input type="checkbox" value="black" />
                <label>Удалённо</label>
              </div>
              <div className="checkbox-filter">
                <input type="checkbox" value="red" />
                <label>В офисе</label>
              </div>
            </form>
            <h3 className="filter_title">Тип занятости</h3>
            <form action="" className="work_time">
              <div className="checkbox-filter">
                <input type="checkbox" value="black" />
                <label>Полная</label>
              </div>
              <div className="checkbox-filter">
                <input type="checkbox" value="red" />
                <label>Частичная</label>
              </div>
            </form>
            <a href="#" className="filter-reset">
              Сбросить всё
            </a>
          </div>
          <div>
            {internships.map((item) => {
              console.log(item);
              return <FullCard key={item._id.toString()} {...item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
