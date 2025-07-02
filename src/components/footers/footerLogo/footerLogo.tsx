import { Link } from "react-router-dom";
import logo from "./../../../assets/icons/logoFooter.svg";
import s from "./footerLogo.module.scss";

export const FooterLogo = () => {
  return (
    <div className={s.logo}>
      <Link to="/">
        <img src={logo} alt="Логотип" />
      </Link>
      <p className="logo__text">
        сервис для поиска
        <br />и организации IT-стажировок
      </p>
    </div>
  );
};
