import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import currentCompany from "./../../../assets/images/student.png";
import { CompanyContext } from "../../../context/companyContext";
import { type IInternship } from "../../filter/filter/filter";
import { internshipService } from "../../../services/internship";
import { User } from "../user/user";
import s from "./allUsers.module.scss";

export const AllUsers = () => {
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
        const response = await internshipService.getInternship(internshipId);
        setInternship(response.data);
      }
    }

    loadInterns();
    loadInternship();
  }, [internshipId, navigate]);

  return (
    <div>
      <div className={s.container}>
        <div className={s.information}>
          <div>
            <img src={currentCompany} alt="Логотип компании"></img>
          </div>
          <div>
            <div>
              <h2 className={s.title}>{internship?.company}</h2>
              <h3 className={s.internship}>{internship?.title}</h3>
            </div>
            <div className={s.all}>
              {interns.map((item) => {
                return <User item={item.toString()} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
