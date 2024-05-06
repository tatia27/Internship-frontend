import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "./../../../assets/icons/logo.svg";
import profile from "./../../../assets/icons/profileHeader.svg";
import { UserContext } from "../../../context/userContext";
import "./headerCompany.css";

function HeaderCompany() {
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

  const navigateToProfile = () => {
    navigate("/company/profile");
  };

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
                  to={`/company/add-internship`}
                  className="header__nav__item"
                >
                  Разместить стажировку
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/company/internships"
                  className="header__nav__item"
                >
                  Стажировки
                </NavLink>
              </li>
              <li>
                <Link to={`/`} className="header__nav__item" onClick={logout}>
                  Выйти
                </Link>
              </li>
            </ul>
            <img src={profile} alt="Профиль" onClick={navigateToProfile}></img>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderCompany;
