import { useEffect, useState } from "react";
import { IIntern } from "../../profile/profileIntern/profileIntern";
import userIcon from "./../../../assets/icons/userCompany.svg";
import { internService } from "../../../services/intern";
import { useNavigate } from "react-router-dom";
import "./user.css";

function User({ item }: { item: string }) {
  const [intern, setIntern] = useState<IIntern>();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadIntern() {
      debugger;
      const response = await internService.getIntern(item);
      setIntern(response.data);
    }
    loadIntern();
  }, [item]);

  return (
    <div
      className="user"
      onClick={() => navigate(`/company/profile/participants/${item}`)}
    >
      <img src={userIcon} alt="Иконка пользователя"></img>
      <span>{`${intern?.lastName} ${intern?.firstName}`}</span>
    </div>
  );
}

export default User;
