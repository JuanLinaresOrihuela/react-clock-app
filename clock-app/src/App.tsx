import React, { useState } from 'react';
import Settings from './Settings';
import Clocks from './components/Clocks';
import { Clock } from './types';

const App: React.FC = () => {
  const [clocks, setClocks] = useState<Clock[]>([
    { id: Date.now(), timeZone: 'Europe/London', isDigital: true }
  ]);

  const updateClock = (updatedClock: Clock) => {
    setClocks(clocks.map(clock => clock.id === updatedClock.id ? updatedClock : clock));
  };

  const deleteClock = (id: number) => {
    setClocks(clocks.filter(clock => clock.id !== id));
  };

  return (
    <div>
      <h1>World Clocks</h1>
      <Settings clocks={clocks} updateClock={updateClock} />
      <Clocks clocks={clocks} deleteClock={deleteClock} />
    </div>
  );
};

export default App;
