import { createContext } from "react"

const AuthContext = createContext<{
    isAuth: any,
    setIsAuth: any,
} | null>(null);

export default AuthContext