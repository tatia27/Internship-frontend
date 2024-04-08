import { Link, NavLink } from "react-router-dom";
import logo from "./../../../assets/icons/logoFooter.svg";
import "./footerIntern.css";
import FooterContacts from "../footerContacts/footerContacts";

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
          <FooterContacts />
        </div>
        <p className="footer_info">© 2024 Internship portal</p>
      </div>
    </footer>
  );
}

export default Footer;
