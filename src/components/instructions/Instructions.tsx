import user from "./../../assets/icons/user.svg";
import resume from "./../../assets/icons/resume.svg";
import letter from "./../../assets/icons/letter.svg";
import "./instructions.css";

function Instructions() {
  return (
    <section className="instructions">
      <div className="container">
        <div className="instructions__block">
          <div className="instructions__block__item">
            <img
              src={user}
              alt="Пользователь"
              className="instructions__block__item__user"
            />
            <span className="instructions__block__item__text">
              Зарегистрируйся на сайте
            </span>
          </div>
          <hr />
          <div className="instructions__block__item">
            <img src={resume} alt="Резюме" />
            <span className="instructions__block__item__text">
              Загрузи резюме
            </span>
          </div>
          <hr />
          <div className="instructions__block__item">
            <img
              src={letter}
              alt="Письмо"
              className="instructions__block__item__letter"
            />
            <span className="instructions__block__item__text">
              Подай заявку
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instructions;
