import { useState } from "react";
import Nav from "./Nav";
import Clock from "./Clock";
import Settings from "./Settings";
import SettingsIcon from "../images/icons/icon-settings.svg";
import "../styles/pages/Home.scss";

function Home() {
    const [navSelected, setNavSelected] = useState(0);
    const [settings, setSettings] = useState(false);
    const [activeFont, setActiveFont] = useState("sans");
    const [activeColor, setActiveColor] = useState("red");
    const [time, setTime] = useState(1080);
    const [pomodoro, setPomodoro] = useState(18);
    const [shortBreak, setShortBreak] = useState(5);
    const [longBreak, setLongBreak] = useState(15);
    const [pause, setPause] = useState(false);   
 
    return (
        <div className="home">
            <Nav activeFont={activeFont} activeColor={activeColor} setTime={setTime} pomodoro={pomodoro} shortBreak={shortBreak} longBreak={longBreak} setPause={setPause} navSelected={navSelected} setNavSelected={setNavSelected}/>
            <Clock activeFont={activeFont} activeColor={activeColor} time={time} setTime={setTime} pause={pause} setPause={setPause}/>
            <img className="settings-button" src={SettingsIcon} alt="settings" onClick={() => setSettings(true)} />
            <Settings settings={settings} setSettings={setSettings} activeFont={activeFont} setActiveFont={setActiveFont} activeColor={activeColor} setActiveColor={setActiveColor} pomodoro={pomodoro} setPomodoro={setPomodoro} shortBreak={shortBreak} setShortBreak={setShortBreak} longBreak={longBreak} setLongBreak={setLongBreak} setTime={setTime} navSelected={navSelected}/>
        </div>
    )
}

export default Home
