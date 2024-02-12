import React, { useState } from "react";
import "./App.css";
import { Clock } from "./interfaces/Clock";
import Clocks from "./components/Clocks/Clocks";

const App: React.FC = () => {
  const [clocks, setClocks] = useState<Clock[]>([
    {
      id: crypto.randomUUID(),
      timeZone: "Hawaii Standard Time/Honolulu",
      isDigital: false,
    },
    {
      id: crypto.randomUUID(),
      timeZone: "Alaska Standard Time/Anchorage",
      isDigital: false,
    },
    {
      id: crypto.randomUUID(),
      timeZone: "Pacific Standard Time/Los Angeles",
      isDigital: false,
    },
    {
      id: crypto.randomUUID(),
      timeZone: "Mountain Standard Time/Salt Lake City",
      isDigital: false,
    },
    {
      id: crypto.randomUUID(),
      timeZone: "Central Standard Time/Chicago",
      isDigital: false,
    },
    {
      id: crypto.randomUUID(),
      timeZone: "Eastern Standard Time/New York",
      isDigital: false,
    },
  ]);

  const handleAddClock = () => {
    setClocks([
      ...clocks,
      {
        id: crypto.randomUUID(),
        timeZone: "Eastern Standard Time/New York",
        isDigital: false,
      },
    ]);
  };

  return (
    <div className="app">
      <h1 className="app-title">My Clock App</h1>
      <button onClick={handleAddClock}>Add Clock</button>
      <Clocks clocks={clocks} setClocks={setClocks} />
    </div>
  );
};

export default App;
