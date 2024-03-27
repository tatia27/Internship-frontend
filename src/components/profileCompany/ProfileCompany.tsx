import React from "react";
import currentCompany from "./../../assets/CurrentCompany.svg";
import "./profileCompany.css";
import FullCard from "../fullCard/FullCard";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function ProfileCompany() {
  let navigate = useNavigate();
  const logout = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("http://localhost:8000/v1/auth/logout", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      localStorage.clear();
      navigate("/");
    } catch (error) {
      toast.error("Пользователь не был авторизован", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="user-profile">
      <div className="container">
        <div className="user-profiles__info">
          <div onClick={logout}>
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
