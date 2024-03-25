import { useState } from "react";
import "./authorization.css";
import { useNavigate, Link } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import axios from "axios";

type AuthorizationtState = {
  email: string;
  password: string;
};

function Authorization() {
  let navigate = useNavigate();
  const [formAuth, setformAuth] = useState<AuthorizationtState>({
    email: "",
    password: "",
  });

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setformAuth({ ...formAuth, [event.target.name]: event.target.value });
  }

  console.log(formAuth);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formAuth.email || !formAuth.password) {
      toast.info("Заполните все поля формы", {
        position: "bottom-right",
      });
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:8000/v1/auth/login",
        formAuth,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // toast.success(data.message);
      // setEmail("");
      // setPassword("");
      // setRole("");
      // setIsAuthorized(true);
      // localStorage.setItem("token", response.data.token);
      navigate("/profileIntern");
    } catch (error) {
      console.log(error);
      // toast.error(error.response.data.message);
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
          <fieldset>
            <input
              type="email"
              id="mail"
              name="email"
              placeholder="Email"
              className="authorization-input"
              onChange={changeHandler}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Пароль"
              className="authorization-input"
              onChange={changeHandler}
            />
          </fieldset>
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
