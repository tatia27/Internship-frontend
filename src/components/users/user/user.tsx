import user from "./../../assets/icons/user.svg";
import "./user.css";

function User() {
  return (
    <div className="user">
      <img src={user} alt="Иконка пользователя"></img>
      <span>Чепурная Татьяна</span>
    </div>
  );
}

export default User;
