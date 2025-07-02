import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { type IInternship } from "../../filter/filter/filter";
import { internshipService } from "../../../services/internship";
import { ApplyButton } from "../../applyButton/applyButton";
import { UserContext } from "../../../context/userContext";
import { CompanyContext } from "../../../context/companyContext";
import s from "./internship.module.scss";

function Internship() {
  const [internship, setInternship] = useState<IInternship>();
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const { setCompany } = useContext(CompanyContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });

    async function loadInternship() {
      if (id) {
        try {
          const response = await internshipService.getInternship(id);
          setInternship(response.data);
        } catch {
          toast.error("Упс, что-то пошло не так...");
        }
      }
    }

    loadInternship();
  }, [id]);

  const handleClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
    if (internship?.companyId) {
      setCompany({
        name: "",
        description: "",
        id: internship.companyId,
      });
      navigate(`/internships/company/${internship.companyId}`);
    }
  };

  return (
    <div>
      <div className={s.container}>
        <div className={s.internship}>
          <div className={s.internship__title}>
            <h4>{internship?.title}</h4>
            <h5 onClick={handleClick} className="internship__title__company">
              {internship?.company}
            </h5>
          </div>
          <div className={s.cardInfo}>
            <div className={s.cardInfo__item}>
              <span>
                {internship?.salary !== null
                  ? "Оплачиваемая"
                  : "Неоплачиваемая"}
              </span>
            </div>
            <div className={s.cardInfo__item}>
              <span>
                {internship?.typeOfEmployment === "Full"
                  ? "Полный день"
                  : "Неполный день"}
              </span>
            </div>
            <div className={s.cardInfo__item}>
              <span>
                {internship?.schedule === "Office" ? "В офисе" : "Удалённо"}
              </span>
            </div>
          </div>
          <div className={s.internship__timeSalary}>
            <div>
              <p className={s.internship__timeSalary__title}>Длительность</p>
              <span>
                <span>{internship?.durationOfInternship}</span>
              </span>
            </div>
            <div>
              <p className={s.internship__timeSalary__title}>Зарплата</p>
              <span>
                {internship?.salary !== 0 ? `${internship?.salary} р.` : "-"}
              </span>
            </div>
          </div>
          <div className={s.internshipSkills}>
            <p className={s.internshipSkills__title}>Навыки</p>
            <ul>
              <li>{internship?.skills}</li>
            </ul>
          </div>
          <div className={s.internshipConditions}>
            <p className={s.internshipSkills__title}>Условия</p>
            <ul>
              <li>{internship?.conditions}</li>
            </ul>
          </div>
          {user?.role !== "company" ? (
            <ApplyButton id={internship?._id.toString() || ""} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Internship;
