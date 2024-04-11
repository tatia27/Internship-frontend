import "./registration.css";
import { useNavigate } from "react-router-dom";

function Registration() {
  let navigate = useNavigate();

  return (
    <section className="registration">
      <div className="container">
        <h3 className="registration__title">Регистрация</h3>
        <div className="registration__buttons">
          <div className="card">
            <h3>Поиск стажировки</h3>
            <button
              className="registration__button"
              onClick={() => navigate("/registration/registationIntern")}
            >
              Продолжить как стажёр
            </button>
          </div>
          <div className="card">
            <h3>Поиск сотрудников</h3>
            <button
              className="registration__button"
              onClick={() => navigate("/registration/registationCompany")}
            >
              Продолжить как компания
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
