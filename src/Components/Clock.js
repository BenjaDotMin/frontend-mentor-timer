import { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import moment from "moment";
import "../styles/_Clock.scss";

function Clock({activeFont, activeColor, time, setTime, pause, setPause}) {
    const [start, setStart] = useState(false); 
    const [reset, setReset] = useState(false); 
    const [size, setSize] = useState(341); 
    
    const resized = () => window.innerWidth <= 350 ? setSize(210) : window.innerWidth <= 560 ? setSize(250) : setSize(341);

    useEffect(() => {
        window.addEventListener("resize", resized);   
        resized(); 
        return () => window.removeEventListener("resize", resized);      
    }, []);    

    return (
        <div className="clock">
          
            <div className={`clock-outer ${activeColor === "red" ? "red" : activeColor === "blue" ? "blue" : "purple"} ${activeFont === "sans" ? "sans" : activeFont === "slab" ? "slab" : "mono"}`}>
                <div className="clock-inner">
                    <CountdownCircleTimer                      
                        isPlaying={pause}
                        duration={time}
                        rotation="counterclockwise"
                        colors={["#004777"]}
                        strokeWidth={11}
                        size={size}
                        trailStrokeWidth={0}                        
                        onComplete={() => setReset(true)}
                        >
                        {({ remainingTime }) =>
                        moment()
                            .hour(0)
                            .minute(0)
                            .second(remainingTime)
                            .format("mm:ss")
                        }
                    </CountdownCircleTimer>    
                    {  !start ? (
                        <h3 onClick={() => {setStart(true); setPause(true); }}>{start ? "Pause" : "Start"}</h3>
                    ) : start && !reset ? (                        
                        <h3 onClick={() => setPause(!pause)}>{pause ? "Pause" : "Resume"}</h3>                        
                    ) : (
                        <h3 onClick={() => {setReset(false); setStart(false); setPause(false); setTime(time)}}>Reset</h3>
                    )}              
                </div>
            </div>         
        </div>
    )
}

export default Clock
