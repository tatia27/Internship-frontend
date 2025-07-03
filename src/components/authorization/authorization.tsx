import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { useToTopPage } from "../../hooks";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { UserContext } from "../../context/userContext";
import { authService } from "../../services/auth";
import s from "./authorization.module.scss";

export type AuthorizationTypes = { email: string; password: string };

const schema = yup
  .object({
    email: yup
      .string()
      .email("Введите корректный email")
      .required("Email обязателен"),
    password: yup
      .string()
      .min(8, "Минимальная длина пароля 8 символов")
      .required("Пароль обязателен"),
  })
  .required();

export const Authorization = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useToTopPage();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthorizationTypes>({
    resolver: yupResolver(schema),
  });

  const load = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      const response = await authService.getAuth();

      if (setUser && response?.data) {
        const { role, id } = response.data;
        setUser({ role, id });
      }
    }
  };

  const onSubmit: SubmitHandler<AuthorizationTypes> = async (data) => {
    try {
      const response = await authService.login(data);
      localStorage.setItem("token", response.data.token);
      await load();
      navigate("/");
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 401) {
        toast.error("Неверный пароль");
      } else {
        toast.error("Неверный логин или пароль");
      }
    }
  };

  return (
    <div className={s.registration}>
      <div className={s.container}>
        <form
          method="post"
          className={s.registration__form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1>Добро пожаловать в Internship</h1>

          <input
            type="email"
            placeholder="Email"
            className={s.authorizationInput}
            {...register("email")}
          />
          {errors.email && <p className={s.error}>{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Пароль"
            className={s.authorizationInput}
            {...register("password")}
          />
          {errors.password && (
            <p className={s.error}>{errors.password.message}</p>
          )}

          <div className={s.wrapper}>
            <button type="submit" className={s.button}>
              Войти
            </button>
            <span>
              Нет аккаунта? <Link to="/registration">Зарегистрируйтесь</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
