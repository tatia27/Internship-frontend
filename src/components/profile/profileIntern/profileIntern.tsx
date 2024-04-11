import { useState, useContext } from "react";
import iconStudent from "./../../../assets/images/student.png";
import Favorite from "../../favorite/favorite";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import { useEffect } from "react";
import "./profileIntern.css";
import axios from "axios";

type Cv = {
  age: String | null;
  location: String;
  levelOfEducation: String;
  educationalInstitution: String;
  hardSkills: String;
  softSkills: String;
};

interface IIntern {
  firstName: String;
  middleName: String;
  lastName: String;
  email: String;
  role: String;
  description: String;
  favorites: [];
  cv: Cv;
}

function ProfileIntern() {
  const [intern, setIntern] = useState<IIntern>();
  let navigate = useNavigate();
  const { id } = useParams();

  // const { isAuth } = useContext(UserContext);
  // if (!isAuth) {
  //   return navigate("/login");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/v1/intern/${id}`)
      .then((response) => {
        setIntern(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="user-profile">
      <div className="container">
        <div className="user-profiles__info">
          <div>
            <img src={iconStudent} alt="Иконка пользователя"></img>
            <button
              className="button-resume"
              onClick={() => navigate("/profileIntern/resume")}
            >
              Загрузить резюме
            </button>
          </div>
          <div className="user-profiles__wrapper">
            <div className="user-profiles__student">
              <h2 className="user-profiles__student__title">
                {`${intern?.lastName} ${intern?.firstName} ${intern?.middleName}`}
              </h2>
              <p className="user-profiles__student__description">Описание</p>
              <div className="user-profiles__student__person-info">
                <p>Возраст</p>
                <p>{intern?.email}</p>
                <p>Местоположение</p>
                <p>Образование</p>
                <p>Специализация</p>
              </div>
            </div>
          </div>
        </div>
        <div className="user-profile__skills">
          <div className="skills">
            <h4 className="skills__hard-soft">Hard Skills</h4>
          </div>
          <div className="skills">
            <h4 className="skills__hard-soft">Soft Skills</h4>
          </div>
        </div>
        <Favorite></Favorite>
      </div>
    </div>
  );
}

export default ProfileIntern;
