import { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CompanyContext } from "../../../context/companyContext";
import { UserContext } from "../../../context/userContext";
import { companyService } from "../../../services/company";
import "./companyInfo.css";

function CompanyInfo() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { company, setCompany } = useContext(CompanyContext);

  const handleCompanyInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!company.description) {
        toast.info("Заполните все поля формы");
        return;
      }
      if (user?.id) {
        await companyService.updateCompanyInfo(user?.id, company);
        navigate(`/company/profile`);
      }
    } catch (error) {
      toast.error("Информация не обновлена");
    }
  };

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany({ ...company, [event.target.name]: event.target.value });
  };

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
