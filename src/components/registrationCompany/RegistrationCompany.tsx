import React from "react";
import "./registrationCompany.css";

function RegistrationCompany() {
  return (
    <div className="registration-intern">
      <div className="container">
        <form method="post" className="registration-intern__form">
          <h1>Регистрация компании</h1>
          <fieldset>
            <input
              type="text"
              id="name"
              name="surname"
              placeholder="Наименование компании"
              className="registration__input"
            />
            <input
              type="email"
              id="mail"
              name="user_email"
              placeholder="Email"
              className="registration__input"
            />
            <input
              type="password"
              id="password"
              name="user_password"
              placeholder="Пароль"
              className="registration__input"
            />
            <div className="checkbox-company">
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

export default RegistrationCompany;
