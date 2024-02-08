import React from 'react';
import ClockForm from "./ClockForm";
import Clock from "./interfaces/Clock";

interface Props {
    setClocks: React.Dispatch<React.SetStateAction<Clock[]>>;
}

function Setting({ setClocks }: Props) {
    return (
        <div>
            {/* Pass setClocks to the ClockForm component */}
            <ClockForm setClocks={setClocks}></ClockForm>
        </div>
    )
}

export default Setting;