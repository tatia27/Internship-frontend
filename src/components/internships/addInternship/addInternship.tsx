import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import "./addInternship.css";

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
    focusOfInternship: "Frontend developer",
    schedule: "",
    typeOfEmployment: "",
    durationOfInternship: "",
    salary: 0,
    skills: "",
    conditions: "",
  });
  const [salaryActive, setSalaryActive] = useState<Boolean>(false);

  function changeInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setInternship({ ...internship, [event.target.name]: event.target.value });
  }

  function changeSelectHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setInternship({ ...internship, [event.target.name]: event.target.value });
  }

  const handleIntership = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !internship.title ||
      !internship.company ||
      !internship.focusOfInternship ||
      !internship.schedule ||
      !internship.typeOfEmployment ||
      !internship.durationOfInternship ||
      !internship.skills ||
      !internship.conditions
    ) {
      toast.info("Заполните все поля формы");
      return;
    }
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/v1/internships/`,
        internship,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(data);
      navigate("/internship/" + data.id);
    } catch (error) {
      toast.error("Стажировка не создана");
    }
  };

  // if (role !== "Company") {
  //   navigate("/main");
  // }

  return (
    <div className="resume">
      <div className="container">
        <h1 className="internship-title">Информация о стажировке</h1>
        <form
          method="post"
          className="resume-internship__form"
          onSubmit={handleIntership}
        >
          <input
            type="text"
            name="title"
            placeholder="Наименование стажировки"
            className="resume-input"
            onChange={changeInputHandler}
          />
          <select
            name="focusOfInternship"
            className="resume-input"
            onChange={changeSelectHandler}
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
            name="company"
            placeholder="Компания"
            className="resume-input"
            onChange={changeInputHandler}
          />
          <input
            type="text"
            name="durationOfInternship"
            placeholder="Длительность"
            className="resume-input"
            onChange={changeInputHandler}
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
              onChange={changeInputHandler}
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
                    onChange={changeInputHandler}
                  />
                  <label>Удалённо</label>
                </div>
                <div className="checkbox-filter">
                  <input
                    type="checkbox"
                    name="schedule"
                    value="Office"
                    className="checkbox"
                    onChange={changeInputHandler}
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
                    onChange={changeInputHandler}
                  />
                  <label>Полная</label>
                </div>
                <div className="checkbox-filter">
                  <input
                    type="checkbox"
                    name="typeOfEmployment"
                    value="Partial"
                    onChange={changeInputHandler}
                  />
                  <label>Частичная</label>
                </div>
              </form>
            </div>
          </div>
          <input
            type="text"
            name="skills"
            placeholder="Навыки"
            className="resume-input"
            onChange={changeInputHandler}
          />
          <input
            type="text"
            name="conditions"
            placeholder="Условия"
            className="resume-input"
            onChange={changeInputHandler}
          />
          <button className="resume-button">Создать</button>
        </form>
      </div>
    </div>
  );
}

export default AddInternship;
