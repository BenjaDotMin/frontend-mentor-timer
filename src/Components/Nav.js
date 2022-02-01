import "../styles/_Nav.scss";

function Nav({activeFont, activeColor, setTime, pomodoro, shortBreak, longBreak, setPause, navSelected, setNavSelected}) {
 
    return (
        <nav>
            <ul className={`${navSelected === 0 ? "" : navSelected === 1 ? "short-break" : "long-break"} ${activeColor === "red" ? "red" : activeColor === "blue" ? "blue" : "purple"} ${activeFont === "sans" ? "sans" : activeFont === "slab" ? "slab" : "mono"}`}>
                <li className={navSelected === 0 ? "active" : ""} onClick={() => {setNavSelected(0); setTime(pomodoro * 60); setPause(false)}}>pomodoro</li>
                <li className={navSelected === 1 ? "active" : ""} onClick={() => {setNavSelected(1); setTime(shortBreak * 60); setPause(false)}}>short break</li>
                <li className={navSelected === 2 ? "active" : ""} onClick={() => {setNavSelected(2); setTime(longBreak * 60); setPause(false)}}>long break</li>
            </ul>
        </nav>
    )
}

export default Nav
