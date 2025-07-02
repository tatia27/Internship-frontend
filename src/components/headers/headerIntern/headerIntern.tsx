import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import profile from "./../../../assets/icons/profileHeader.svg";
import logo from "./../../../assets/icons/logo.svg";
import s from "./headerIntern.module.scss";
import { useLogout } from "../../../hooks";

export const HeaderIntern = () => {
  const navigate = useNavigate();

  const logout = useLogout();
  const navigateToProfile = () => {
    navigate("/intern/profile");
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.header__menu}>
          <Link to="/">
            <img src={logo} alt="Логотип" />
          </Link>
          <div className={s.header__nav__intern}>
            <ul>
              <li>
                <NavLink
                  to="/intern/my-applications"
                  className={s.header__nav__item}
                >
                  Мои заявки
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/intern/internships"
                  className={s.header__nav__item}
                >
                  Стажировки
                </NavLink>
              </li>
              <li>
                <Link to="/" className={s.header__nav__item} onClick={logout}>
                  Выйти
                </Link>
              </li>
            </ul>
            <img
              src={profile}
              alt="Профиль"
              onClick={navigateToProfile}
              className={s.profile}
            ></img>
          </div>
        </div>
      </div>
    </header>
  );
};
