import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "./../../../assets/icons/logo.svg";
import profile from "./../../../assets/icons/profileHeader.svg";
import { UserContext } from "../../../context/userContext";
import s from "./headerCompany.module.scss";
import { useLogout } from "../../../hooks";

export const HeaderCompany = () => {
  const navigate = useNavigate();

  const logout = useLogout();

  const navigateToProfile = () => {
    navigate("/company/profile");
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.header__menu}>
          <Link to="/">
            <img src={logo} alt="Логотип" />
          </Link>
          <div className={s.header__nav__company}>
            <ul>
              <li>
                <NavLink
                  to="/company/add-internship"
                  className="header__nav__item"
                >
                  Разместить стажировку
                </NavLink>
              </li>
              <li>
                <NavLink to="/company/internships" className={s.item}>
                  Стажировки
                </NavLink>
              </li>
              <li>
                <Link to={`/`} className={s.button} onClick={logout}>
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
