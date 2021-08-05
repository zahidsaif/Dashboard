import React from "react";
import Payments from "./Payments";
import { Line } from "react-chartjs-2";
import { CurrencyDollar, FileCheckFill } from "react-bootstrap-icons";

const Chart2 = () => {
    return (
        <section className={'container-fluid'}>
            <div className={"row"}>
                <div className={"col col-md-8 mt-2"}>
                    <h2>Dashboard</h2>
                    <input className={"text-box"} type={"text"} />
                </div>
            </div>

            <div className={"card chart-style"}>
                <div className={"row"}>
                    <div className={"col-2"}>
                        <button type = "button" className = "btn btn-1"><CurrencyDollar /> Earnings</button>
                    </div>

                    <div className={"col-2"}>
                        <button type = "button" className = "btn btn-2"><FileCheckFill /> Clicks</button>
                    </div>

                    <div className={"col-7"}>
                        <p style={{textAlign: "right"}}>Earnings are approximate and shown in USD</p>
                    </div>
                </div>

                <div className={"row"}>
                    <div className = "col-8 col-xl-3 card-body card-1">
                        <h4>3</h4>
                        <p>Clicks</p>
                    </div>

                    <div className = "col-4 col-xl-3 card-body card-2">
                        <h4>0</h4>
                        <p>Orders</p>
                    </div>

                    <div className = "col-8 col-xl-3 card-body card-3">
                        <h4>0%</h4>
                        <p>Conversion</p>
                    </div>

                    <div className = "col-4 col-xl-3 card-body card-4">
                        <h4>$0.00</h4>
                        <p>Earnings</p>
                    </div>
                </div>

                <div className={"row card-body"}>
                    <div className={"col-xl-12"}>
                        <Line data={ChartData} />
                    </div>
                </div>
            </div>

            <div className={"row"}>
                <div className={"col"}>
                    <Payments />
                </div>
            </div>
            <style jsx>{`
                .chart-style {
                    margin-top: 1rem;
                    margin-right: -2rem;
                    padding-top: 1rem;
                }
                .card-1 h4 {
                    padding-left: 2rem;
                }
                .card-1 p {
                    padding-left: 2rem;
                }
                .card-3 h4 {
                    padding-left: 2rem;
                }
                .card-3 p {
                    padding-left: 2rem;
                }
                .text-box {
                    width: 95vw;
                    border-radius: 5px;
                }
                @media (min-width: 992px) {
                    .text-box {
                        width: 70vw;
                    }
                }
            `}</style>
        </section>
    );
}

const ChartData = {
    labels: 'ABCDEFG',
    datasets: [{
        label: 'Chart',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

export default Chart2