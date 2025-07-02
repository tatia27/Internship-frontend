import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../context/userContext";
import { internService } from "../../services/intern";
import s from "./resume.module.scss";

export type Cv = {
  age: number | null;
  location: string;
  levelOfEducation: string;
  educationalInstitution: string;
  specialization: string;
  hardSkills: string;
  softSkills: string;
};

export const Resume = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [resume, setResume] = useState<Cv>({
    age: null,
    location: "",
    levelOfEducation: "Бакалавриат",
    educationalInstitution: "",
    specialization: "",
    hardSkills: "",
    softSkills: "",
  });

  const handleResume = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !resume.age ||
      !resume.location ||
      !resume.levelOfEducation ||
      !resume.educationalInstitution ||
      !resume.specialization ||
      !resume.hardSkills ||
      !resume.softSkills
    ) {
      toast.info("Заполните все поля формы");
      return;
    }

    async function loadResume() {
      try {
        if (user) {
          await internService.createResume(user?.id, resume);
        }

        navigate(`/intern/profile`);
      } catch (error) {
        toast.error("Упс, резюме не добавлено...");
      }
    }

    loadResume();
  };

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResume({ ...resume, [event.target.name]: event.target.value });
  };

  const changeSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setResume({ ...resume, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div className={s.container}>
        <h1 className={s.title}>Резюме</h1>
        <form method="post" className={s.form} onSubmit={handleResume}>
          <input
            type="text"
            name="age"
            placeholder="Возраст"
            className={s.resumeInput}
            onChange={changeInputHandler}
          />
          <input
            type="text"
            name="location"
            placeholder="Местоположение"
            className={s.resumeInput}
            onChange={changeInputHandler}
          />
          <select
            name="levelOfEducation"
            className={s.resumeInput}
            onChange={changeSelectHandler}
            defaultValue="Бакалавриат"
          >
            <option value="Основное общее образование">
              Основное общее образование
            </option>
            <option value="Среднее общее образование">
              Среднее общее образование
            </option>
            <option value="Среднее профессиональное образование">
              Среднее профессиональное образование
            </option>
            <option value="Бакалавриат">Бакалавриат</option>
            <option value="Специалитет">Специалитет</option>
            <option value="Магистратура">Магистратура</option>
            <option value="Аспирантура">Аспирантура</option>
          </select>
          <input
            type="text"
            name="educationalInstitution"
            placeholder="Учебное заведение"
            className={s.resumeInput}
            onChange={changeInputHandler}
          />
          <input
            type="text"
            name="specialization"
            placeholder="Специализация"
            className={s.resumeInput}
            onChange={changeInputHandler}
          />
          <input
            type="text"
            name="hardSkills"
            placeholder="Hard skills"
            className={s.resumeInput}
            onChange={changeInputHandler}
          />
          <input
            type="text"
            name="softSkills"
            placeholder="Soft skills"
            className="resume-input"
            onChange={changeInputHandler}
          />
          <button className={s.resumeButton}>Создать</button>
        </form>
      </div>
    </div>
  );
};
