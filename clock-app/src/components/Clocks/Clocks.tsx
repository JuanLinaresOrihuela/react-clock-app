import React from "react";
import { Clock } from "../../interfaces/Clock";
import ClockDisplay from "../ClockDisplay/ClockDisplay";

interface ClocksProps {
  clocks: Clock[];
}

const Clocks: React.FC<ClocksProps> = ({ clocks = [] }) => {
  return (
    <div className="clocks-container">
      {clocks.map((clock, idx) => (
        <ClockDisplay key={idx} clock={clock} />
      ))}
    </div>
  );
};

export default Clocks;
