import { useEffect, useState } from "react";
import { IIntern } from "../../profile/profileIntern/profileIntern";
import userIcon from "./../../../assets/icons/userCompany.svg";
import { internService } from "../../../services/intern";
import "./user.css";

function User({ item }: { item: string }) {
  const [intern, setIntern] = useState<IIntern>();

  useEffect(() => {
    async function loadIntern() {
      const response = await internService.getIntern(item);
      setIntern(response.data);
    }
    loadIntern();
  }, [item]);

  return (
    <div className="user">
      <img src={userIcon} alt="Иконка пользователя"></img>
      <span>{`${intern?.lastName} ${intern?.firstName}`}</span>
    </div>
  );
}

export default User;
