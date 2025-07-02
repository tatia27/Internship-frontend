import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { UserContext } from "../../context/userContext";
import { validateEmail } from "../registration/registrationIntern/registrationIntern";
import { type User } from "../../context/userContext";
import { authService } from "../../services/auth";
import s from "./authorization.module.scss";

export type AuthorizationTypes = { email: string; password: string };

export const Authorization = () => {
  const navigate = useNavigate();
  const [formAuth, setFormAuth] = useState<AuthorizationTypes>({
    email: "",
    password: "",
  });
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormAuth({ ...formAuth, [event.target.name]: event.target.value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    async function load() {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await authService.getAuth();

        if (setUser && response && response.data) {
          const { role, id } = response.data;

          const userData: User = {
            role,
            id,
          };
          setUser(userData);
        }
      }
    }

    async function login() {
      try {
        if (!formAuth.email || !formAuth.password) {
          toast.info("Заполните все поля формы");
          return;
        } else if (validateEmail(formAuth.email) === false) {
          toast.info("Email должен содержать специальные символы @ .");
          return;
        } else if (formAuth.password.length < 8) {
          toast.info("Минимальная длина пароля 8");
          return;
        }

        const { data } = await authService.login(formAuth);

        localStorage.setItem("token", data.token);

        if (data) {
          await load();
          navigate("/");
        }
      } catch (error) {
        if ((error as AxiosError).response?.status === 401) {
          toast.error("Неверный пароль");
        } else {
          toast.error("Неверный логин или пароль");
        }
      }
    }

    login();
  };

  return (
    <div className={s.registration}>
      <div className={s.container}>
        <form
          method="post"
          className={s.registration__form}
          onSubmit={handleLogin}
        >
          <h1>Добро пожаловать в Internship</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={s.authorizationInput}
            onChange={changeHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            className={s.authorizationInput}
            onChange={changeHandler}
          />
          <div className={s.wrapper}>
            <button type="submit" className={s.button}>
              Войти
            </button>
            <span>
              Нет аккаунта? <Link to="/registration">Зарегистриуйтесь</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
