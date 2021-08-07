import {RiDashboardFill, RiShoppingCart2Line, RiTrafficLightLine} from "react-icons/ri";
import {CgShoppingBag, CgFileDocument} from "react-icons/cg";
import {MdPayment} from "react-icons/md";
import {FiSettings} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return (
        <section className={"row"}>
            <div className={"col"}>
                <nav className={"sidebar"}>
                    <div style={{padding: '1.5rem 0 1rem 2rem'}}>
                        <h3>
                            <span>
                                <Image
                                    src="/icon-square.svg"
                                    alt="GoAffPro-logo"
                                    className={"goaffpro-logo"}
                                    width={'50px'}
                                    height={'50px'}
                                />
                            </span>
                            GoAffPro
                        </h3>
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
                    .sidebar {
                        display: none;
                    }
                }
                .sidebar {
                    height: 225vh;
                    width: 25vw;
                    color: black;
                    margin-left: -1rem;
                    background-color: #D7DBDD;
                }
                .goaffpro-logo {
                    margin-right: 2rem;
                }
                hr {
                    background-color: darkgrey;
                }
                .btn-contact-us {
                    margin-left: 2rem;
                    border: 2px solid black;
                    border-radius: 5px;
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
            `}</style>
        </div>
    )
}

export default NavBar