import "./popular.css";
import arrow from "./../../assets/Arrow.svg";
import Card from "../internships/card/card";
import { Internship } from "../filter/Filter";
import { useNavigate } from "react-router-dom";

function Popular() {
  let navigate = useNavigate();
  // console.log(props);
  return (
    <div className="popular">
      <div className="container">
        <div className="popular__title">
          <h3>Популярные стажировки</h3>
          <span>Специально для вас</span>
        </div>
        <div className="popular__interns">
          {/* {props.map((item) => {
            console.log(item);
            return <FullCard key={item._id.toString()} {...item} />;
          })} */}
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
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
