import { useState } from "react";
import { Link } from "react-router-dom";
import "./registrationIntern.css";
import { useNavigate } from "react-router-dom";

type FormInternState = {
  firstName: string;
  secondName: string;
  lastName: string;
  email: string;
  password: string;
};
function RegistrationIntern() {
  let navigate = useNavigate();
  const [form, setForm] = useState<FormInternState>({
    firstName: "",
    secondName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }
  return (
    <div className="registration-intern">
      <div className="container">
        <form method="post" className="registration-intern__form">
          <h1>Регистрация стажёра</h1>
          <fieldset>
            <input
              type="text"
              id="name"
              name="firstName"
              placeholder="Фамилия"
              className="registartion-intern-input"
              onChange={changeHandler}
            />
            <input
              type="text"
              id="name"
              name="secondName"
              placeholder="Имя"
              className="registartion-intern-input"
              onChange={changeHandler}
            />
            <input
              type="text"
              id="name"
              name="lastName"
              placeholder="Отчество"
              className="registartion-intern-input"
              onChange={changeHandler}
            />
            <input
              type="email"
              id="mail"
              name="email"
              placeholder="Email"
              className="registartion-intern-input"
              onChange={changeHandler}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Пароль"
              className="registartion-intern-input"
              onChange={changeHandler}
            />
            <div className="checkbox-intern">
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
            <button
              type="submit"
              className="registration-intern__button"
              onClick={() => navigate("/profileIntern")}
            >
              Зарегистрироваться
            </button>
            <span>
              Уже есть аккаунт? <Link to="/login">Войдите</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationIntern;
