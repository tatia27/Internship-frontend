import { NavLink } from "react-router-dom";
import FooterContacts from "../footerContacts/footerContacts";
import FooterLogo from "../footerLogo/footerLogo";
import { useLogout } from "../../../hooks";
import "./footerIntern.css";

function FooterIntern() {
  const logout = useLogout();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__nav">
          <div className="footer__left-part">
            <FooterLogo />
            <div className="footer__menu">
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
}

export default FooterIntern;
