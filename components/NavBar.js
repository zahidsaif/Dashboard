const NavBar = () => {
    return (
        <section>
            <nav className={"navbar-style"}>
                <div className = "dropdown">
                    <button
                        className = "btn btn-secondary col-11 dropdown-toggle"
                        type = "button"
                        id = "dropdownMenuButton"
                        data-toggle = "dropdown"
                        aria-haspopup = "true"
                        aria-expanded = "false"
                    >
                        Dashboard
                    </button>
                    <div className = "dropdown-menu" aria-labelledby = "dropdownMenuButton">
                        <a className = "dropdown-item" href = "/my-dashboard">Dashboard</a>
                        <a className = "dropdown-item" href = "/stores">Stores</a>
                        <a className = "dropdown-item" href = "/orders">Orders</a>
                        <a className = "dropdown-item" href = "/traffic">Traffic</a>
                        <a className = "dropdown-item" href = "/payouts">Payouts</a>
                        <a className = "dropdown-item" href = "/agency">Agency</a>
                        <a className = "dropdown-item" href = "/settings">Settings</a>
                        <a className = "dropdown-item" href = "/reports">Reports</a>
                    </div>
                    {/*<div className={'contact-section'}>*/}
                    {/*    <h3>Need Help?</h3>*/}
                    {/*    <p>Got Feedback or Suggestions?</p>*/}
                    {/*    <button onClick={''} type = "button" className = "btn btn-outline-secondary">Contact Us</button>*/}
                    {/*</div>*/}
                </div>
            </nav>
            <style jsx>{`
                .navbar-style {
                    background-color: #e6e6e6;
                    width: 100vw;
                    padding: 1rem 0 1rem 1rem;
                }
                .btn {
                    background-color: white;
                    color: black;
                    text-align: center;
                    padding: 0.3rem;
                }
            `}</style>
        </section>
    )
}

export default NavBar