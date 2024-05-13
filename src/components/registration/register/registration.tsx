import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./registration.css";

function Registration() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <section className="registration">
      <div className="container">
        <div className="registration__content">
          <h3 className="registration__title">Регистрация</h3>
          <div className="registration__buttons">
            <div className="card">
              <h3>Поиск стажировки</h3>
              <button
                className="registration__button"
                onClick={() => navigate("/registration/registation-intern")}
              >
                Продолжить как стажёр
              </button>
            </div>
            <div className="card">
              <h3>Поиск сотрудников</h3>
              <button
                className="registration__button"
                onClick={() => navigate("/registration/registation-company")}
              >
                Продолжить как компания
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
