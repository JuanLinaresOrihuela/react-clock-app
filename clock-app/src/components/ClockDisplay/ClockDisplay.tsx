import { Clock } from "../../interfaces/Clock";

export interface ClockProps {
  clock: Clock;
}

export function ClockDisplay({ clock }: ClockProps) {
  return (
    <div>
      <p>Timezone: {clock.timeZone}</p>
      <p>Digital: {clock.isDigital}</p>
    </div>
  );
}

export default ClockDisplay;
