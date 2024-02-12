import { Clock } from "../../interfaces/Clock";
import ClockForm from "../ClockForm/ClockForm";

interface SettingProps {
  clock: Clock;
  updateClock: (clock: Clock) => void;
  deleteClock: (clock: Clock) => void;
}

function Setting({ clock, updateClock, deleteClock }: SettingProps) {
  return (
    <div>
          <ClockForm clock={clock} updateClock={updateClock} deleteClock={deleteClock} />
    </div>
  );
}

export default Setting;
