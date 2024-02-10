import React from 'react';
import ClockDisplay from './ClockDisplay';
import { Clock } from '../types';

interface ClocksProps {
  clocks: Clock[];
  deleteClock: (id: number) => void;
}

const Clocks: React.FC<ClocksProps> = ({ clocks, deleteClock }) => {
  return (
    <div className="clocks-container">
      {clocks.map(clock => (
        <ClockDisplay key={clock.id} clock={clock} deleteClock={deleteClock} />
      ))}
    </div>
  );
};

export default Clocks;
