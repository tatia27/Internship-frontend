import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import logo from "./../../assets/logo.svg";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__menu">
          <Link to="/">
            <img src={logo} alt="Логотип" />
          </Link>
          <div className="header__nav">
            <ul>
              <li>
                <NavLink to="/internships" className="header__nav__item">
                  Стажировки
                </NavLink>
              </li>
              <li>
                <NavLink to="/addInternship" className="header__nav__item">
                  Разместить стажировку
                </NavLink>
              </li>
              <li>
                <NavLink to="/registration" className="header__nav__item">
                  Регистрация
                </NavLink>
              </li>
              <li>
                <Link to="/login" className="header__nav-btn">
                  Войти
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </header>
  );
}

export default Header;
