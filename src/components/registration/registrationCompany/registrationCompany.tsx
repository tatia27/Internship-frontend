import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { validateEmail } from "../registrationIntern/registrationIntern";
import { registerService } from "../../../services/register";
import "./registrationCompany.css";

export type CompanyForm = {
  name: string;
  email: string;
  password: string;
  conditions: boolean;
};

function RegistrationCompany() {
  const navigate = useNavigate();
  const [form, setForm] = useState<CompanyForm>({
    name: "",
    email: "",
    password: "",
    conditions: false,
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setForm({ ...form, [event.target.name]: value });
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      toast.info("Заполните все поля формы");
      return;
    } else if (form.password.length < 8) {
      toast.info("Минимальная длина пароля 8 символов");
      return;
    } else if (validateEmail(form.email) === false) {
      toast.info("Email должен содержать специальные символы @ .");
      return;
    }

    try {
      await registerService.registerCompany(form);
      navigate("/");
      toast.info(
        "Вы зерегистрированы, войдите в приложение с учетными данными"
      );
    } catch (error) {
      if ((error as AxiosError).response?.status === 400) {
        toast.error("Email уже зарегистрирован, используйте другой");
      } else if ((error as AxiosError).response?.status === 401) {
        toast.error("Примите условия соглашения");
      } else {
        toast.error("Упс, что-то пошло не так...");
      }
    }
  };

  return (
    <div className="registration-company">
      <div className="container">
        <form
          className="registration-company__form"
          method="post"
          onSubmit={handleRegister}
        >
          <h1>Регистрация компании</h1>
          <input
            type="text"
            name="name"
            placeholder="Наименование компании"
            className="registration__input"
            onChange={changeHandler}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="registration__input"
            onChange={changeHandler}
          />
          <input
            type="password"
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
              Я принимаю условия соглашения и ознакомился c политикой
              конфиденциальности
            </label>
          </div>
          <div className="registration-company__form__info">
            <button type="submit" className="registration-company__button">
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
