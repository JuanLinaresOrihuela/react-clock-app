import ClockForm from "./ClockForm";


function Setting() {
    return (
        <div>
            <ClockForm updateClock={function (): void {
                throw new Error("Function not implemented.");
            } }></ClockForm>
        </div>
    )
}

export default Setting;