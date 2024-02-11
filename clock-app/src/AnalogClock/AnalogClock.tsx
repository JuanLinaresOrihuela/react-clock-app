import React, { useState, useEffect } from 'react';
import './AnalogClock.css';

const AnalogClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourDeg = (hours % 12) * 30 + minutes * 0.5;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const secondDeg = seconds * 6;

    return (
        <div className="analog-clock">
            <div className="hand hour-hand" style={{transform: `rotate(${hourDeg}deg)`}}></div>
            <div className="hand minute-hand" style={{transform: `rotate(${minuteDeg}deg)`}}></div>
            <div className="hand second-hand" style={{transform: `rotate(${secondDeg}deg)`}}></div>
            <div className="center-circle"></div>
        </div>
    );
}

export default AnalogClock;