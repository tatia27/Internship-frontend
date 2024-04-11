import { NavLink } from "react-router-dom";
import "./footerCompany.css";
import FooterContacts from "../footerContacts/footerContacts";
import FooterLogo from "../footerLogo/footerLogo";

function FooterComapny() {
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
                  <NavLink to="/addInternship">Разместить стажировку</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <FooterContacts />
        <p className="footer_info">© 2024 Internship portal</p>
      </div>
    </footer>
  );
}

export default FooterComapny;
