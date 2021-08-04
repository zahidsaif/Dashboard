import React from 'react';

const Values = () => {
    return (
        <section style={{display: "flex", flexDirection: "column"}}>
            <div className={"cards-container col-12"}>
                <div className = "card card-single card-1 col-lg-2 col-xl-2">
                    <div className = "card-body">
                        <h4>3</h4>
                        <p>Clicks</p>
                    </div>
                </div>

                <div className = "card card-single card-2 col-lg-2 col-xl-2">
                    <div className = "card-body">
                        <h4>0</h4>
                        <p>Orders</p>
                    </div>
                </div>

                <div className = "card card-single card-3 col-lg-2 col-xl-2">
                    <div className = "card-body">
                        <h4>0%</h4>
                        <p>Conversion</p>
                    </div>
                </div>

                <div className = "card card-single card-4 col-lg-2 col-xl-2">
                    <div className = "card-body">
                        <h4>$0.00</h4>
                        <p>Earnings</p>
                    </div>
                </div>
            </div>

            <div className={"detail-card col-xl-5"}>
                <div className = "card detail-card-1 col-lg-4 col-xl-10">
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

                <div className = "card detail-card-2 col-lg-4 col-xl-10">
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
                .card-single {
                    margin: 1rem 1rem 0 0;
                }
                .detail-card {
                    margin-top: 2rem;
                }
                ul {
                    padding-left: 0;
                    margin: 0 -1rem;
                }
                .cards-container {
                    display: inherit;
                    flex-direction: inherit;
                }
                @media (min-width: 992px) {
                    .cards-container {
                        flex-direction: row;
                    }
                    .card {
                        margin-right: 1.7rem;
                    }
                    .detail-card {
                        display: inherit;
                    }
                }
                @media (min-width: 1200px) {
                    .detail-card {
                        display: inherit;
                    }
                }
            `}</style>
        </section>
    )
}

export default Values