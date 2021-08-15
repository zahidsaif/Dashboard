const Results = ({ data }) => {
    return (
        <section>
            <div className={"row"}>
                <div className={"col-md-6 col-lg-6 col-xl-6"}>
                    <ResultCard
                        title={"Recent Orders"}
                        date={`${data.randomData.date}, ${data.randomData.month}`}
                        amount={`${data.financeData.currencySymbol} ${data.financeData.amount}`}
                    />
                </div>

                <div className={"col-md-6 col-lg-6 col-xl-6"}>
                    <ResultCard
                        title={"Recent Payouts"}
                        date={`${data.randomData.date}, ${data.randomData.month}`}
                        amount={`${data.financeData.currencySymbol} ${data.financeData.amount}`}
                    />
                </div>
            </div>
        </section>
    )
}

const ResultCard = ({ title, date, amount }) => {
    return (
        <div className={"card mt-4 mb-3"} style={{borderRadius: '6px', border: '2px solid black'}}>
            <div className={"card-body"}>
                <div className={"row"}>
                    <div className={"col"}>
                        <h4>{title}</h4>
                    </div>
                </div>
                <hr style={{backgroundColor: "black"}}/>

                <div>
                <RowData date={date} amount={amount} />
                <hr />

                <RowData date={date} amount={amount} />
                <hr />

                <RowData date={date} amount={amount} />
                <hr />

                <RowData date={date} amount={amount} />
                <hr />

                <RowData date={date} amount={amount} />
                </div>
            </div>
            <style jsx>{`
                hr {
                    margin-left: -1.1rem;
                    margin-right: -1.1rem;
                }
            `}</style>
        </div>
    )
}

const RowData = ({ date, amount }) => {
    return (
        <div className={"row"}>
            <div className={"col"} style={{fontSize: "small"}}>
                <h6>{date}</h6>
                GoAffProTest1
            </div>

            <div className={"col"} style={{textAlign: "right"}}>
                {amount}
            </div>
        </div>
    )
}

export default Results