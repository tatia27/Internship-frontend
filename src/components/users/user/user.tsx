import { useEffect, useState } from "react";
import { IIntern } from "../../profile/profileIntern/profileIntern";
import userIcon from "./../../../assets/icons/userCompany.svg";
import { internService } from "../../../services/intern";
import { useNavigate } from "react-router-dom";
import s from "./user.module.scss";

export const User = ({ item }: { item: string }) => {
  const [intern, setIntern] = useState<IIntern>();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadIntern() {
      const response = await internService.getIntern(item);
      setIntern(response.data);
    }
    loadIntern();
  }, [item]);

  return (
    <div
      className={s.user}
      onClick={() => navigate(`/company/profile/participants/${item}`)}
    >
      <img src={userIcon} alt="Иконка пользователя"></img>
      <span>{`${intern?.lastName} ${intern?.firstName}`}</span>
    </div>
  );
};
