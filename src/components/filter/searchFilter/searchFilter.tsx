import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../searchFilter/searchFilter.css";
import axios from "axios";

export type Filter = {
  specialization: {};
  direction: String;
  work: String;
  workTime: String;
};

function SearchFilter() {
  const [filter, setFilter] = useState<Filter>({
    specialization: {},
    direction: "",
    work: "",
    workTime: "",
  });
  // [event.target.name]:
  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  }

  console.log(filter);

  return (
    <div className="filter">
      <h3 className="filter_title">Специализация</h3>
      <form action="" className="specialization">
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="frontend"
            value="Frontend developer"
            onChange={changeHandler}
          />
          <label>Frontend-разработчик</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="backend"
            value="Backend developer"
            onChange={changeHandler}
          />
          <label>Backend-разработчик</label>
        </div>
        <div className="checkbox-filter">
          <input type="checkbox" name="mobile" value="Mobile developer" />
          <label>Мобильный разработчик</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="system administrator"
            value="System administrator"
            onChange={changeHandler}
          />
          <label>Системный администратор</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="game dev"
            value="Game developer"
            onChange={changeHandler}
          />
          <label>Разработчик игр</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="teaster"
            value="Teaster"
            onChange={changeHandler}
          />
          <label>Тестировщик</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="analyst"
            value="Analyst"
            onChange={changeHandler}
          />
          <label>Аналитик</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="designer"
            value="Designer"
            onChange={changeHandler}
          />
          <label>Дизайнер</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="manager"
            value="Manager"
            onChange={changeHandler}
          />
          <label>Менеджер</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="recruiter"
            value="Recruiter"
            onChange={changeHandler}
          />
          <label>Рекрутер</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="other"
            value="Other"
            onChange={changeHandler}
          />
          <label>Другое</label>
        </div>
      </form>
      <h3 className="filter_title">Вид стажировки</h3>
      <form action="" className="direction">
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="paid"
            value="paid"
            onChange={changeHandler}
          />
          <label>Оплачиваемая</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="unpaid"
            value="unpaid"
            onChange={changeHandler}
          />
          <label>Неоплачиваемая</label>
        </div>
      </form>
      <h3 className="filter_title">График работы</h3>
      <form action="" className="work">
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="remotely"
            value="Remotely"
            onChange={changeHandler}
          />
          <label>Удалённо</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="office"
            value="Office"
            onChange={changeHandler}
          />
          <label>В офисе</label>
        </div>
      </form>
      <h3 className="filter_title">Тип занятости</h3>
      <form action="" className="work_time">
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="full"
            value="Full"
            onChange={changeHandler}
          />
          <label>Полная</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="partial"
            value="Partial"
            onChange={changeHandler}
          />
          <label>Частичная</label>
        </div>
      </form>
      <a href="#" className="filter-reset">
        Сбросить всё
      </a>
    </div>
  );
}

export default SearchFilter;
