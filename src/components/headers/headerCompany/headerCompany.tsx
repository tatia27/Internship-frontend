import { Link, Outlet, NavLink, useParams } from "react-router-dom";
import logo from "./../../../assets/icons/logo.svg";
import profile from "./../../../assets/icons/profileHeader.svg";
import "./headerCompany.css";

function HeaderCompany() {
  const { id } = useParams();

  // console.log(id)

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
                <NavLink
                  to={`/profile-company/${id}/add-internship`}
                  className="header__nav__item"
                >
                  Разместить стажировку
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/profile-company/${id}/internships`}
                  className="header__nav__item"
                >
                  Стажировки
                </NavLink>
              </li>
              <li>
                <NavLink to={`/`} className="header__nav__item">
                  Выйти
                </NavLink>
              </li>
            </ul>
            <img src={profile} alt="Профиль"></img>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderCompany;
