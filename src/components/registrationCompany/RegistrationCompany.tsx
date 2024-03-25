import { useState } from "react";
import { Link } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import "./registrationCompany.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type FormCompanyState = {
  name: string;
  email: string;
  password: string;
  conditions: boolean;
};

function RegistrationCompany() {
  let navigate = useNavigate();
  const [form, setForm] = useState<FormCompanyState>({
    name: "",
    email: "",
    password: "",
    conditions: false,
  });

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setForm({ ...form, [event.target.name]: value });
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.conditions) {
      toast.info("Заполните все поля формы", {
        position: "bottom-right",
      });
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:8000/v1/company/",
        form,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      // console.log(form);
      navigate("/profileCompany");
    } catch (error) {
      toast.error("Email уже зарегистрирован, используйте другой", {
        position: "bottom-right",
      });
    }
  };

  // if (isAuthorized) {
  //   return <Navigate to={"/"} />;
  // }

  return (
    <div className="registration-intern">
      <div className="container">
        <form
          className="registration-intern__form"
          method="post"
          onSubmit={handleRegister}
        >
          <h1>Регистрация компании</h1>
          <fieldset>
            <input
              type="text"
              id="name"
              name="name"
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
                checked={form.conditions}
                value="interest_development"
                name="conditions"
                className="checkbox__square"
                onChange={changeHandler}
              />
              <label>
                Я принимаю условия соглашения и ознакомился  политикой
                конфиденциальности
              </label>
            </div>
          </fieldset>
          <div className="ololo">
            <button type="submit" className="registration-intern__button">
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
