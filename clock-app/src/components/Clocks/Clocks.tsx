import React from "react";
import { Clock } from "../../interfaces/Clock";
import ClockDisplay from "../ClockDisplay/ClockDisplay";

interface ClocksProps {
  clocks: Clock[];
  setClocks: (clocks: Clock[]) => void;
}

const Clocks: React.FC<ClocksProps> = ({ clocks = [], setClocks }) => {
  const handleUpdateClock = (clock: Clock) => {
    setClocks([...clocks.filter((c) => c.id !== clock.id), clock]);
  };

  const handleDeleteClock = (clock: Clock) => {
    setClocks(clocks.filter((c) => c.id !== clock.id));
  };

  return (
    <div className="clocks-container">
      {clocks.map((clock, idx) => (
        <ClockDisplay
          key={idx}
          clock={clock}
          updateClock={handleUpdateClock}
          deleteClock={handleDeleteClock}
        />
      ))}
    </div>
  );
};

export default Clocks;
