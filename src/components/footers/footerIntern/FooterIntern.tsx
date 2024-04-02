import { Link, NavLink } from "react-router-dom";
import logo from "./../../../assets/ship.svg";
import email from "./../../../assets/ic_baseline-email.svg";
import vk from "./../../../assets/vk.svg";
import "./footerIntern.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__nav">
          <div className="footer__left-part">
            <div className="footer__logo">
              <Link to="/">
                <img src={logo} alt="Логотип" />
              </Link>
              <p className="logo__text">
                сервис для поиска
                <br />и организации IT-стажировок
              </p>
            </div>

            <div className="footer__menu">
              <ul>
                <li>
                  <NavLink to="/internships">Стажировки</NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__right-part">
            <span className="footer__title">Контакты</span>
            <div className="footer__right-part__contacts">
              <p className="footer__text">internship@gmail.com</p>
              <p className="footer__text">+7 (999) 999-99-99</p>
            </div>
            <div className="footer__icons">
              <img src={email} alt="Почта" />
              <img src={vk} alt="Вконтакте" />
            </div>
          </div>
        </div>
        <p className="footer_info">© 2024 Internship portal</p>
      </div>
    </footer>
  );
}

export default Footer;
