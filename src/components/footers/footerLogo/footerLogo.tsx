import { Link } from "react-router-dom";
import logo from "./../../../assets/icons/logoFooter.svg";
import "./footerLogo.css";

function FooterLogo() {
  return (
    <div className="footer__logo">
      <Link to="/">
        <img src={logo} alt="Логотип" />
      </Link>
      <p className="logo__text">
        сервис для поиска
        <br />и организации IT-стажировок
      </p>
    </div>
  );
}

export default FooterLogo;
