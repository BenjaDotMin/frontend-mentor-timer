import "../styles/_Header.scss";
import logo from "../images/logo.svg"

function Header() {
    return (
        <header className="header">
           <img src={logo} alt="pomodoro" />           
        </header>
    )
}

export default Header
