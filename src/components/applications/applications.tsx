import { useState, useEffect, useContext } from "react";
import { type IInternship } from "../filter/filter/filter";
import { UserContext } from "../../context/userContext";
import { FullCard } from "../internships/fullCard/fullCard";
import { internshipService } from "../../services/internship";
import s from "./applications.module.scss";

export const Applications = () => {
  const [applications, setApplications] = useState<IInternship[]>([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function loadInternshipsForIntern() {
      if (user?.id) {
        const response = await internshipService.getInternshipsForIntern(
          user.id
        );

        setApplications(response.data);
      }
    }
    loadInternshipsForIntern();
  }, [user?.id]);

  return (
    <div className={s.applications}>
      <div className={s.container}>
        <div className={s.applications__my}>
          <h3 className={s.applications__title}>Отправленные заявки</h3>
          <p className={s.applications__title2}>
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
};
