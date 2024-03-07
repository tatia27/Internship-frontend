import React from "react";
import wallpaper from "./../../assets/wallpaper.png";
import "./main.css";

function Main() {
  return (
    <div className="main_part">
      <div className="container">
        <div className="main">
          <h1 className="main__title1">
            Найди IT стажировку
            <br />
            сегодня
          </h1>
          <h2 className="main__title2">
            Вас ждут множество вакансий в сфере инновационных технологий
          </h2>
          <button className="main__button">Начать поиск</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
