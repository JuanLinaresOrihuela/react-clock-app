import { useState, FormEvent } from "react";
import Clock from "./interfaces/Clock";

interface Props {
    updateClock: (x: Clock) => void;
}

function ClockForm({ updateClock }: Props) {
    const [timeZone, setTimeZone] = useState<string>("");
    const [isDigital, setIsDigital] = useState<boolean>(true);

    const submitHandler = (e: FormEvent): void => {
        e.preventDefault();
        const newClock: Clock = {
            timeZone,
            isDigital
        };
        updateClock(newClock);
        // Reset form after submission
        setTimeZone("");
        setIsDigital(true);
    }

    const handleTimeZoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTimeZone(e.target.value);
    }

    const handleIsDigitalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsDigital(e.target.checked);
    }

    return (
        <div>
            <form className="clock-form" onSubmit={submitHandler}>
                <label htmlFor="selectedTimeZoneId">
                    <select name="selectedFruit" onChange={handleTimeZoneChange} value={timeZone}>
                        <option value="Hawaii Standard Time/Honolulu">Hawaii Standard Time</option>
                        <option value="Alaska Standard Time/Anchorage">Alaska Standard Time</option>
                        <option value="Pacific Standard Time/Los Angeles">Pacific Standard Time</option>
                        <option value="Mountain Standard Time/Salt Lake City">Mountain Standard Time</option>
                        <option value="Central Standard Time/Chicago">Central Standard Time</option>
                        <option value="Eastern Standard Time/New York">Eastern Standard Time</option>
                    </select>
                </label> <br /> 
                <label htmlFor="selectIsDigitalId"> Is Digital? 
                    <input type="checkbox" name="isDigital" checked={isDigital} onChange={handleIsDigitalChange} />
                </label> <br /> 
                <button className="submit-btn" type="submit">Add TimeZone</button>
            </form>
        </div>
    )
}

export default ClockForm;