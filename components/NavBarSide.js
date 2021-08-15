import Link from "next/link";
import {RiDashboardFill, RiShoppingCart2Line, RiTrafficLightLine} from "react-icons/ri";
import {CgFileDocument, CgShoppingBag} from "react-icons/cg";
import {MdPayment} from "react-icons/md";
import {FiSettings} from "react-icons/fi";


const NavBarSide = ({ data }) => {
    return (
        <section className={"row"}>
            <div className={"col"}>
                <nav className={"navbar-side-style"}>
                    <div style={{backgroundColor: "#1d1f2f"}}>
                        <button className={"btn btn-user-image"} style={{margin: '0 0 0 1rem', display: "flex"}} onClick={() => window.location.href = '/my-dashboard'}>
                            <div>
                                <input
                                    className={'user-image'}
                                    type={"image"}
                                    src={data.userData.avatar}
                                    width={'50px'}
                                    height={'50px'}
                                />
                            </div>

                            <div style={{margin: '1.25rem 0 0 1rem', color: "white", fontSize: "large"}}>
                                <strong>
                                    {data.userData.firstName} {data.userData.lastName}
                                </strong>
                            </div>
                        </button>
                    </div>

                    <PageRedirect title={"Dashboard"} logo={<RiDashboardFill />} redirectTo={'/my-dashboard'} />
                    <PageRedirect title={"Stores"} logo={<RiShoppingCart2Line />} redirectTo={'/stores'} />
                    <PageRedirect title={"Orders"} logo={<CgShoppingBag />} redirectTo={'/orders'} />
                    <PageRedirect title={"Traffic"} logo={<RiTrafficLightLine />} redirectTo={'/traffic'} />
                    <PageRedirect title={"Payouts"} logo={<MdPayment />} redirectTo={'/payouts'} />
                    <PageRedirect title={"Settings"} logo={<FiSettings />} redirectTo={'/settings'} />
                    <PageRedirect title={"Reports"} logo={<CgFileDocument />} redirectTo={'/reports'} />

                    <br />
                    <hr />

                    <div className={"contact-us"}>
                        <div style={{padding: '0 0 1rem 1.7rem'}}>
                            <h3>Need Help?</h3>
                            Got Feedback or Suggestions?
                        </div>

                        <div>
                            <Link href={'/contact-us'}>
                                <button className={"btn btn-contact-us"}>Contact Us</button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
            <style jsx>{`
                @media (max-width: 991px) {
                    .navbar-side-style {
                        display: none;
                    }
                }
                .navbar-side-style {
                    height: 210vh;
                    width: 25vw;
                    color: black;
                    margin-left: -1rem;
                    margin-top: -0.43rem;
                    background-color: #e3e6e8;
                }
                hr {
                    background-color: darkgrey;
                }
                .btn-contact-us {
                    margin-left: 2rem;
                    border: 2px solid black;
                    border-radius: 5px;
                }
                .user-image {
                    border-radius: 129px;
                    margin-top: 0.5rem;
                }
                .btn-contact-us:hover {
                    background-color: #1d1f2f;
                    color: white;
                }
            `}</style>
        </section>
    )
}

const PageRedirect = ({ title, logo, redirectTo }) => {
    return (
        <div>
            <Link href={redirectTo}>
                <button className={"btn-style"}>
                    <div className={"logo"}>
                        {logo}
                    </div>

                    <div style={{paddingTop: '1rem'}}>
                        <h5>{title}</h5>
                    </div>
                </button>
            </Link>
            <style jsx>{`
                .btn-style {
                    display: flex;
                    flex-direction: row;
                    background-color: inherit;
                    border: none;
                }
                .logo {
                    padding: 0 1rem 0 2rem;
                    font-size: xx-large;
                }
                .btn-style:hover {
                    background-color: #1d1f2f;
                    color: white;
                    width: 100%;
                }
            `}</style>
        </div>
    )
}

export default NavBarSide