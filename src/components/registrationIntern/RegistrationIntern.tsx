import React from "react";
import "./registrationIntern.css";

function RegistrationIntern() {
  return (
    <div className="registration-intern">
      <div className="container">
        <form method="post" className="registration-intern__form">
          <h1>Регистрация стажёра</h1>
          <fieldset>
            <input type="text" id="name" name="surname" placeholder="Фамилия" />
            <input type="text" id="name" name="user_name" placeholder="Имя" />
            <input
              type="text"
              id="name"
              name="last_name"
              placeholder="Отчество"
            />
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
            <div className="checkbox">
              <input
                type="checkbox"
                value="interest_development"
                name="user_interest"
                className="checkbox__square"
              />
              <label>
                Я принимаю условия соглашения и ознакомился с политикой
                конфиденциальности
              </label>
            </div>
          </fieldset>
          <div className="ololo">
            <button type="submit" className="registration-intern__button">
              Зарегистрироваться
            </button>
            <span>
              Уже есть аккаунт? <a href="#">Войдите</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationIntern;
