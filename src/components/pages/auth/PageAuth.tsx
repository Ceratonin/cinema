import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context";
import Btn from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import "./auth.css";

const PageAuth = () => {
  const [user, setUser] = useState({
    user: "",
    pass: "",
  });

  const { setIsAuth } = useContext(AuthContext);

  const logIn = (e: any) => {
    if (user.user === "admin" && user.pass === "admin") {
      setIsAuth("admin");
      localStorage.setItem("user", "admin");
    } else if (user.user !== "" && user.pass !== "") {
      setIsAuth("user");
      localStorage.setItem("user", "user");
    }
  };

  return (
    <div className="App">
      <div className="authPage">
        <h2> Добро пожаловать! </h2>
        <form name="login" className="login">
          <Input
            type="text"
            placeholder="Введите логин"
            onChange={(e: any) => setUser({ ...user, user: e.target.value })}
          />
          <Input
            type="password"
            placeholder="Введите пароль"
            onChange={(e: any) => setUser({ ...user, pass: e.target.value })}
          />
          <Link to="/home">
            <Btn className="logInBtn" type="button" onClick={logIn}>
              Войти
            </Btn>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PageAuth;
