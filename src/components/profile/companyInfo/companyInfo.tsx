import { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { CompanyContext } from "../../../context/companyContext";
import { UserContext } from "../../../context/userContext";
import axios from "axios";
import "./companyInfo.css";

export type CompanyInformation = {
  title: String;
  description: String;
};

function CompanyInfo() {
  let navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { company, setCompany } = useContext(CompanyContext);
  // const { id } = useParams();

  const handleCompanyInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!company.description) {
        toast.info("Заполните все поля формы");
        return;
      }
      const { data } = await axios.patch(
        `${process.env.REACT_APP_API_URL}/v1/company/${user?.id}`,
        company,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      navigate(`/company/profile`);
    } catch (error) {
      toast.error("Информация не обновлена");
    }
  };

  function changeInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setCompany({ ...company, [event.target.name]: event.target.value });
  }

  return (
    <div className="companyInfo">
      <div className="container">
        <h1 className="companyInfo-title">Обновить информацию</h1>
        <form
          method="post"
          className="companyInfo__form"
          onSubmit={handleCompanyInfo}
        >
          <input
            type="text"
            name="name"
            placeholder="Наименование компании"
            className="companyInfo-input"
            onChange={changeInputHandler}
          />
          <input
            type="text"
            name="description"
            placeholder="Описание"
            className="companyInfo-input"
            onChange={changeInputHandler}
          />
          <button className="companyInfo-button">Обновить</button>
        </form>
      </div>
    </div>
  );
}

export default CompanyInfo;
