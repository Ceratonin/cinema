import { Link } from "react-router-dom";
import "./err.css"

const PageErr = () => {
  return (
    <div className="errPage">
      <div className="errPage__text">
        {"Такая страница не была найдена, вернуться на "}
        <Link className="errPage__link" to="/home">
          домашнюю страницу
        </Link>
      </div>
    </div>
  );
};

export default PageErr;
