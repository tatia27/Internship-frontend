import React from "react";
import FullCard from "../fullCard/FullCard";
import "./filter.css";
import NewCard from "../newCard/NewCard";

function Filter() {
  return (
    <div className="internship">
      <div className="container">
        <div className="internship__filter">
          <div className="filter">
            <h3 className="filter_title">Специализация</h3>
            <form action="" className="specialization">
              <div className="checkbox">
                <input type="checkbox" value="fender" />
                <label>Frontend-разработчик</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" value="fender-japan" />
                <label>Backend-разработчик</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" value="squier-by-fender" />
                <label>Мобильный разработчик</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" value="squier" />
                <label>Системный администратор</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" value="guyatone" />
                <label>Разработчик игр</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" value="not-specified" />
                <label>Тестировщик</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" value="not-specified" />
                <label>Аналитик</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" value="not-specified" />
                <label>Дизайнер</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" value="not-specified" />
                <label>Менеджер</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" value="not-specified" />
                <label>Рекрутер</label>
              </div>
            </form>
            <h3 className="filter_title">Вид стажировки</h3>
            <form action="" className="direction">
              <div className="checkbox">
                <input type="checkbox" value="black" />
                <label>Оплачиваемая</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" value="red" />
                <label>Неоплачиваемая</label>
              </div>
            </form>
            <h3 className="filter_title">График работы</h3>
            <form action="" className="work">
              <div className="checkbox">
                <input type="checkbox" value="black" />
                <label>Удалённо</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" value="red" />
                <label>В офисе</label>
              </div>
            </form>
            <h3 className="filter_title">Тип занятости</h3>
            <form action="" className="work_time">
              <div className="checkbox">
                <input type="checkbox" value="black" />
                <label>Полная</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" value="red" />
                <label>Частичная</label>
              </div>
            </form>
            <a href="#" className="filter-reset">
              Сбросить всё
            </a>
          </div>
          <div>
            <FullCard></FullCard>
            <FullCard></FullCard>
            <FullCard></FullCard>
            <FullCard></FullCard>
            {/* <NewCard></NewCard>
            <NewCard></NewCard> */}
            {/* <NewCard></NewCard>
            <NewCard></NewCard> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
