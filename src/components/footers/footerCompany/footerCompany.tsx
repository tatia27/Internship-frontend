import { NavLink } from "react-router-dom";
import { FooterContacts } from "../footerContacts/footerContacts";
import { useLogout } from "../../../hooks";
import { FooterLogo } from "../footerLogo/footerLogo";
import s from "./footerCompany.module.scss";

export const FooterCompany = () => {
  const logout = useLogout();

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footer__nav}>
          <div className={s.footer__leftPart}>
            <FooterLogo />
            <div className={s.footer__menu}>
              <ul>
                <li>
                  <NavLink to="/addInternship">Разместить стажировку</NavLink>
                </li>
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
