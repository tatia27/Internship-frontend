import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../../context/userContext";
import { internshipService } from "../../../services/internship";
import s from "./addInternship.module.scss";

export type InternshipForm = {
  title: string;
  company: string;
  focusOfInternship: string;
  schedule: string;
  typeOfEmployment: string;
  durationOfInternship: string;
  salary: number | null;
  skills: string;
  conditions: string;
};

const OPTIONS = [
  {
    value: "Frontend developer",
    title: "Frontend-разработчик",
  },
  {
    value: "Backend developer",
    title: "Backend-разработчик",
  },
  {
    value: "Mobile developer",
    title: "Мобильный разработчик",
  },
  {
    value: "System administrator",
    title: "Системный администартор",
  },
  {
    value: "Game developer",
    title: "Разработчик игр",
  },
  {
    value: "Teaster",
    title: "Тестировщик",
  },
  {
    value: "Analyst",
    title: "Аналитик",
  },
  {
    value: "Designer",
    title: "Дизайнер",
  },
  {
    value: "Manager",
    title: "Менеджер",
  },
  {
    value: "Recruiter",
    title: "Рекрутер",
  },
  {
    value: "Other",
    title: "Другое",
  },
];

export const AddInternship = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [internship, setInternship] = useState<InternshipForm>({
    title: "",
    company: "",
    focusOfInternship: "Frontend developer",
    schedule: "",
    typeOfEmployment: "",
    durationOfInternship: "",
    salary: null,
    skills: "",
    conditions: "",
  });
  const [salaryActive, setSalaryActive] = useState<Boolean>(false);

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInternship({ ...internship, [event.target.name]: event.target.value });
  };

  const changeSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInternship({ ...internship, [event.target.name]: event.target.value });
  };

  const handleIntership = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
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

      if (user?.id) {
        await internshipService.addInternship(user?.id, internship);
      }

      navigate(`/company/profile`);
    } catch (error) {
      toast.error("Стажировка не создана");
    }
  };

  return (
    <div>
      <div className={s.container}>
        <h1 className={s.title}>Информация о стажировке</h1>
        <form method="post" className={s.form} onSubmit={handleIntership}>
          <input
            type="text"
            name="title"
            placeholder="Наименование стажировки"
            className={s.resumeInput}
            onChange={changeInputHandler}
          />
          <select
            name="focusOfInternship"
            className={s.resumeInput}
            onChange={changeSelectHandler}
          >
            {OPTIONS.map(({ title, value }) => {
              return (
                <option key={value} value={value}>
                  {title}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            name="company"
            placeholder="Компания"
            className={s.resumeInput}
            onChange={changeInputHandler}
          />
          <input
            type="text"
            name="durationOfInternship"
            placeholder="Длительность"
            className={s.resumeInput}
            onChange={changeInputHandler}
          />
          <div className={s.form__salary}>
            <div className={s.salary__margin}>
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
              className={s.resumeInput}
              onChange={changeInputHandler}
              disabled={!salaryActive}
            />
          </div>
          <div className={s.checkboxFilterInternship}>
            <div>
              <h3>График работы</h3>
              <form action="">
                <div className={s.checkboxFilterInternship}>
                  <input
                    type="checkbox"
                    value="Remotely"
                    name="schedule"
                    className="checkbox"
                    onChange={changeInputHandler}
                  />
                  <label>Удалённо</label>
                </div>
                <div className={s.checkboxFilterInternship}>
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
                <div className={s.checkboxFilterInternship}>
                  <input
                    type="checkbox"
                    name="typeOfEmployment"
                    value="Full"
                    onChange={changeInputHandler}
                  />
                  <label>Полная</label>
                </div>
                <div className={s.checkboxFilterInternship}>
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
            className={s.resumeInput}
            onChange={changeInputHandler}
          />
          <input
            type="text"
            name="conditions"
            placeholder="Условия"
            className={s.resumeInput}
            onChange={changeInputHandler}
          />
          <button className={s.button}>Создать</button>
        </form>
      </div>
    </div>
  );
};
