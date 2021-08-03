import React from 'react'
import { Line } from "react-chartjs-2";

const Chart = () => {
    return (
        <section className={'chart-style col-12'}>
            <div className={"title-style"}>
                <h2>Dashboard</h2>
                <input className={"text-box"} type={"text"} />
            </div>
            <div className={'text-items'}>
                <button type = "button" className = "btn btn-1">Earnings</button>
                <button type = "button" className = "btn btn-2">Clicks</button>
                <p>Earnings are approximate and shown in USD</p>
            </div>
            <div className = "card">
                <div className = "card-body">
                    <Line data={ChartData} />
                </div>
            </div>
            <style jsx>{`
                .title-style {
                    margin-top: 0.5rem;   
                }
                .text-box {
                    margin-bottom: 1rem;
                    border-radius: 5px;
                    background-color: inherit;
                    border-color: white;
                    width: 93vw;
                }
                .text-items {
                    display: flex;
                }
                .btn {
                    padding: 0 0.5rem 0 0.5rem;
                    margin-bottom: 1rem;
                }
                .btn-2 {
                    margin-right: 1rem;
                }
                p {
                    font-size: small;
                    padding-left: 4rem;
                    text-align: right;
                    padding-top: 0.25rem;
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

export default Chart