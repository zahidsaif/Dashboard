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
        <section>
            <div className={"row"}>
                <div className={"col-sm-6 col-md-3"}>
                    <SingleValue logo={<HiOutlineCursorClick />} title={"Clicks"} value={data.randomData.number} />
                </div>

                <div className={"col-sm-6 col-md-3"}>
                    <SingleValue logo={<FaBoxOpen />} title={"Orders"} value={data.randomData.number} />
                </div>

                <div className={"col-sm-6 col-md-3"}>
                    <SingleValue logo={<SiConvertio />} title={"Conversion"} value={`${data.randomData.float} %`} />
                </div>

                <div className={"col-sm-6 col-md-3"}>
                    <SingleValue logo={<GiMoneyStack />} title={"Earnings"} value={`${data.financeData.currencySymbol}${data.financeData.amount}`} />
                </div>
            </div>
        </section>
    )
}

const SingleValue = ({ logo, title, value }) => {
    return (
        <div className={"card mt-2"} style={{borderRadius: '6px', border: '2px solid black'}}>
            <div className={"card-body"}>
                <div className={"row"}>
                    <div className={"col col-sm-12 col-md-12"} style={{fontSize: "xxx-large", paddingLeft: '2rem'}}>
                        {logo}
                    </div>

                    <div className={"col"} style={{textAlign: "right"}}>
                        <h4>{value}</h4>
                        <p>{title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Values