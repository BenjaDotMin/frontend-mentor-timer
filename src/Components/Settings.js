import Input from "./Input";
import CloseIcon from "../images/icons/icon-close.svg";
import "../styles/_Settings.scss";

function Settings({settings, setSettings, activeFont, setActiveFont, activeColor, setActiveColor, pomodoro, setPomodoro, shortBreak, setShortBreak, longBreak, setLongBreak, setTime, navSelected}) {

    return (
        <div className={`settings ${settings ? "active" : ""}`} onClick={() => setSettings(false)}>

            <div className="settings-content" onClick={e => e.stopPropagation()}>
                <div className="settings-header">
                    <label>Settings</label>
                    <img src={CloseIcon} alt="close" onClick={() => setSettings(false)} />
                </div>
                <div className="settings-body">
                    <p>Time (minutes)</p>
                    <div className="inputs">
                        <Input text={"pomodoro"} value={pomodoro} setPomodoro={setPomodoro} navSelected={navSelected} setTime={setTime} pomodoro={pomodoro}/>
                        <Input text={"short break"} value={shortBreak} setShortBreak={setShortBreak} navSelected={navSelected} setTime={setTime} shortBreak={shortBreak}/>
                        <Input text={"long break"} value={longBreak} setLongBreak={setLongBreak} navSelected={navSelected} setTime={setTime} longBreak={longBreak}/>
                    </div>
                    <div className="customise">
                        <label>Font</label>
                        <div className="options">
                            <div className={`option sans ${activeFont === "sans" ? "active" : ""}`} onClick={() => setActiveFont("sans")}>Aa</div>
                            <div className={`option slab ${activeFont === "slab" ? "active" : ""}`} onClick={() => setActiveFont("slab")}>Aa</div>
                            <div className={`option mono ${activeFont === "mono" ? "active" : ""}`} onClick={() => setActiveFont("mono")}>Aa</div>
                        </div>
                    </div>
                    <div className="customise">
                        <label>Color</label>
                        <div className="options">
                            <div className={`option red ${activeColor === "red" ? "selected" : ""}`} onClick={() => setActiveColor("red")}></div>
                            <div className={`option blue ${activeColor === "blue" ? "selected" : ""}`} onClick={() => setActiveColor("blue")}></div>
                            <div className={`option purple ${activeColor === "purple" ? "selected" : ""}`} onClick={() => setActiveColor("purple")}></div>
                        </div>
                    </div>
                </div> 
                <button onClick={() => setSettings(false)}>Close</button>   
            </div>
                    
       </div>
    )
}

export default Settings
