import { useEffect, useState } from "react";
import FullCard from "../../internships/fullCard/fullCard";
import axios from "axios";
import SearchFilter from "../searchFilter/searchFilter";
import "../filter/filter.css";
import Pagination from "../pagination/pagination";

export interface Internship {
  _id: string;
  title: string;
  company: string;
  focusOfInternship: string;
  typeOfInternship: string;
  schedule: string;
  typeOfEmployment: string;
  durationOfInternship: string;
  salary: number;
  skills: string;
  conditions: string;
  onClick: () => void;
}

function Filter() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalDocuments, setTotalDocuments] = useState<number>(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/v1/internships?page=${currentPage}`)
      .then((response) => {
        setInternships(response.data.internships);
        setTotalDocuments(response.data.numberOfPages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="internship">
      <div className="container">
        <div className="internship__filter">
          <SearchFilter
            currentPage={currentPage}
            internships={internships}
            setInternships={setInternships}
            setTotalDocuments={setTotalDocuments}
          />
          <div>
            {internships.map((item) => {
              console.log(item);
              return <FullCard key={item._id.toString()} {...item} />;
            })}
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalDocuments={totalDocuments}
        />
      </div>
    </div>
  );
}

export default Filter;
