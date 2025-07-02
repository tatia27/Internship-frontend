import { Link, NavLink } from "react-router-dom";
import logo from "./../../../assets/icons/logo.svg";
import s from "./header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.header__menu}>
          <Link to="/">
            <img src={logo} alt="Логотип" />
          </Link>
          <div className={s.header__nav}>
            <ul>
              <li>
                <NavLink to="/internships" className={s.header__nav__item}>
                  Стажировки
                </NavLink>
              </li>
              <li>
                <NavLink to="/registration" className={s.header__nav__item}>
                  Регистрация
                </NavLink>
              </li>
              <li>
                <Link to="/login" className={s.button}>
                  Вход
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
