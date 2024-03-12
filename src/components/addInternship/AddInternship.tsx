import React from "react";
import "./addInternship.css";
import { useNavigate } from "react-router-dom";

function AddInternship() {
  let navigate = useNavigate();
  return (
    <div className="resume">
      <div className="container">
        <h1 className="resume-title">Информация о стажировке</h1>
        <form method="post" className="resume-internship__form">
          <fieldset>
            <input
              type="text"
              id="name"
              name="surname"
              placeholder="Наименование стажировки"
              className="resume-input"
            />
            <select id="education" name="Направление" className="resume-input">
              <option value="frontend">Frontend-разработчик</option>
              <option value="backend">Backend-разработчик</option>
              <option value="mobile">Мобильный разработчик</option>
              <option value="sis_admin">Системный администартор</option>
              <option value="game_developer">Разработчик игр</option>
              <option value="qa">Тестировщик</option>
              <option value="analyst">Аналитик</option>
              <option value="designer">Дизайнер</option>
              <option value="manager">Менеджер</option>
              <option value="recruiter">Рекрутер</option>
            </select>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Компания"
              className="resume-input"
            />
            <input
              type="text"
              id="time"
              name="time"
              placeholder="Длительность"
              className="resume-input"
            />
            <div className="resume-internship__form__salary">
              <div className="resume-internship__form__salary__margin">
                <input type="checkbox" className="checkbox" />
                <span>Оплачиваемая</span>
              </div>

              <input
                type="text"
                id="salary"
                name="salary"
                placeholder="Зарплата"
                className="resume-input"
              />
            </div>
            <div className="checkbox-filter-internship">
              <div>
                <h3 className="filter_title">График работы</h3>
                <form action="" className="work">
                  <div className="checkbox-filter">
                    <input type="checkbox" value="black" className="checkbox" />
                    <label>Удалённо</label>
                  </div>
                  <div className="checkbox-filter">
                    <input type="checkbox" value="" className="checkbox" />
                    <label>В офисе</label>
                  </div>
                </form>
              </div>
              <div>
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
              </div>
            </div>
            <input
              type="text"
              id="skills"
              name="skills"
              placeholder="Навыки"
              className="resume-input"
            />
            <input
              type="text"
              id="conditions"
              name="conditions"
              placeholder="Условия"
              className="resume-input"
            />
          </fieldset>
          <button className="resume-button">Создать</button>
        </form>
      </div>
    </div>
  );
}

export default AddInternship;
