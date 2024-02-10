import React, { useState } from 'react';
//import Settings from './Settings';
import Clocks, { Clock } from './components/Clocks';

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
      {/* <Settings clocks={clocks} updateClock={updateClock} /> */}
      <Clocks clocks={clocks} deleteClock={deleteClock} />
    </div>
  );
};

export default App;
