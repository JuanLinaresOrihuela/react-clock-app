
import ClockForm from "./ClockForm";
import Clock from "./interfaces/Clock";

interface SettingProps {
    setClocks: (clock: Clock) => void;
}

function Setting({setClocks}: SettingProps) {
    return (
        <div>
            <ClockForm updateClock={setClocks}></ClockForm>
        </div>
    )
}

export default Setting;