import NavBar from "./NavBar";
import Chart from "./Chart";

const DashBoard = () => {
    return (
        <div className={'dashboard'}>
            <NavBar />
            <Chart />
            <style jsx>{`
                .dashboard {
                    display: flex;
                    flex-direction: column;
                }
                @media (min-width: 992px) {
                    .dashboard {
                        flex-direction: row;
                    }
                }
            `}</style>
        </div>
    );
}

export default DashBoard