import "./user.css";
import user from "./../../assets/use.svg";

function User() {
  return (
    <div className="user">
      <img src={user} alt="Иконка пользователя"></img>
      <span>Чепурная Татьяна</span>
    </div>
  );
}

export default User;
