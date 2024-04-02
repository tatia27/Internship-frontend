import { Link, Outlet, NavLink } from "react-router-dom";
import logo from "./../../../assets/logo.svg";
import profile from "./../../../assets/profile.svg";
import "./headerCompany.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__menu">
          <Link to="/">
            <img src={logo} alt="Логотип" />
          </Link>
          <div className="header__nav__company">
            <ul>
              <li>
                <NavLink to="/internships" className="header__nav__item">
                  Стажировки
                </NavLink>
              </li>
              <li>
                <NavLink to="/addInternship" className="header__nav__item">
                  Разместить стажировку
                </NavLink>
              </li>
            </ul>
            <img src={profile} alt="Профиль"></img>
          </div>
        </div>
      </div>
      <Outlet />
    </header>
  );
}

export default Header;
