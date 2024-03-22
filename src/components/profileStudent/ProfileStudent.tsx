import React from "react";
import iconStudent from "./../../assets/student_icon.png";
import "./profileStudent.css";
import Favorite from "../favorite/Favorite";
import { useNavigate } from "react-router-dom";

function ProfileStudent() {
  let navigate = useNavigate();
  return (
    <div className="user-profile">
      <div className="container">
        <div className="user-profiles__info">
          <div>
            <img src={iconStudent} alt="Иконка пользователя"></img>
            <button
              className="button-resume"
              onClick={() => navigate("/profileIntern/resume")}
            >
              Загрузить резюме
            </button>
          </div>
          <div className="user-profiles__wrapper">
            <div className="user-profiles__student">
              <h2 className="user-profiles__student__title">
                Чепурная Татьяна Владимировна
              </h2>
              <p className="user-profiles__student__description">Описание</p>
              <div className="user-profiles__student__person-info">
                <p>Возраст</p>
                <p>Email</p>
                <p>Местоположение</p>
                <p>Образование</p>
                <p>Специализация</p>
              </div>
            </div>
          </div>
        </div>
        <div className="user-profile__skills">
          <div className="skills">
            <h4 className="skills__hard-soft">Hard Skills</h4>
          </div>
          <div className="skills">
            <h4 className="skills__hard-soft">Soft Skills</h4>
          </div>
        </div>
        <Favorite></Favorite>
      </div>
    </div>
  );
}

export default ProfileStudent;
