import "./popular.css";
import arrow from "./../../assets/icons/arrow.svg";
import Card from "../internships/card/card";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export type Internship = {
  _id: String;
  title: String;
  company: String;
  focusOfInternship: String;
  typeOfInternship: String;
  schedule: String;
  typeOfEmployment: String;
  durationOfInternship: String;
  salary: Number;
  skills: String;
  conditions: String;
  onClick: () => void;
};

function Popular() {
  let navigate = useNavigate();
  const [internships, setInternships] = useState<Internship[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/v1/internships/")
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
          {/* {internships.map((item) => {
            console.log(item);
            return <Card key={item._id.toString()} {...item} />;
          })} */}
        </div>
        <button
          className="main-button"
          onClick={() => navigate("/internships")}
        >
          Показать больше
          <img src={arrow} alt="Cтрелка" className="main-button__arrow" />
        </button>
      </div>
    </div>
  );
}

export default Popular;
