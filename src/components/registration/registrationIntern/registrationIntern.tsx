import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { registerService } from "../../../services/register";
import { useForm } from "react-hook-form";
import s from "./registrationIntern.module.scss";

export type InternForm = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  password: string;
  conditions: boolean;
};

const schema = yup.object().shape({
  firstName: yup.string().required("Имя обязательно"),
  middleName: yup.string().required("Отчество обязательно"),
  lastName: yup.string().required("Фамилия обязательна"),
  email: yup.string().email("Некорректный email").required("Email обязателен"),
  password: yup
    .string()
    .min(8, "Минимальная длина пароля 8 символов")
    .required("Пароль обязателен"),
  conditions: yup
    .boolean()
    .oneOf([true], "Необходимо принять условия соглашения")
    .required(),
});

export const RegistrationIntern = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InternForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: InternForm) => {
    try {
      await registerService.registerIntern(data);
      navigate("/");
      toast.info(
        "Вы зарегистрированы, войдите в приложение с учетными данными"
      );
    } catch (error) {
      if ((error as AxiosError).response?.status === 400) {
        toast.error("Email уже зарегистрирован, используйте другой");
      } else if ((error as AxiosError).response?.status === 401) {
        toast.error("Примите условия соглашения");
      } else {
        toast.error("Упс, что-то пошло не так");
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
          <h1>Регистрация стажёра</h1>

          <input
            type="text"
            placeholder="Фамилия"
            className={s.input}
            {...register("lastName")}
          />
          {errors.lastName && (
            <span className={s.error}>{errors.lastName.message}</span>
          )}

          <input
            type="text"
            placeholder="Имя"
            className={s.input}
            {...register("firstName")}
          />
          {errors.firstName && (
            <span className={s.error}>{errors.firstName.message}</span>
          )}

          <input
            type="text"
            placeholder="Отчество"
            className={s.input}
            {...register("middleName")}
          />
          {errors.middleName && (
            <span className={s.error}>{errors.middleName.message}</span>
          )}

          <input
            type="email"
            placeholder="Email"
            className={s.input}
            {...register("email")}
          />
          {errors.email && (
            <span className={s.error}>{errors.email.message}</span>
          )}

          <input
            type="password"
            placeholder="Пароль"
            className={s.input}
            {...register("password")}
          />
          {errors.password && (
            <span className={s.error}>{errors.password.message}</span>
          )}

          <div className={s.checkboxIntern}>
            <input
              type="checkbox"
              className={s.checkboxSquare}
              {...register("conditions")}
            />
            <label>
              Я принимаю условия соглашения и ознакомился с политикой
              конфиденциальности
            </label>
          </div>
          {errors.conditions && (
            <span className={s.error}>{errors.conditions.message}</span>
          )}

          <div className={s.info}>
            <button type="submit" className={s.button}>
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
};
