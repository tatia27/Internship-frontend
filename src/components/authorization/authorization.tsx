import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { UserContext } from "../../context/userContext";
// import { validateEmail } from "../registration/registrationIntern";
import "./authorization.css";

type AuthorizationtState = { email: string; password: string };

function Authorization() {
  let navigate = useNavigate();
  const [formAuth, setFormAuth] = useState<AuthorizationtState>({
    email: "",
    password: "",
  });
  // const { user, setIsAuth } = useContext(UserContext);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormAuth({ ...formAuth, [event.target.name]: event.target.value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formAuth.email || !formAuth.password) {
      toast.info("Заполните все поля формы");
      return;
    }
    //  else if (validateEmail(formAuth.email) === false) {
    //   toast.info("Email должен содержать специальные символы @ .");
    //   return;
    // }

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/v1/auth/login`,
        formAuth,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      // setEmail("");
      // setPassword("");
      // setRole("");
      // setIsAuthorized(true);

      localStorage.setItem("token", data.token);
      // navigate("/intern");
      navigate("/companies");
    } catch (error) {
      if ((error as AxiosError).response?.status === 401) {
        toast.error("Неверный пароль");
      } else {
        toast.error("Пользователь не найден");
      }
    }
  };

  return (
    <div className="registration-intern">
      <div className="container">
        <form
          method="post"
          className="registration-intern__form"
          onSubmit={handleLogin}
        >
          <h1>Добро пожаловать в Internship</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="authorization-input"
            onChange={changeHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            className="authorization-input"
            onChange={changeHandler}
          />
          <div className="registration-intern__wrapper">
            <button type="submit" className="registration-intern__button">
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
}

export default Authorization;
