import {BiDollarCircle} from "react-icons/bi";
import {GiClick} from "react-icons/gi";
import React, {useState} from 'react'
import {VictoryChart, VictoryStack, VictoryGroup, VictoryArea, VictoryPortal, VictoryScatter} from 'victory'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

const Chart = () => {
    const ChartData = () => {
        return (
            <VictoryChart scale = {{x: "time"}} width = {600} height = {400}>
                <VictoryStack colorScale = "warm">
                    <VictoryGroup
                        data = {[
                            {x: new Date(1986, 1, 1), y: 2},
                            {x: new Date(1996, 1, 1), y: 3},
                            {x: new Date(2006, 1, 1), y: 5},
                            {x: new Date(2016, 1, 1), y: 4}
                        ]}
                    >
                        <VictoryArea/>
                        <VictoryPortal>
                            <VictoryScatter
                                style = {{data: {fill: "black"}}}
                            />
                        </VictoryPortal>
                    </VictoryGroup>
                    <VictoryGroup
                        data = {[
                            {x: new Date(1986, 1, 1), y: 4},
                            {x: new Date(1996, 1, 1), y: 3},
                            {x: new Date(2006, 1, 1), y: 2},
                            {x: new Date(2016, 1, 1), y: 5}
                        ]}
                    >
                        <VictoryArea/>
                        <VictoryPortal>
                            <VictoryScatter
                                style = {{data: {fill: "black"}}}
                            />
                        </VictoryPortal>
                    </VictoryGroup>
                    <VictoryGroup
                        data = {[
                            {x: new Date(1986, 1, 1), y: 3},
                            {x: new Date(1996, 1, 1), y: 1},
                            {x: new Date(2006, 1, 1), y: 4},
                            {x: new Date(2016, 1, 1), y: 2}
                        ]}
                    >
                        <VictoryArea/>
                        <VictoryPortal>
                            <VictoryScatter
                                style = {{data: {fill: "black"}}}
                            />
                        </VictoryPortal>
                    </VictoryGroup>
                </VictoryStack>
            </VictoryChart>
        )
    }

    return (
        <section className={"row"}>
            <div className={"col"}>
                <div className={"card mt-4"} style={{borderRadius: '6px', border: '2px solid black'}}>
                    <div className={"card-body"}>
                        <div className={"row"}>
                            <div className={"col-3 col-lg-2"}>
                                <button className={"btn"}>Earnings <BiDollarCircle /></button>
                            </div>

                            <div className={"col-3 col-lg-2"}>
                                <button className={"btn"}>Clicks <GiClick /></button>
                            </div>

                            <div className={"col-6 col-lg-8 mt-2"} style={{textAlign: "right", fontSize: "small"}}>
                                Earnings are approximate and shown in USD
                            </div>
                        </div>

                        <div className={"row mt-5 mb-4"} style={{justifyContent: "center"}}>
                            <div className={"col-4 col-sm-3 col-md-2 mt-1"}>
                                Select Date
                            </div>

                            <div className={""}>
                                <DateCapture />
                            </div>
                        </div>

                        <hr />

                        <div className={"row"}>
                            <div className={"col"}>
                                <ChartData />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const DateCapture = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => setDateRange(update)}
            withPortal
        />
    )
}

export default Chart