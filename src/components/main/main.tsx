import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import "./main.css";

function Main() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const navigateToInternships = () => {
    if (user?.role === "intern") {
      navigate("/intern/internships");
    } else if (user?.role === "company") {
      navigate("/company/add-internship");
    } else {
      navigate("/internships");
    }
  };

  return (
    <div className="main_part">
      <div className="container">
        <div className="main">
          {user?.role === "company" ? (
            <>
              <h1 className="main__title-uppercarse">
                Разместите IT стажировку
                <br />
                сегодня
              </h1>
              <h2 className="title-introduction">
                Вас ждут множество специалистов в сфере инновационных технологий
              </h2>
            </>
          ) : (
            <>
              <h1 className="main__title-uppercarse">
                Найди IT стажировку
                <br />
                сегодня
              </h1>
              <h2 className="title-introduction">
                Вас ждут множество вакансий в сфере инновационных технологий
              </h2>
            </>
          )}
          <button className="main__button" onClick={navigateToInternships}>
            {user?.role === "company" ? "Разместить" : "Начать поиск"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
