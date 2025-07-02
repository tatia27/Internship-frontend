import user from "./../../assets/icons/addUser.svg";
import resume from "./../../assets/icons/resume.svg";
import letter from "./../../assets/icons/letter.svg";
import s from "./instructions.module.scss";

export const Instructions = () => {
  return (
    <section className={s.instructions}>
      <div className={s.container}>
        <div className={s.instructions__block}>
          <div className={s.instructions__item}>
            <img src={user} alt="Пользователь" className={s.user} />
            <span className={s.textRegister}>Зарегистрируйся на сайте</span>
          </div>
          <hr />
          <div className={s.instructions__item}>
            <img src={resume} alt="Резюме" />
            <span className={s.text}>Подай резюме</span>
          </div>
          <hr />
          <div className={s.instructions__item}>
            <img src={letter} alt="Письмо" className={s.letter} />
            <span className={s.text}>Подай заявку</span>
          </div>
        </div>
      </div>
    </section>
  );
};
