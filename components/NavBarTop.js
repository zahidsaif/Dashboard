import Image from "next/image";
import Link from "next/link";
import {IoNotificationsOutline} from "react-icons/io5";
import React, {useState} from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import {BsSearch} from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi";

const NavBarTop = ({ data }) => {
    return (
        <section className={"row"}>
            <div className={"col"}>
                <nav className={"navbar-top-style"}>
                    <div className={"main-logo col-4 col-sm-5 col-md-2 col-lg-1"} style={{marginTop: '0.5rem'}}>
                        <Image
                            src="/icon-square.svg"
                            alt="GoAffPro-logo"
                            width={'50px'}
                            height={'50px'}
                        />
                    </div>

                    <div className={"app-title col-5 col-sm-4 col-md-4 col-lg-2"}>
                        <h5>GOAFFPRO</h5>
                    </div>

                    <div className={"earnings-page col-lg-2"} style={{marginTop: '1.25rem'}}>
                        <Link href={'/payouts'}>My Earnings</Link>
                    </div>

                    <div className={"orders-page col-lg-2 col-xl-3"} style={{marginTop: '1.25rem'}}>
                        <Link href={'/orders'}>My Orders</Link>
                    </div>

                    <div className={"search-bar col-md-4 col-lg-3 col-xl-2"} style={{marginTop: '0.75rem'}}>
                        <SearchBar />
                    </div>

                    <div className={"notifications col-1"} style={{marginTop: '0.75rem'}}>
                        <Notifications />
                    </div>

                    <div className={"col-2"}>
                        <button className={"btn btn-user"}>
                            <input
                                className={'user-image'}
                                type={"image"}
                                src={data.userData.avatar}
                                width={'50px'}
                                height={'50px'}
                            />
                        </button>
                    </div>
                </nav>
            </div>
            <style jsx>{`
                .navbar-top-style {
                    padding: 0.85rem 2rem 0 2rem; 
                    display: flex;
                    width: 100vw;
                    height: 10vh;
                    background-color: white;
                    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
                    margin-bottom: 0.5rem;
                }
                .user-image {
                    border-radius: 129px;
                    border: 1px solid goldenrod;
                }
                .app-title {
                    margin-top: 1.25rem;
                }
                @media (max-width: 767px) {
                    .search-bar {
                        display: none;
                    }
                }
                .notifications {
                    margin-top: 0.25rem;
                }
                @media (max-width: 991px) {
                    .earnings-page {
                        display: none;
                    }
                    .orders-page {
                        display: none;
                    }
                }
                @media (min-width: 992px) {
                    .notifications {
                        margin-right: -1rem;
                    }
                }
            `}</style>
        </section>
    )
}

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState(null);

    return (
        <div className={"row"}>
            <div style={{position: "absolute", padding: '0.25rem 0 0 0.5rem'}}>
                <BsSearch />
            </div>

            <div>
                <input
                    type={"text"}
                    placeholder={"Start Typing..."}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{borderRadius: '7px', border: '1px solid #808B96', paddingLeft: '2rem', height: '150%'}}
                />
            </div>
        </div>
    )
}

const Notifications = () => {
    const [notificationsBanner, setNotificationsBanner] = useState(false);

    const notifications = () => {
        return <button
                    onClick={() => setNotificationsBanner(true)}
                    className={"btn btn-notify"}
        ><IoNotificationsOutline /></button>
    }

    const notificationsCard = () => {
        return (
            <>
                <button onClick={() => setNotificationsBanner(false)} className={"btn btn-notify"}><IoNotificationsOutline /></button>

                <div className={"container-fluid"}>
                    <div className={"card notify-style"}>
                        <div className={"card-body"} style={{textAlign: "center"}}>
                            <h4>Your Notifications</h4>
                            <hr />
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .notify-style {
                        z-index: 100;
                        position: absolute;
                        top: 80%;
                        right: -100%;
                        width: 75vw;
                        height: 35vh;
                        border: 2px solid black;
                    }   
                    hr {
                        background-color: black;
                        margin-left: -1.1rem;
                        margin-right: -1.1rem;
                    }
                    @media (min-width: 768px) {
                        .notify-style {
                            width: 55vw;
                        }
                    } 
                    @media (min-width: 992px) {
                        .notify-style {
                            width: 35vw;
                        }
                    }     
                `}</style>
            </>
        )
    }

    return (
        <>
            {!notificationsBanner ? (notifications()) : (notificationsCard())}
        </>
    )
}

export default NavBarTop