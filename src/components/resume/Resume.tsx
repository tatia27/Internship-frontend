import "./resume.css";
import { useState } from "react";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

type ResumeForm = {
  age: Number | null;
  location: String;
  levelOfEducation: String;
  educationalInstitution: String;
  hardSkills: String;
  softSkills: String;
};
function Resume() {
  let navigate = useNavigate();
  const [resume, setResume] = useState<ResumeForm>({
    age: null,
    location: "",
    levelOfEducation: "",
    educationalInstitution: "",
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
      !resume.hardSkills ||
      !resume.softSkills
    ) {
      toast.info("Заполните все поля формы");
      return;
    }
    try {
      const { data } = await axios.patch(
        "http://localhost:8000/v1/intern/:id/resume",
        resume,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(data);
      navigate("/profileIntern");
      // navigate("/internship");
    } catch (error) {
      toast.error("Стажировка не создана");
    }
  };
  function changeInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setResume({ ...resume, [event.target.name]: event.target.value });
  }

  function changeSelectHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    setResume({ ...resume, [event.target.name]: event.target.value });
  }

  console.log(resume);

  return (
    <div className="resume">
      <div className="container">
        <h1 className="resume-title">Резюме</h1>
        <form
          method="post"
          className="resume-internship__form"
          onSubmit={handleResume}
        >
          <input
            type="text"
            name="age"
            placeholder="Возраст"
            className="resume-input"
            onChange={changeInputHandler}
          />
          <input
            type="text"
            name="location"
            placeholder="Местоположение"
            className="resume-input"
            onChange={changeInputHandler}
          />
          <select
            name="levelOfEducation"
            className="resume-input"
            onChange={changeSelectHandler}
          >
            <option value="Bachelor">Бакалавриат</option>
            <option value="Master">Специалитет</option>
            <option value="Specialist">Магистратура</option>
          </select>
          <input
            type="text"
            name="educationalInstitution"
            placeholder="Учебное заведение"
            className="resume-input"
            onChange={changeInputHandler}
          />
          <input
            type="text"
            id="hard"
            name="hardSkills"
            placeholder="Hard skills"
            className="resume-input"
            onChange={changeInputHandler}
          />
          <input
            type="text"
            id="soft_skills"
            name="softSkills"
            placeholder="Soft skills"
            className="resume-input"
            onChange={changeInputHandler}
          />
          <button className="resume-button">Создать</button>
        </form>
      </div>
    </div>
  );
}

export default Resume;
