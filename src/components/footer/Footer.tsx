import React from "react";
import logo from "./../../assets/ship.svg";
import email from "./../../assets/ic_baseline-email.svg";
import vk from "./../../assets/gjgjg.svg";
import whatsapp from "./../../assets/fa6-brands_square-whatsapp.svg";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__nav">
          <div className="footer__left-part">
            <div className="footer__logo">
              <a href="#">
                <img src={logo} alt="Логотип" />
              </a>
              <p className="logo__text">
                сервис для поиска
                <br />и организации IT-стажировок
              </p>
            </div>

            <div className="footer__menu">
              <ul>
                <li>
                  <a href="#">Войти</a>
                </li>
                <li>
                  <a href="#">Стажировки</a>
                </li>
                <li>
                  <a href="#">Разместить стажировку</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__right-part">
            <span className="footer__title">Контакты</span>
            <p className="footer__text">internship@gmail.com</p>
            <p className="footer__text">+7 (999) 999-99-99</p>
            <div className="footer__icons">
              <img src={email} alt="Почта" />
              <img src={vk} alt="Вконтакте" />
              <img src={whatsapp} alt="Whatsapp" />
            </div>
          </div>
        </div>
        <p className="footer_info">© 2024 Internship portal</p>
      </div>
    </footer>
  );
}

export default Footer;
