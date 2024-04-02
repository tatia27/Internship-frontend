import { useState } from "react";
import "./addInternship.css";
import { useNavigate } from "react-router-dom";
import { Internship } from "../../filter/Filter";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";

type InternshipForm = {
  title: String;
  company: String;
  focusOfInternship: String;
  schedule: String;
  typeOfEmployment: String;
  durationOfInternship: String;
  salary: Number;
  skills: String;
  conditions: String;
};

function AddInternship() {
  let navigate = useNavigate();
  const [internship, setInternship] = useState<InternshipForm>({
    title: "",
    company: "",
    focusOfInternship: "",
    schedule: "",
    typeOfEmployment: "",
    durationOfInternship: "",
    salary: 0,
    skills: "",
    conditions: "",
  });
  const [salaryActive, setSalaryActive] = useState<Boolean>(false);

  type value = string | number | readonly string[] | undefined;
  // const [selectedItDirection, setSelectedItDirection] = useState<
  //   string | number | readonly string[] | undefined
  // >("Other");

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setInternship({ ...internship, [event.target.name]: event.target.value });
  }

  console.log(internship);

  const handleIntership = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !internship.title ||
      !internship.company ||
      !internship.focusOfInternship ||
      !internship.schedule ||
      !internship.typeOfEmployment ||
      !internship.durationOfInternship ||
      !internship.salary ||
      !internship.skills ||
      !internship.conditions
    ) {
      toast.info("Заполните все поля формы");
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:8000/v1/internships/",
        internship,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(data);
      navigate("/internship");
    } catch (error) {
      toast.error("Стажировка не создана");
    }
  };

  return (
    <div className="resume">
      <div className="container">
        <h1 className="resume-title">Информация о стажировке</h1>
        <form
          method="post"
          className="resume-internship__form"
          onSubmit={handleIntership}
        >
          <input
            type="text"
            id="name"
            name="title"
            placeholder="Наименование стажировки"
            className="resume-input"
            onChange={changeHandler}
          />
          <select
            id="education"
            name="focusOfInternship"
            className="resume-input"
          >
            <option value="Frontend developer">Frontend-разработчик</option>
            <option value="Backend developer">Backend-разработчик</option>
            <option value="Mobile developer">Мобильный разработчик</option>
            <option value="System administrator">
              Системный администартор
            </option>
            <option value="Game developer">Разработчик игр</option>
            <option value="Teaster">Тестировщик</option>
            <option value="Analyst">Аналитик</option>
            <option value="Designer">Дизайнер</option>
            <option value="Manager">Менеджер</option>
            <option value="Recruiter">Рекрутер</option>
            <option value="Other">Другое</option>
          </select>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Компания"
            className="resume-input"
            onChange={changeHandler}
          />
          <input
            type="text"
            id="time"
            name="durationOfInternship"
            placeholder="Длительность"
            className="resume-input"
            onChange={changeHandler}
          />
          <div className="resume-internship__form__salary">
            <div className="resume-internship__form__salary__margin">
              <input
                type="checkbox"
                className="checkbox"
                onChange={() => setSalaryActive(!salaryActive)}
              />
              <span>Оплачиваемая</span>
            </div>

            <input
              type="number"
              name="salary"
              placeholder="Зарплата"
              className="resume-input"
              onChange={changeHandler}
              disabled={!salaryActive}
            />
          </div>
          <div className="checkbox-filter-internship">
            <div>
              <h3 className="filter_title">График работы</h3>
              <form action="" className="work">
                <div className="checkbox-filter">
                  <input
                    type="checkbox"
                    value="Remotely"
                    name="schedule"
                    className="checkbox"
                    onChange={changeHandler}
                  />
                  <label>Удалённо</label>
                </div>
                <div className="checkbox-filter">
                  <input
                    type="checkbox"
                    name="schedule"
                    value="Office"
                    className="checkbox"
                    onChange={changeHandler}
                  />
                  <label>В офисе</label>
                </div>
              </form>
            </div>
            <div>
              <h3 className="filter_title">Тип занятости</h3>
              <form action="" className="work_time">
                <div className="checkbox-filter">
                  <input
                    type="checkbox"
                    name="typeOfEmployment"
                    value="Full"
                    onChange={changeHandler}
                  />
                  <label>Полная</label>
                </div>
                <div className="checkbox-filter">
                  <input
                    type="checkbox"
                    name="typeOfEmployment"
                    value="Partial"
                    onChange={changeHandler}
                  />
                  <label>Частичная</label>
                </div>
              </form>
            </div>
          </div>
          <input
            type="text"
            id="skills"
            name="skills"
            placeholder="Навыки"
            className="resume-input"
            onChange={changeHandler}
          />
          <input
            type="text"
            id="conditions"
            name="conditions"
            placeholder="Условия"
            className="resume-input"
            onChange={changeHandler}
          />
          <button className="resume-button">Создать</button>
        </form>
      </div>
    </div>
  );
}

export default AddInternship;
