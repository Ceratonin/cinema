import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context";
import Btn from "./button/Button";

const NavBar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logOff = () => {
    setIsAuth("none");
    localStorage.setItem("user", "none");
  };

  let toAdmin;

  if (isAuth === "admin") {
    toAdmin = (
      <Link className="toAdmin__text" to="/admin">
        Админ
      </Link>
    );
  }

  return (
    <div className="navbar">
      <div className="toHome">
        <Link className="toHome__text" to="/home">
          На главную
        </Link>
      </div>
      <div className="toAdmin">{toAdmin}</div>
      <div className="logOff">
        <Link className="logOff_text" to="/auth">
          <Btn className="noneBtn" onClick={logOff}>
            Выйти
          </Btn>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
