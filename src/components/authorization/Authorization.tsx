import React from "react";
import "./authorization.css";

function Authorization() {
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
            />
            <input
              type="password"
              id="password"
              name="user_password"
              placeholder="Пароль"
            />
          </fieldset>
          <div className="ololo">
            <button type="submit" className="registration-intern__button">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Authorization;
