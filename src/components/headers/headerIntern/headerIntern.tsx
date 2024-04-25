import { Link, NavLink, useNavigate } from "react-router-dom";
import profile from "./../../../assets/icons/profileHeader.svg";
import logo from "./../../../assets/icons/logo.svg";
import "./headerIntern.css";

function HeaderIntern() {
  let navigate = useNavigate();
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
                <NavLink
                  to="/interns/:id/internships"
                  className="header__nav__item"
                >
                  Стажировки
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/`}
                  className="header__nav__item"
                  onClick={(event) => {
                    event.preventDefault();
                    if (localStorage.getItem("token")) {
                      localStorage.removeItem("token");
                    }
                    navigate("/");
                  }}
                >
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

export default HeaderIntern;
