import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { registerService } from "../../../services/register";
import s from "./registrationCompany.module.scss";
import { useForm } from "react-hook-form";

export type CompanyForm = {
  name: string;
  email: string;
  password: string;
  conditions: boolean;
};

const schema = yup.object().shape({
  name: yup.string().required("Наименование компании обязательно"),
  email: yup
    .string()
    .email("Введите корректный email")
    .required("Email обязателен"),
  password: yup
    .string()
    .min(8, "Минимальная длина пароля 8 символов")
    .required("Пароль обязателен"),
  conditions: yup
    .boolean()
    .oneOf([true], "Вы должны принять условия соглашения")
    .required()
    .default(false),
});

export const RegistrationCompany = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: CompanyForm) => {
    try {
      await registerService.registerCompany(data);
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
        toast.error("Упс, что-то пошло не так...");
      }
    }
  };

  return (
    <div className={s.registrationCompany}>
      <div className={s.container}>
        <form
          className={s.registrationCompany__form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1>Регистрация компании</h1>

          <input
            type="text"
            placeholder="Наименование компании"
            className={s.registration__input}
            {...register("name")}
          />
          {errors.name && <p className={s.error}>{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Email"
            className={s.registration__input}
            {...register("email")}
          />
          {errors.email && <p className={s.error}>{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Пароль"
            className={s.registration__input}
            {...register("password")}
          />
          {errors.password && (
            <p className={s.error}>{errors.password.message}</p>
          )}

          <div className="checkbox-company">
            <input
              type="checkbox"
              className="checkbox__square"
              {...register("conditions")}
            />
            <label>
              Я принимаю условия соглашения и ознакомился c политикой
              конфиденциальности
            </label>
          </div>
          {errors.conditions && (
            <p className={s.error}>{errors.conditions.message}</p>
          )}

          <div className={s.form__info}>
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
