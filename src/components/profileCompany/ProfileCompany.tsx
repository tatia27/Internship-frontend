import React from "react";
import currentCompany from "./../../assets/CurrentCompany.svg";
import "./profileCompany.css";
import FullCard from "../fullCard/FullCard";
import { useNavigate } from "react-router-dom";

function ProfileCompany() {
  let navigate = useNavigate();
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
        <div className="user-profiles__active-internhip">
          <h3 className="user-profiles__active-internhip__title">
            Активнные стажировки
          </h3>
          <div className="user-profiles__active-internhip__active">
            <FullCard></FullCard>
            <FullCard></FullCard>
            <FullCard></FullCard>
            <FullCard></FullCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCompany;
