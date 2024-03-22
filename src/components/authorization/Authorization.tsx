import React from "react";
import "./authorization.css";
import { useNavigate } from "react-router-dom";

function Authorization() {
  let navigate = useNavigate();
  return (
    <div className="registration-intern">
      <div className="container">
        <form method="post" className="registration-intern__form">
          <h1>Добро пожаловать в Internship</h1>
          <fieldset>
            <input
              type="email"
              id="mail"
              name="user_email"
              placeholder="Email"
              className="authorization-input"
            />
            <input
              type="password"
              id="password"
              name="user_password"
              placeholder="Пароль"
              className="authorization-input"
            />
          </fieldset>
          <div className="registration-intern__wrapper">
            <button
              type="submit"
              className="registration-intern__button"
              onClick={() => navigate("/profileIntern")}
            >
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Authorization;
