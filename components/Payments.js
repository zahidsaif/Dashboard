const Payments = () => {
    return (
        <section className={"payments"}>
            <div className={"card card-1 mr-2 col-xl-7"}>
                <h5>Recent Orders</h5>

                <div className={"card-body"}>
                    <div>
                        <h6>Lorem ipsum dolor.</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, vel?</p>
                        <hr />
                    </div>

                    <div>
                        <h6>Lorem ipsum dolor.</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, vel?</p>
                        <hr />
                    </div>

                    <div>
                        <h6>Lorem ipsum dolor.</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, vel?</p>
                        <hr />
                    </div>

                    <div>
                        <h6>Lorem ipsum dolor.</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, vel?</p>
                        <hr />
                    </div>

                    <div>
                        <h6>Lorem ipsum dolor.</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, vel?</p>
                    </div>
                </div>
            </div>

            <div className={"card card-2 col-xl-7"}>
                <h5>Recent Payouts</h5>

                <div className={"card-body"}>
                    <div>
                        <h6>Lorem ipsum dolor.</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, vel?</p>
                        <hr />
                    </div>

                    <div>
                        <h6>Lorem ipsum dolor.</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, vel?</p>
                        <hr />
                    </div>

                    <div>
                        <h6>Lorem ipsum dolor.</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, vel?</p>
                        <hr />
                    </div>

                    <div>
                        <h6>Lorem ipsum dolor.</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, vel?</p>
                        <hr />
                    </div>

                    <div>
                        <h6>Lorem ipsum dolor.</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, vel?</p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .payments {
                    margin-top: 2rem;
                    margin-right: -2rem;
                    display: flex;
                    flex-direction: column;
                }     
                .card-1 {
                    margin-bottom: 1rem;
                }    
                .card-2 {
                    margin-bottom: 1rem;
                }      
                h5 {
                    background-color: #f2f2f2;
                    padding: 1rem;
                }
                hr {
                    margin-left: -1rem;
                    margin-right: -1rem;
                }
                @media (min-width: 767px) {
                    .payments {
                        flex-direction: row;
                    }
                }
            `}</style>
        </section>
    )
}

export default Payments