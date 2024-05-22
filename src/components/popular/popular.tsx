import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import arrow from "./../../assets/icons/arrow.svg";
import Card from "../internships/card/card";
import { internshipService } from "../../services/internship";
import { IInternship } from "../filter/filter/filter";
import "./popular.css";

function Popular() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [internships, setInternships] = useState<IInternship[]>([]);

  useEffect(() => {
    async function loadPopular() {
      const response = await internshipService.getPopularInternships();

      if (setInternships) {
        debugger;
        setInternships(response.data);
      }
    }
    loadPopular();
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
            return <Card item={item} key={item._id} />;
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
