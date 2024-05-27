import { useState, useEffect, useContext } from "react";
import { type IInternship } from "../filter/filter/filter";
import { UserContext } from "../../context/userContext";
import FullCard from "../internships/fullCard/fullCard";
import { internshipService } from "../../services/internship";
import "./applications.css";

function Applications() {
  const [applications, setApplications] = useState<IInternship[]>([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function loadInternshipsForIntern() {
      if (user?.id) {
        debugger;
        const response = await internshipService.getInternshipsForIntern(
          user.id
        );

        setApplications(response.data);
      }
    }
    loadInternshipsForIntern();
  }, [user?.id]);

  return (
    <div className="applications">
      <div className="container">
        <div className="intern-applications">
          <h3 className="intern-applications__title">Отправленные заявки</h3>
          <p className="applications__title">
            Здесь будут отображаться заявки на стажировку, на которые вы
            отклкинитесь. Скоро с вами свяжутся, вам придёт письмо на почту.
          </p>
          <div>
            {applications.map((item) => {
              return <FullCard key={item._id.toString()} {...item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applications;
