import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import FooterContacts from "../footerContacts/footerContacts";
import FooterLogo from "../footerLogo/footerLogo";
import "./footerCompany.css";

function FooterComapny() {
  let navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const logout = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
    if (setUser) {
      setUser(null);
    }
    navigate("/");
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__nav">
          <div className="footer__left-part">
            <FooterLogo />
            <div className="footer__menu">
              <ul>
                <li>
                  <NavLink to={`/`} onClick={logout}>
                    Выйти
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/internships">Стажировки</NavLink>
                </li>
                <li>
                  <NavLink to="/addInternship">Разместить стажировку</NavLink>
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

export default FooterComapny;
