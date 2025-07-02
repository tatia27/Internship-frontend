import { NavLink } from "react-router-dom";
import { FooterContacts } from "../footerContacts/footerContacts";
import { FooterLogo } from "../footerLogo/footerLogo";
import { useLogout } from "../../../hooks";
import s from "./footerIntern.module.scss";

export const FooterIntern = () => {
  const logout = useLogout();

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footer__nav}>
          <div className={s.footer__leftPartt}>
            <FooterLogo />
            <div className={s.footer__menu}>
              <ul>
                <li>
                  <NavLink to="/internships">Стажировки</NavLink>
                </li>
                <li>
                  <NavLink to="/" onClick={logout}>
                    Выйти
                  </NavLink>
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
