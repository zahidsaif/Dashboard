import NavBar from "./NavBar";
import Chart2 from "./Chart2";

const DashBoard = () => {
    return (
        <section className={"container-fluid"} style={{marginLeft: '-1rem'}} >
            <div className={"row"}>
                <div className={"col-xl-3"}>
                    <NavBar />
                </div>

                <div className={"col-xl-7"}>
                    <Chart2 />
                </div>
            </div>
        </section>
    );
}

export default DashBoard