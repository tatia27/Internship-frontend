import { useState } from "react";
import { Link } from "react-router-dom";
import "./registrationCompany.css";
import { useNavigate } from "react-router-dom";

type FormCompanyState = {
  nameCompany: string;
  email: string;
  password: string;
};

function RegistrationCompany() {
  let navigate = useNavigate();
  const [form, setForm] = useState<FormCompanyState>({
    nameCompany: "",
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
        <form
          className="registration-intern__form"
          method="post"
          action="/registration/registationCompany"
        >
          <h1>Регистрация компании</h1>
          <fieldset>
            <input
              type="text"
              id="name"
              name="nameCompany"
              placeholder="Наименование компании"
              className="registration__input"
              onChange={changeHandler}
            />
            <input
              type="email"
              id="mail"
              name="email"
              placeholder="Email"
              className="registration__input"
              onChange={changeHandler}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Пароль"
              className="registration__input"
              onChange={changeHandler}
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
            <button
              type="submit"
              className="registration-intern__button"
              onClick={() => navigate("/profileCompany")}
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

export default RegistrationCompany;

// function registartionHandler() {
//   try {
//     await axios.post(
//       "/api/registr/registration/registationCompany",
//       { ...form },
//       {
//         headers: { "Content-type": "application/json" },
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// }
