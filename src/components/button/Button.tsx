import React from "react";
import "./button.css";
import arrow from "./../../assets/Arrow.svg";

function Button() {
  return (
    <div>
      <button className="main-button">
        Показать больше{" "}
        <img src={arrow} alt="Cтрелка" className="main-button__arrow" />
      </button>
    </div>
  );
}

export default Button;
