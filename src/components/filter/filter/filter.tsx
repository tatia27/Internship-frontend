import { useEffect, useState } from "react";
import FullCard from "../../internships/fullCard/fullCard";
import SearchFilter from "../searchFilter/searchFilter";
import Pagination from "../pagination/pagination";
import { internshipService } from "../../../services/internship";
import { toast } from "react-toastify";
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
  onClick: () => void;
}

function Filter() {
  const [internships, setInternships] = useState<IInternship[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalDocuments, setTotalDocuments] = useState<number>(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });

    async function loadFilteredInternships() {
      try {
        const response = await internshipService.getFilteredInternships(
          currentPage
        );

        setInternships(response.data.internships);
        setTotalDocuments(response.data.numberOfPages);
      } catch {
        toast.error("Упс, что-то пошло не так...");
      }
    }
    loadFilteredInternships();
  }, [currentPage]);

  return (
    <div className="internship-filter">
      <div className="container">
        <div className="internship-filter__items">
          <SearchFilter
            currentPage={currentPage}
            internships={internships}
            setInternships={setInternships}
            setTotalDocuments={setTotalDocuments}
          />
          <div>
            {internships.map((item) => {
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
