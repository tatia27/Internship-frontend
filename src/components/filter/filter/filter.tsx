import { useEffect, useState } from "react";
import FullCard from "../../internships/fullCard/fullCard";
import axios from "axios";
import SearchFilter from "../searchFilter/searchFilter";
import "../filter/filter.css";
import Pagination from "../pagination/pagination";

export type Internship = {
  _id: String;
  title: String;
  company: String;
  focusOfInternship: String;
  typeOfInternship: String;
  schedule: String;
  typeOfEmployment: String;
  durationOfInternship: String;
  salary: Number;
  skills: String;
  conditions: String;
  onClick: () => void;
};

function Filter() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalDocuments, setTotalDocuments] = useState<number>(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/v1/internships?page=${currentPage}`)
      .then((response) => {
        setInternships(response.data.internships);
        setTotalDocuments(response.data.total);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  console.log(totalDocuments);
  console.log(internships);

  return (
    <div className="internship">
      <div className="container">
        <div className="internship__filter">
          <SearchFilter />
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
