import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <div className="navbar">
        <div className="logOff">
          <Link className="logOff_text" to="/auth">Выйти</Link>
        </div>
      </div>
    )
}

export default NavBar;