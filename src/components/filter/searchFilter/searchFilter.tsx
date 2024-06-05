import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IInternship } from "../filter/filter";
import "../searchFilter/searchFilter.css";
import axios from "axios";

type Filter = {
  schedule: string[];
  salary: string[];
  typeOfEmployment: string[];
  focusOfInternship: string[];
  currentPage: number;
};

type SearchFilterProps = {
  internships: IInternship[];
  setInternships: (internships: IInternship[]) => void;
  setTotalDocuments: (page: number) => void;
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
};

function SearchFilter({
  internships,
  setInternships,
  setTotalDocuments,
  setFilter,
  filter,
}: SearchFilterProps) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/v1/internships?page=${
      filter.currentPage
    }&focusOfInternship=${filter.focusOfInternship.toString()}&schedule=${filter.schedule.toString()}&typeOfEmployment=${filter.typeOfEmployment.toString()}&salary=${filter.salary.toString()}`;

    axios
      .get(url)
      .then((response) => {
        setInternships(response.data.internships);
        setTotalDocuments(response.data.numberOfPages);
      })
      .catch(() => {
        toast.error("Упс, не удалось выполнить запрос...");
      });
  }, [setTotalDocuments, setInternships, filter]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value, checked } = event.target;

    if (name === "focusOfInternship") {
      if (checked) {
        setFilter((prev) => ({
          ...prev,
          focusOfInternship: [...prev.focusOfInternship, value],
          currentPage: 1,
        }));
      } else {
        setFilter((prev) => ({
          ...prev,
          focusOfInternship: prev.focusOfInternship.filter(
            (item) => item !== value
          ),
          currentPage: 1,
        }));
      }
    }
    if (name === "schedule") {
      if (checked) {
        setFilter((prev) => ({
          ...prev,
          schedule: [...prev.schedule, value],
          currentPage: 1,
        }));
      } else {
        setFilter((prev) => ({
          ...prev,
          schedule: prev.schedule.filter((item) => item !== value),
          currentPage: 1,
        }));
      }
    }
    if (name === "typeOfEmployment") {
      if (checked) {
        setFilter((prev) => ({
          ...prev,
          typeOfEmployment: [...prev.typeOfEmployment, value],
          currentPage: 1,
        }));
      } else {
        setFilter((prev) => ({
          ...prev,
          typeOfEmployment: prev.typeOfEmployment.filter(
            (item) => item !== value
          ),
          currentPage: 1,
        }));
      }
    }
    if (name === "salary") {
      if (checked) {
        setFilter((prev) => ({
          ...prev,
          salary: [...prev.salary, value],
          currentPage: 1,
        }));
      } else {
        setFilter((prev) => ({
          ...prev,
          salary: prev.salary.filter((item) => item !== value),
          currentPage: 1,
        }));
      }
    }
  };

  const resetFilter = () => {
    setFilter({
      schedule: [],
      salary: [],
      typeOfEmployment: [],
      focusOfInternship: [],
      currentPage: 1,
    });
    setChecked(false);
  };

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
          <input
            type="checkbox"
            name="focusOfInternship"
            value="Mobile developer"
            onChange={changeHandler}
          />
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
            name="salary"
            value="paid"
            onChange={changeHandler}
          />
          <label>Оплачиваемая</label>
        </div>
        <div className="checkbox-filter">
          <input
            type="checkbox"
            name="salary"
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
      <a href="/internships" className="filter-reset" onClick={resetFilter}>
        Сбросить всё
      </a>
    </div>
  );
}

export default SearchFilter;
