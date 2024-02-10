import React, { useState } from "react";
import "./App.css";
import Settings from "./components/Settings/Settings";
import { Clock } from "./interfaces/Clock";
import Clocks from "./components/Clocks/Clocks";

const App: React.FC = () => {
  const [clocks, setClocks] = useState<Clock[]>([
    { timeZone: "Hawaii Standard Time/Honolulu", isDigital: true },
    { timeZone: "Alaska Standard Time/Anchorage", isDigital: false },
    { timeZone: "Pacific Standard Time/Los Angeles", isDigital: true },
    { timeZone: "Mountain Standard Time/Salt Lake City", isDigital: false },
    { timeZone: "Central Standard Time/Chicago", isDigital: true },
    { timeZone: "Eastern Standard Time/New York", isDigital: false },
  ]);

  return (
    <div>
      <Settings setClocks={(clock) => setClocks(clock)} />
      <Clocks clocks={clocks} />
    </div>
  );
};

export default App;
