import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import currentCompany from "./../../../assets/images/student.png";
import { CompanyContext } from "../../../context/companyContext";
import { type IInternship } from "../../filter/filter/filter";
import { internshipService } from "../../../services/internship";
import User from "../user/user";
import "./allUsers.css";

function AllUsers() {
  const { internshipId } = useContext(CompanyContext);
  const [interns, setInterns] = useState<String[]>([]);
  const [internship, setInternship] = useState<IInternship>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });

    async function loadInterns() {
      const response = await internshipService.getInternsForInternship(
        internshipId
      );
      setInterns(response.data);
    }

    async function loadInternship() {
      if (internshipId) {
        debugger;
        const response = await internshipService.getInternship(internshipId);
        setInternship(response.data);
      }
    }

    loadInterns();
    loadInternship();
  }, [internshipId, navigate]);

  return (
    <div className="user-profiles">
      <div className="container">
        <div className="user-profiles__information">
          <div>
            <img src={currentCompany} alt="Логотип компании"></img>
          </div>
          <div>
            <div className="user-profiles__company">
              <h2 className="user-profiles__company__title">
                {internship?.company}
              </h2>
              <h3 className="user-profiles__company__internship">
                {internship?.title}
              </h3>
            </div>
            <div className="user-profiles__all">
              {interns.map((item) => {
                return <User item={item.toString()} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllUsers;
