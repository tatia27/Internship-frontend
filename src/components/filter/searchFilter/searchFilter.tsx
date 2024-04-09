import { useEffect, useState } from "react";
import "../searchFilter/searchFilter.css";
import axios from "axios";
import { Internship } from "../filter/filter";
import { toast } from "react-toastify";

interface SearchFilterProps {
  currentPage: number;
  internships: Internship[];
  setInternships: (internships: Internship[]) => void;
  setTotalDocuments: (page: number) => void;
}

function SearchFilter({
  currentPage,
  internships,
  setInternships,
  setTotalDocuments,
}: SearchFilterProps) {
  const [focusOfInternship, setFocusOfInternship] = useState<String[]>([]);
  const [shedule, setShedule] = useState<String[]>([]);
  const [typeOfEmployment, setTypeOfEmployment] = useState<String[]>([]);

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.name === "focusOfInternship") {
      setFocusOfInternship([...focusOfInternship, event.target.value]);
    }
    if (event.target.name === "schedule") {
      setShedule([...shedule, event.target.value]);
    }
    if (event.target.name === "typeOfEmployment") {
      setTypeOfEmployment([...typeOfEmployment, event.target.value]);
    }
  }

  const url = `http://localhost:8000/v1/internships?page=${currentPage}&focusOfInternship=${focusOfInternship.toString()}&schedule=${shedule.toString()}&typeOfEmployment=${typeOfEmployment.toString()}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setInternships(response.data.internships);
        setTotalDocuments(response.data.numberOfPages);
      })
      .catch((error) => {
        toast.error("Упс, не удалось выполнить запрос...");
      });
  }, [
    setTotalDocuments,
    setInternships,
    currentPage,
    focusOfInternship,
    shedule,
    typeOfEmployment,
    url,
  ]);

  function resetFilter() {
    setFocusOfInternship([]);
    setShedule([]);
    setTypeOfEmployment([]);
  }

  return (
    <div className="filter">
      <h3 className="filter_title">Специализация</h3>
      <form action="" className="specialization">
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="focusOfInternship"
            value="Frontend developer"
            onChange={changeHandler}
          />
          <label>Frontend-разработчик</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="focusOfInternship"
            value="Backend developer"
            onChange={changeHandler}
          />
          <label>Backend-разработчик</label>
        </div>
        <div className="checkbox-filter">
          <input type="checkbox" name="mobile" value="Mobile developer" />
          <label>Мобильный разработчик</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="focusOfInternship"
            value="System administrator"
            onChange={changeHandler}
          />
          <label>Системный администратор</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="focusOfInternship"
            value="Game developer"
            onChange={changeHandler}
          />
          <label>Разработчик игр</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="focusOfInternship"
            value="Teaster"
            onChange={changeHandler}
          />
          <label>Тестировщик</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="focusOfInternship"
            value="Analyst"
            onChange={changeHandler}
          />
          <label>Аналитик</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="focusOfInternship"
            value="Designer"
            onChange={changeHandler}
          />
          <label>Дизайнер</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="focusOfInternship"
            value="Manager"
            onChange={changeHandler}
          />
          <label>Менеджер</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="focusOfInternship"
            value="Recruiter"
            onChange={changeHandler}
          />
          <label>Рекрутер</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="focusOfInternship"
            value="Other"
            onChange={changeHandler}
          />
          <label>Другое</label>
        </div>
      </form>
      <h3 className="filter_title">Вид стажировки</h3>
      <form action="" className="direction">
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="paid"
            value="paid"
            onChange={changeHandler}
          />
          <label>Оплачиваемая</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="unpaid"
            value="unpaid"
            onChange={changeHandler}
          />
          <label>Неоплачиваемая</label>
        </div>
      </form>
      <h3 className="filter_title">График работы</h3>
      <form action="" className="work">
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="schedule"
            value="Remotely"
            onChange={changeHandler}
          />
          <label>Удалённо</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="schedule"
            value="Office"
            onChange={changeHandler}
          />
          <label>В офисе</label>
        </div>
      </form>
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
      <a href="#" className="filter-reset" onClick={resetFilter}>
        Сбросить всё
      </a>
    </div>
  );
}

export default SearchFilter;
