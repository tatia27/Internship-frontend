import userIcon from "./../../../assets/icons/userCompany.svg";
import { useEffect, useState } from "react";
import { IIntern } from "../../profile/profileIntern/profileIntern";
import { CompanyContext } from "../../../context/companyContext";
import axios from "axios";
import "./user.css";

type userProps = {
  user: String;
};

// { user }: userProps
function User() {
  const [intern, setIntern] = useState<IIntern>();

  // useEffect(() => {
  //   axios
  //     .get(
  //       `${process.env.REACT_APP_API_URL}/v1/intern/${user}/apply-to-internship`
  //     )
  //     .then((response) => {
  //       setIntern(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [user]);

  console.log(intern);
  return (
    <div className="user">
      <img src={userIcon} alt="Иконка пользователя"></img>
      <span>
        {/* {intern?.firstName} {intern?.lastName} */}Чепурная Татьяна
      </span>
    </div>
  );
}

export default User;
