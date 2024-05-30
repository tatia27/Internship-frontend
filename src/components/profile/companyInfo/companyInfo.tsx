import { useContext, useState } from "react";
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
  const [isTitle, setIsTitle] = useState<Boolean>(false);

  const handleCompanyInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!company.description || !company.description) {
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
          <div className="companyInfo__form__new-title">
            <div className="companyInfo__form_new-title__checkbox">
              <input
                type="checkbox"
                className="checkbox"
                onChange={() => setIsTitle(!isTitle)}
              />
              <span>Исправить</span>
            </div>

            <input
              type="text"
              name="name"
              placeholder="Наименование компании"
              className="companyInfo-input"
              disabled={!isTitle}
              onChange={changeInputHandler}
            />
          </div>
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
