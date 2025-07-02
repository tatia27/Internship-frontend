import { NavLink } from "react-router-dom";
import { FooterContacts } from "../footerContacts/footerContacts";
import { FooterLogo } from "../footerLogo/footerLogo";
import s from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footer__nav}>
          <div className={s.footer__leftPart}>
            <FooterLogo />
            <div className={s.footer__menu}>
              <ul>
                <li>
                  <NavLink to="/internships">Стажировки</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Войти</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <FooterContacts />
        </div>
      </div>
    </footer>
  );
};
