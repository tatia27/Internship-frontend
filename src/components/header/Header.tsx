import React from "react";
import logo from "./../../assets/logo.svg";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__menu">
          <a href="#">
            <img src={logo} alt="Логотип" />
          </a>
          <div className="header__nav">
            <ul>
              <li>
                <a href="#">Стажировки</a>
              </li>
              <li>
                <a href="#">Разместить стажировку</a>
              </li>
              <li>
                <a href="#">Регистрация</a>
              </li>
              <li>
                <a href="#" className="header__nav-btn">
                  Войти
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
