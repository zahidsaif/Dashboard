import {BiDollarCircle} from "react-icons/bi";
import {GiClick} from "react-icons/gi";
import {VictoryChart, VictoryStack, VictoryGroup, VictoryArea, VictoryPortal, VictoryScatter} from 'victory'

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
                <div className={"card mt-4"} style={{borderRadius: '6px'}}>
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

                        <div className={"row mt-3 mb-4 date-input"}>
                            <div className={"col col-md-6"}>
                                <input
                                    type={"date"}
                                    style={{width: '100%', borderRadius: '5px'}}
                                />
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
            <style jsx>{`
                @media (min-width: 768px) {
                    .date-input {
                        justify-content: center;
                    }
                }
            `}</style>
        </section>
    )
}

export default Chart