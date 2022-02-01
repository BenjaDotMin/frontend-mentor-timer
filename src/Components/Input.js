import { useRef } from "react";
import IncreaseIcon from "../images/icons/icon-arrow-up.svg";
import DecreaseIcon from "../images/icons/icon-arrow-down.svg";
import "../styles/_Input.scss";

function Nav({text, value, setPomodoro, setShortBreak, setLongBreak, navSelected, setTime, pomodoro, shortBreak, longBreak}) {
    const input = useRef(null); 

    const updateValue = v => {
        setPomodoro && setPomodoro(v * 60);  
        setShortBreak && setShortBreak(v * 60);
        setLongBreak && setLongBreak(v * 60);         
    }

    const incrementValue = v => {
        if(v < 59){
            setPomodoro && setPomodoro(v += 1);  
            setShortBreak && setShortBreak(v += 1);
            setLongBreak && setLongBreak(v += 1);              
            navSelected === 0 && pomodoro && setTime((pomodoro + 1) * 60);
            navSelected === 1 && shortBreak && setTime((shortBreak + 1) * 60);
            navSelected === 2 && longBreak && setTime((longBreak + 1) * 60); 
        }       
    }
   
    const decrementValue = v => {
        if(v > 0){
            setPomodoro && setPomodoro(v -= 1);  
            setShortBreak && setShortBreak(v -= 1);
            setLongBreak && setLongBreak(v -= 1);               
            navSelected === 0 && pomodoro && setTime((pomodoro - 1) * 60);
            navSelected === 1 && shortBreak && setTime((shortBreak - 1) * 60);
            navSelected === 2 && longBreak && setTime((longBreak - 1) * 60); 
        }                   
    }

    return (
        <div className="input">
            <label htmlFor={text}>{text}</label>
            <input type="number" name={text} id={text} value={value} ref={input} onChange={e => updateValue(input.current.valueAsNumber)}/>
            <button className="increase" onClick={() => incrementValue(input.current.valueAsNumber)}><img src={IncreaseIcon} alt="increase" /></button>
            <button className="decrease" onClick={() => decrementValue(input.current.valueAsNumber)}><img src={DecreaseIcon} alt="decrease" /></button>
        </div>
    )
}

export default Nav
