import { useState, FormEvent } from "react";
import { Clock } from "../../interfaces/Clock";
import moment from "moment-timezone";

interface Props {
  clock: Clock;
  updateClock: (clock: Clock) => void;
  deleteClock: (clock: Clock) => void;
}

function ClockForm({ clock, updateClock, deleteClock }: Props) {
  const [timeZone, setTimeZone] = useState<string>(clock.timeZone);
  const [isDigital, setIsDigital] = useState<boolean>(clock.isDigital);

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    const newClock: Clock = {
      ...clock,
      timeZone,
      isDigital,
    };
    updateClock(newClock);
    // Reset form after submission
    setTimeZone("");
    setIsDigital(true);
  };

  const handleTimeZoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeZone(e.target.value);
  };

  const handleIsDigitalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDigital(e.target.checked);
  };

  const getCurrentTime = (): string => {
    if (!timeZone) return "";
    return moment().tz(timeZone).format("YYYY-MM-DD HH:mm:ss");
  };

  return (
    <div className="clock-form">
      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="selectedTimeZoneId">Select Time Zone: </label>
          <br />
          <select
            name="selectedTZ"
            onChange={handleTimeZoneChange}
            value={timeZone}
          >
            <option value="">Select a time zone</option>
            <option value="Pacific/Honolulu">Hawaii Standard Time</option>
            <option value="America/Anchorage">Alaska Standard Time</option>
            <option value="America/Los_Angeles">Pacific Standard Time</option>
            <option value="America/Denver">Mountain Standard Time</option>
            <option value="America/Chicago">Central Standard Time</option>
            <option value="America/New_York">Eastern Standard Time</option>
          </select>
          <br />
          <label htmlFor="selectIsDigitalId">
            <input
              type="checkbox"
              name="isDigital"
              checked={isDigital}
              onChange={handleIsDigitalChange}
            />
            Is Digital?
          </label>
          <br />
          <button onClick={() => deleteClock(clock)}>
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}

export default ClockForm;
