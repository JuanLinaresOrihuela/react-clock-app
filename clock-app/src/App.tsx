import { useState } from 'react';
import './App.css'
import Clocks from './Clocks';
import Setting from './Settings';
import Clock from './interfaces/Clock';

function App() {
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
            {/* Pass setClocks to the Setting component */}
            <Setting setClocks={setClocks}></Setting>
            <Clocks clocks={clocks}></Clocks>
        </div>
    )
}

export default App;