import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/NavBar";
import AuthContext from "./context";
import "./styles/App.css";

const App = () => {
  const [isAuth, setIsAuth] = useState("none");

  useEffect(() => {
    if (localStorage.getItem("user") === "admin") {
      setIsAuth("admin");
    } else if (localStorage.getItem("user") === "user") {
      setIsAuth("user");
    } else {
      setIsAuth("none");
    }
  }, [isAuth]);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
