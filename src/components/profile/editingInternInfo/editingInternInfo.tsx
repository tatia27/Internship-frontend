import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import { internService } from "../../../services/intern";
import { AxiosError } from "axios";
import { validateEmail } from "../../registration/registrationIntern/registrationIntern";
import "./editingInternInfo.css";

export interface IUpdateUser {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
}

function EditingInternInfo() {
  const navigate = useNavigate();
  const [isUpdateUser, setIsUpdateUser] = useState<IUpdateUser>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
  });
  const { user } = useContext(UserContext);

  const handleInternInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (
        !isUpdateUser.firstName ||
        !isUpdateUser.middleName ||
        !isUpdateUser.lastName ||
        !isUpdateUser.email
      ) {
        toast.info("Заполните все поля формы");
        return;
      } else if (validateEmail(isUpdateUser.email) === false) {
        toast.info("Email должен содержать специальные символы @ .");
        return;
      }
      if (user?.id) {
        await internService.updateIntern(user?.id, isUpdateUser);
        navigate(`/intern/profile`);
      }
    } catch (error) {
      if ((error as AxiosError).response?.status === 409) {
        toast.error("Email уже зарегистрирован, используйте другой");
      } else {
        toast.error("Информация не обновлена");
      }
    }
  };

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsUpdateUser({
      ...isUpdateUser,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="companyInfo">
      <div className="container">
        <h1 className="companyInfo-title">Редактировать информацию</h1>
        <form
          method="post"
          className="companyInfo__form"
          onSubmit={handleInternInfo}
        >
          <input
            type="text"
            name="lastName"
            placeholder="Фамилия"
            className="companyInfo-input"
            onChange={changeInputHandler}
          />
          <input
            type="text"
            name="firstName"
            placeholder="Имя"
            className="companyInfo-input"
            onChange={changeInputHandler}
          />
          <input
            type="text"
            name="middleName"
            placeholder="Отчество"
            className="companyInfo-input"
            onChange={changeInputHandler}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="companyInfo-input"
            onChange={changeInputHandler}
          />
          <button className="companyInfo-button">Обновить</button>
        </form>
      </div>
    </div>
  );
}

export default EditingInternInfo;
