import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import arrow from "./../../assets/icons/arrow.svg";
import Card from "../internships/card/card";
import axios from "axios";
import "./popular.css";

function Popular() {
  let navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [internships, setInternships] = useState<[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/v1/internships/popular`)
      .then((response) => {
        setInternships(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="popular">
      <div className="container">
        <div className="popular__title">
          <h3>Популярные стажировки</h3>
          <span>Специально для вас</span>
        </div>
        <div className="popular__interns">
          {internships.map((item) => {
            return <Card key={item} id={item} />;
          })}
        </div>
        <button
          className="main-button"
          onClick={() =>
            user?.role === "intern"
              ? navigate("/intern/internships")
              : navigate("/internships")
          }
        >
          Показать больше
          <img src={arrow} alt="Стрелка" className="main-button__arrow" />
        </button>
      </div>
    </div>
  );
}

export default Popular;
