import React from "react";
import "./button.css";
import arrow from "./../../assets/Arrow.svg";
import { useNavigate } from "react-router-dom";

function Button() {
  let navigate = useNavigate();
  return (
    <div className="container">
      <button className="main-button" onClick={() => navigate("/internships")}>
        Показать больше
        <img src={arrow} alt="Cтрелка" className="main-button__arrow" />
      </button>
    </div>
  );
}

export default Button;
