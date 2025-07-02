import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import arrow from "./../../assets/icons/arrow.svg";
import { Card } from "../internships/card/card";
import { internshipService } from "../../services/internship";
import { IInternship } from "../filter/filter/filter";
import s from "./popular.module.scss";

export const Popular = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [internships, setInternships] = useState<IInternship[]>([]);

  useEffect(() => {
    async function loadPopular() {
      const response = await internshipService.getPopularInternships();

      if (setInternships) {
        setInternships(response.data);
      }
    }
    loadPopular();
  }, []);

  const navigateToInternships = () => {
    user?.role === "intern"
      ? navigate("/intern/internships")
      : navigate("/internships");
  };

  return (
    <div className={s.container}>
      <div className={s.title}>
        <h3>Популярные стажировки</h3>
        <span>Специально для вас</span>
      </div>
      <div className={s.popular}>
        {internships.map((item) => {
          return <Card item={item} key={item._id} />;
        })}
      </div>
      <button className={s.mainButton} onClick={navigateToInternships}>
        Показать больше
        <img src={arrow} alt="Стрелка" className={s.arrow} />
      </button>
    </div>
  );
};
