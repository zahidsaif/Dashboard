import React, {useState} from 'react';

const NavBar = () => {
    const [dropDownSelect, setDropDownSelect] = useState('Dashboard')

    const onDropDownChange = (e) => {
        e.preventDefault()

        setDropDownSelect(e.target.innerText)
    }

    return (
        <section>
            <nav className={"navbar-style-small"}>
                <div className = "dropdown">
                    <button
                        className = "btn btn-secondary col-11 dropdown-toggle"
                        type = "button"
                        id = "dropdownMenuButton"
                        data-toggle = "dropdown"
                        aria-haspopup = "true"
                        aria-expanded = "false"
                    >
                        {dropDownSelect}
                    </button>
                    <div onClick={onDropDownChange} className = "dropdown-menu" aria-labelledby = "dropdownMenuButton">
                        <a className = "dropdown-item" href = "/my-dashboard">Dashboard</a>
                        <a className = "dropdown-item" href = "/stores">Stores</a>
                        <a className = "dropdown-item" href = "/orders">Orders</a>
                        <a className = "dropdown-item" href = "/traffic">Traffic</a>
                        <a className = "dropdown-item" href = "/payouts">Payouts</a>
                        <a className = "dropdown-item" href = "/agency">Agency</a>
                        <a className = "dropdown-item" href = "/settings">Settings</a>
                        <a className = "dropdown-item" href = "/reports">Reports</a>
                    </div>
                </div>
            </nav>

            <nav className = "navbar navbar-expand-lg navbar-style-large">
                <div className = "collapse navbar-collapse flex-column" id = "navbarSupportedContent">
                    <ul className = "navbar-nav mr-auto">
                        <li className = "nav-item active">
                            <a className = "nav-link" href = "/my-dashboard">Dashboard</a>
                            <a className = "nav-link" href = "/stores">Stores</a>
                            <a className = "nav-link" href = "/orders">Orders</a>
                            <a className = "nav-link" href = "/traffic">Traffic</a>
                            <a className = "nav-link" href = "/payouts">Payouts</a>
                            <a className = "nav-link" href = "/agency">Agency</a>
                            <a className = "nav-link" href = "/settings">Settings</a>
                            <a className = "nav-link" href = "/reports">Reports</a>
                            <hr />
                        </li>
                    </ul>
                    <div className={'contact-section'}>
                        <h3>Need Help?</h3>
                        <p>Got Feedback or Suggestions?</p>
                        <button onClick={''} type = "button" className = "btn btn-outline-secondary">Contact Us</button>
                    </div>
                </div>
            </nav>
            <style jsx>{`
                .navbar-style-small {
                    background-color: #e6e6e6;
                    width: 100vw;
                    padding: 1rem 0 1rem 1rem;
                }
                .btn {
                    background-color: white;
                    color: black;
                    padding: 0.3rem 2rem;
                }
                hr {
                    background-color: black;
                    padding-right: 13rem;
                }
                .nav-link {
                    margin-left: 1rem;
                }
                .navbar-style-large {
                    background-color: #e6e6e6;
                    padding-bottom: 100vh;
                }
                .contact-section {
                    display: flex;
                    flex-direction: column;
                    margin-right: 2rem;
                }
                .btn {
                    margin-right: 7rem;
                }
                @media (max-width: 992px) {
                    .navbar-style-large {
                        display: none;
                    }
                }
                @media (min-width: 992px) {
                    .navbar-style-small {
                        display: none;
                    }
                }
            `}</style>
        </section>
    )
}

export default NavBar