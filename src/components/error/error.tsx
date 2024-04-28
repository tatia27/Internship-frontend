import { Link } from "react-router-dom";
import "./error.css";

function Error() {
  return (
    <div className="errror">
      <div className="container">
        <div className="error__wrapper">
          <span className="error__wrapper__title">404</span>
          <span className="error__wrapper__info">
            Страница не найдена.
            <Link to={"/"} className="error__wrapper__info link">
              {" "}
              Перейти на главную.
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Error;
