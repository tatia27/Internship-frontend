import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import s from "./main.module.scss";

export const Main = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

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
    <div className={s.mainPart}>
      <div className={s.container}>
        <div className={s.main}>
          {user?.role === "company" ? (
            <>
              <h1 className={s.main__title}>
                Разместите IT стажировку
                <br />
                сегодня
              </h1>
              <h2 className={s.main__introduction}>
                Вас ждут множество специалистов в сфере инновационных технологий
              </h2>
            </>
          ) : (
            <>
              <h1 className={s.main__title}>
                Найди IT стажировку
                <br />
                сегодня
              </h1>
              <h2 className={s.main__introduction}>
                Вас ждут множество вакансий в сфере инновационных технологий
              </h2>
            </>
          )}
          <button className={s.button} onClick={navigateToInternships}>
            {user?.role === "company" ? "Разместить" : "Начать поиск"}
          </button>
        </div>
      </div>
    </div>
  );
};
