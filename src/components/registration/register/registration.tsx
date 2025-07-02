import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import s from "./registration.module.scss";

export const Registration = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <section className={s.registration}>
      <div className={s.container}>
        <h3 className={s.registration__title}>Регистрация</h3>
        <div className={s.registration__buttons}>
          <div className={s.card}>
            <h3>Поиск стажировки</h3>
            <button
              className={s.button}
              onClick={() => navigate("/registration/registation-intern")}
            >
              Продолжить как стажёр
            </button>
          </div>
          <div className={s.card}>
            <h3>Поиск сотрудников</h3>
            <button
              className={s.button}
              onClick={() => navigate("/registration/registation-company")}
            >
              Продолжить как компания
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
