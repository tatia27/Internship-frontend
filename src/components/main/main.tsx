import { useNavigate } from "react-router-dom";
import "./main.css";

function Main() {
  let navigate = useNavigate();

  return (
    <div className="main_part">
      <div className="container">
        <div className="main">
          <h1 className="main__title-uppercarse">
            Найди IT стажировку
            <br />
            сегодня
          </h1>
          <h2 className="title-introduction">
            Вас ждут множество вакансий в сфере инновационных технологий
          </h2>
          <button
            className="main__button"
            onClick={() => navigate("/internships")}
          >
            Начать поиск
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
