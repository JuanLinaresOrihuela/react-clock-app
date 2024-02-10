import ClockDisplay from "./ClockDisplay";
import Clock from "./interfaces/Clock";

interface ClocksProps {
    clocks: Clock[]
}

function Clocks({clocks}: ClocksProps) {
    return (
        <div>
            <ClockDisplay></ClockDisplay>
        </div>
    )
}

export default Clocks;