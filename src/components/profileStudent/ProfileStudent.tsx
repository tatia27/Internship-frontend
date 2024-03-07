import React from "react";
import currentCompany from "./../../assets/CurrentCompany.svg";
import "./profileStudent.css";
import Card from "../card/card";
import Favorite from "../favorite/Favorite";

function ProfileStudent() {
  return (
    <div className="user-profile">
      <div className="container">
        <div className="user-profiles__info">
          <div>
            <img src={currentCompany} alt="Логотип компании"></img>
          </div>
          <div className="user-profiles__wrapper">
            <div className="user-profiles__company">
              <h2 className="user-profiles__company__title">BeHance</h2>
              <p>Описание профиля</p>
            </div>
          </div>
        </div>
        <div className="user-profile__skills">
          <div className="skills">
            <h4>Hard Skills</h4>
          </div>
          <div className="skills">
            <h4>Soft Skills</h4>
          </div>
        </div>
        <Favorite></Favorite>
      </div>
    </div>
  );
}

export default ProfileStudent;
