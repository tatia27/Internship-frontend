import { useState, useContext } from "react";
import iconStudent from "./../../../assets/images/student.png";
import "./profileStudent.css";
import Favorite from "../../favorite/favorite";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import { useEffect } from "react";
import axios from "axios";

function ProfileStudent() {
  let navigate = useNavigate();
  const { internId } = useParams();
  const [student, setStudent] = useState<String>();
  // const { isAuth } = useContext(UserContext);
  // if (!isAuth) {
  //   return navigate("/login");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/v1/intern/${internId}`)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(student);

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
                Чепурная Татьяна Владимировна
              </h2>
              <p className="user-profiles__student__description">Описание</p>
              <div className="user-profiles__student__person-info">
                <p>Возраст</p>
                <p>Email</p>
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

export default ProfileStudent;
