import Chart from "./Chart";
import Values from "./Values";

const DashBoard = () => {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <Chart />
            <Values />
        </div>
    );
}

export default DashBoard