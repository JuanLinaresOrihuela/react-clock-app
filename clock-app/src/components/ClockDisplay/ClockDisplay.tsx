import { Clock } from "../../interfaces/Clock";
import AnalogClock from "../AnalogClock/AnalogClock";
import Setting from "../Settings/Settings";
import "./ClockDisplay.css";

export interface ClockProps {
  clock: Clock;
  updateClock: (clock: Clock) => void;
  deleteClock: (clock: Clock) => void;
}

export function ClockDisplay({ clock, updateClock, deleteClock }: ClockProps) {
  const handleDeleteClock = () => deleteClock(clock);

  return (
    <div className="clock-display">
      <Setting
        clock={clock}
        updateClock={updateClock}
        deleteClock={handleDeleteClock}
      />
      <AnalogClock />
    </div>
  );
}

export default ClockDisplay;
