import { Clock } from "../../interfaces/Clock";
import ClockForm from "../ClockForm/ClockForm";

interface SettingProps {
  clock: Clock;
  updateClock: (clock: Clock) => void;
  deleteClock: (clock: Clock) => void;
}

function Setting({ clock, updateClock, deleteClock }: SettingProps) {
  return (
    <ClockForm clock={clock} updateClock={updateClock} deleteClock={deleteClock} />
  );
}

export default Setting;
