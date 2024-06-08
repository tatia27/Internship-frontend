import { useEffect, useState } from "react";
import FullCard from "../../internships/fullCard/fullCard";
import SearchFilter from "../searchFilter/searchFilter";
import Pagination from "../pagination/pagination";
import "../filter/filter.css";

export interface IInternship {
  _id: string;
  title: string;
  company: string;
  focusOfInternship: string;
  typeOfInternship: string;
  schedule: string;
  typeOfEmployment: string;
  durationOfInternship: string;
  salary: number;
  participants?: string[];
  skills: string;
  conditions: string;
  isActive: boolean;
  companyId: string;
  onClick: () => void;
}

function Filter() {
  const [internships, setInternships] = useState<IInternship[]>([]);
  const [totalDocuments, setTotalDocuments] = useState<number>(0);

  const [filter, setFilter] = useState<{
    schedule: string[];
    salary: string[];
    typeOfEmployment: string[];
    focusOfInternship: string[];
    currentPage: number;
  }>({
    schedule: [],
    salary: [],
    typeOfEmployment: [],
    focusOfInternship: [],
    currentPage: 1,
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <div className="internship-filter">
      <div className="container">
        <div className="internship-filter__items">
          <SearchFilter
            internships={internships}
            setInternships={setInternships}
            setFilter={setFilter}
            filter={filter}
            setTotalDocuments={setTotalDocuments}
          />
          <div>
            {internships.map((item) => {
              return <FullCard key={item._id.toString()} {...item} />;
            })}
          </div>
        </div>
        <Pagination
          filter={filter}
          setFilter={setFilter}
          totalDocuments={totalDocuments}
        />
      </div>
    </div>
  );
}

export default Filter;
