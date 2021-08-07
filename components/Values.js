import React, { useState } from 'react';
import {HiOutlineCursorClick} from "react-icons/hi";
import {FaBoxOpen} from "react-icons/fa";
import {SiConvertio} from "react-icons/si";
import {GiMoneyStack} from "react-icons/gi";

const Values = ({ data }) => {
    const [clicks, setClicks] = useState(0);
    const [orders, setOrders] = useState(0);
    const [conversionRate, setConversionRate] = useState(0);
    const [earnings, setEarnings] = useState(0)

    return (
        <section className={"row"}>
            <div className={"col values"}>
                <div className={"card mt-2 mr-auto col-md-6 col-lg-3 col-xl-3"} style={{borderRadius: '6px'}}>
                    <div className={"card-body"}>
                        <div className={"row"}>
                            <div className={"col-7"} style={{fontSize: "xxx-large", paddingLeft: '2rem'}}>
                                <HiOutlineCursorClick />
                            </div>

                            <div className={"col"} style={{margin: '0.7rem 1rem 0 0', textAlign: "right"}}>
                                <h4>{data.randomData.number}</h4>
                                <p>Clicks</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"card mt-2 mr-auto ml-auto col-md-6 col-lg-3 col-xl-3"} style={{borderRadius: '6px'}}>
                    <div className={"card-body"}>
                        <div className={"row"}>
                            <div className={"col-7"} style={{fontSize: "xxx-large", paddingLeft: '2rem'}}>
                                <FaBoxOpen />
                            </div>

                            <div className={"col"} style={{margin: '0.7rem 1rem 0 0', textAlign: "right"}}>
                                <h4>{data.randomData.number}</h4>
                                <p>Orders</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"card mt-2 mr-auto ml-auto col-md-6 col-lg-3 col-xl-3"} style={{borderRadius: '6px'}}>
                    <div className={"card-body"}>
                        <div className={"row"}>
                            <div className={"col-7"} style={{fontSize: "xxx-large", paddingLeft: '2rem'}}>
                                <SiConvertio />
                            </div>

                            <div className={"col"} style={{margin: '0.7rem 1rem 0 0', textAlign: "right"}}>
                                <h4>{`${data.randomData.float} %`}</h4>
                                <p>Conversion</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"card mt-2 ml-auto col-md-6 col-lg-3 col-xl-3"} style={{borderRadius: '6px'}}>
                    <div className={"card-body"}>
                        <div className={"row"}>
                            <div className={"col-7"} style={{fontSize: "xxx-large", paddingLeft: '2rem'}}>
                                <GiMoneyStack />
                            </div>

                            <div className={"col"} style={{margin: '0.7rem 1rem 0 0', textAlign: "right"}}>
                                <h4>{`${data.financeData.currencySymbol} ${data.financeData.amount}`}</h4>
                                <p>Earnings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @media (min-width: 768px) {
                    .values {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                    }
                }
            `}</style>
        </section>
    )
}

export default Values