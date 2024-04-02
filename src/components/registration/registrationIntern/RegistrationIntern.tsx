import { useState } from "react";
import { Link } from "react-router-dom";
import "./registrationIntern.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";

export const validateEmail = (email: string): boolean => {
  const regExp = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]/g;
  return regExp.test(email);
};

type FormInternState = {
  firstName: string;
  secondName: string;
  lastName: string;
  email: string;
  password: string;
  conditions: boolean;
};

function RegistrationIntern() {
  let navigate = useNavigate();
  const [form, setForm] = useState<FormInternState>({
    firstName: "",
    secondName: "",
    lastName: "",
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
    if (
      !form.firstName ||
      !form.secondName ||
      !form.lastName ||
      !form.email ||
      !form.password
    ) {
      toast.info("Заполните все поля формы");
      return;
    } else if (form.password.length < 8) {
      toast.info("Минимальная длина пароля 8 символов");
      return;
    } else if (validateEmail(form.email) === false) {
      toast.info("Email должен содержать специальные символы @ ,");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:8000/v1/intern/",
        form,

        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      navigate("/profileIntern");
    } catch (error) {
      if ((error as AxiosError).response?.status === 400) {
        toast.error("Email уже зарегистрирован, используйте другой");
      } else if ((error as AxiosError).response?.status === 401) {
        toast.error("Примите условия соглашения");
      }
    }
  };

  // if (isAuthorized) {
  //   return <Navigate to={"/"} />;
  // }
  return (
    <div className="registration-intern">
      <div className="container">
        <form
          method="post"
          className="registration-intern__form"
          onSubmit={handleRegister}
        >
          <h1>Регистрация стажёра</h1>
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
            id="secondName"
            name="secondName"
            placeholder="Имя"
            className="registartion-intern-input"
            onChange={changeHandler}
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Отчество"
            className="registartion-intern-input"
            onChange={changeHandler}
          />
          <input
            type="email"
            id="email"
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
              checked={form.conditions}
              name="conditions"
              className="checkbox__square"
              onChange={changeHandler}
            />
            <label>
              Я принимаю условия соглашения и ознакомился с политикой
              конфиденциальности
            </label>
          </div>
          <div className="registration-intern__form__info">
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

export default RegistrationIntern;
