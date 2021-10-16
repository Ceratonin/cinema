import React, { createContext } from "react";

export interface IIsAuth<T> {
  isAuth: T;
  setIsAuth: React.Dispatch<React.SetStateAction<T>>;
}

const AuthContext = createContext<IIsAuth<string>>({
  isAuth: "",
  setIsAuth: () => "",
});

export default AuthContext;
