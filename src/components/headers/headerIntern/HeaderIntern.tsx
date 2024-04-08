import { Link, Outlet, NavLink } from "react-router-dom";
import logo from "./../../../assets/icons/logo.svg";
import profile from "./../../../assets/icons/profileHeader.svg";
import "./headerIntern.css";

function HeaderIntern() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__menu">
          <Link to="/">
            <img src={logo} alt="Логотип" />
          </Link>
          <div className="header__nav__intern">
            <ul>
              <li>
                <NavLink to="/internships" className="header__nav__item">
                  Стажировки
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

export default HeaderIntern;
