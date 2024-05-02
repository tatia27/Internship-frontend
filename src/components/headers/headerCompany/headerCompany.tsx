import { Link, NavLink, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import logo from "./../../../assets/icons/logo.svg";
import profile from "./../../../assets/icons/profileHeader.svg";
import { UserContext } from "../../../context/userContext";
import "./headerCompany.css";

function HeaderCompany() {
  // const { id } = useParams();
  let navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  // console.log(id)
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
              {/* <li>
                <NavLink to={`/internships`} className="header__nav__item">
                  Стажировки
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to={`/`}
                  className="header__nav__item"
                  onClick={(event) => {
                    event.preventDefault();
                    if (localStorage.getItem("token")) {
                      localStorage.removeItem("token");
                    }
                    if (setUser) {
                      setUser(null);
                    }
                    navigate("/");
                  }}
                >
                  Выйти
                </NavLink>
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
