const Values = () => {
    return (
        <section style={{display: "flex", flexDirection: "column"}}>
            <div className = "card card-1">
                <div className = "card-body">
                    <h4>3</h4>
                    <p>Clicks</p>
                </div>
            </div>

            <div className = "card card-2">
                <div className = "card-body">
                    <h4>0</h4>
                    <p>Orders</p>
                </div>
            </div>

            <div className = "card card-3">
                <div className = "card-body">
                    <h4>0%</h4>
                    <p>Conversion</p>
                </div>
            </div>

            <div className = "card card-4">
                <div className = "card-body">
                    <h4>$0.00</h4>
                    <p>Earnings</p>
                </div>
            </div>

            <div className={"detail-card"}>
                <div className = "card detail-card-1">
                    <div className = "card-body">
                        <h5>Recent Orders</h5>
                        <ul>
                            <li className = "list-group-item">An item</li>
                            <li className = "list-group-item">A second item</li>
                            <li className = "list-group-item">A third item</li>
                            <li className = "list-group-item">A fourth item</li>
                            <li className = "list-group-item">And a fifth one</li>
                        </ul>
                    </div>
                </div>

                <div className = "card detail-card-2">
                    <div className = "card-body">
                        <h5>Recent Payouts</h5>
                        <ul>
                            <li className = "list-group-item">An item</li>
                            <li className = "list-group-item">A second item</li>
                            <li className = "list-group-item">A third item</li>
                            <li className = "list-group-item">A fourth item</li>
                            <li className = "list-group-item">And a fifth one</li>
                        </ul>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .card {
                    margin: 1rem 1rem 0 1rem;
                }
                ul {
                    padding-left: 0;
                    margin: 0 -1rem;
                }
                li {
                    padding-bottom: 4rem;
                }
            `}</style>
        </section>
    )
}

export default Values