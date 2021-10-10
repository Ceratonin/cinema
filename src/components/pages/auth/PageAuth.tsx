import Btn from "../../UI/button/Button"
import Input from "../../UI/input/Input"
import "./auth.css"

const PageAuth = () => {
    return(
        <div className="App">
        <div className="authPage">
            <h2> Добро пожаловать! </h2>
            <form name="login" className="login">
                <Input type="text" placeholder="Введите логин" />
                <Input type="password" placeholder="Введите пароль" />
                <Btn>Войти</Btn>
            </form>
            </div>
        </div>
    )
}

export default PageAuth