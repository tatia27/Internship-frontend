import userIcon from "./../../../assets/icons/userCompany.svg";
import { useEffect, useState } from "react";
import "./user.css";
import axios from "axios";
import { IIntern } from "../../profile/profileIntern/profileIntern";
import { CompanyContext } from "../../../context/companyContext";

type userProps = {
  user: String;
};

function User({ user }: userProps) {
  const [intern, setIntern] = useState<IIntern>();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/v1/intern/${user}/apply-to-internship`
      )
      .then((response) => {
        setIntern(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(intern);
  return (
    <div className="user">
      <img src={userIcon} alt="Иконка пользователя"></img>
      <span>
        {intern?.firstName} {intern?.lastName}
      </span>
    </div>
  );
}

export default User;
