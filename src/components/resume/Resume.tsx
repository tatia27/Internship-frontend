import React from "react";
import "./resume.css";

function Resume() {
  return (
    <div className="resume">
      <div className="container">
        <h1 className="resume-title">Резюме</h1>
        <form method="post" className="resume-internship__form">
          <fieldset>
            <input type="text" id="name" name="surname" placeholder="Возраст" />
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Местоположение"
            />
            <select id="education" name="Образование">
              <option value="бакалавриат">Бакалавриат</option>
              <option value="banana">Специалитет</option>
              <option value="orange">Магистратура</option>
            </select>
            <input
              type="text"
              id="educational_institution"
              name="educational_institution"
              placeholder="Учебное заведение"
            />
            <input
              type="text"
              id="hard"
              name="hard_skills"
              placeholder="Hard skills"
            />
            <input
              type="text"
              id="soft_skills"
              name="soft_skills"
              placeholder="Soft skills"
            />
          </fieldset>
          <button className="resume-button">Создать</button>
        </form>
      </div>
    </div>
  );
}

export default Resume;
