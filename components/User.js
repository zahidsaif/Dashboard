import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from 'react-icons/bs'
import { IoNotificationsOutline } from 'react-icons/io5'

const User = ({ data }) => {
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
    const [notificationsBanner, setNotificationsBanner] = useState(false);
    const [searchTerm, setSearchTerm] = useState(null);

    const searchButton = () => {
        return <button onClick={() => setIsSearchBarVisible(true)} className={"btn btn-search"}><BsSearch /></button>
    }

    const searchBarAndButton = () => {
        return (
            <>
                <input
                    type={"text"}
                    placeholder={"Start Typing..."}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{borderRadius: '6px', marginTop: '0.3rem'}}
                />
                <button onClick={() => setIsSearchBarVisible(false)} className={"btn btn-search"}><BsSearch /></button>
            </>
        )
    }

    const notifications = () => {
        return <button onClick={() => setNotificationsBanner(true)} className={"btn btn-notify"}><IoNotificationsOutline /></button>
    }

    const notificationsCard = () => {
        return (
            <>
                <button onClick={() => setNotificationsBanner(false)} className={"btn btn-notify"}><IoNotificationsOutline /></button>

                <div className={"container-fluid"}>
                    <div className={"card notify-style"}>
                        <div className={"card-body"}>
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
                        left: 50%;
                        width: 30vw;
                        height: 35vh;
                        border: 2px solid black;
                    }   
                    hr {
                        background-color: black;
                        margin-left: -1.1rem;
                        margin-right: -1.1rem;
                    }   
                `}</style>
            </>
        )
    }

    return (
        <section className={"row"}>
            <div className={"col"}>
                <div className={"card user"}>
                    <div className={"card-body"}>
                        <div className={"row"}>
                            <div className={"col"}>
                                <button className={"btn btn-hamburger-menu"}>
                                    <GiHamburgerMenu />
                                </button>
                            </div>

                            <div className={""}>
                                {!isSearchBarVisible ? (searchButton()) : (searchBarAndButton())}
                            </div>

                            <div className={""}>
                                {!notificationsBanner ? (notifications()) : (notificationsCard())}
                            </div>

                            <div className={"col-3 col-sm-2 col-lg-2 col-xl-1"}>
                                <button className={"btn btn-user"}>
                                    <input
                                        className={'user-image'}
                                        type={"image"}
                                        src={data.userData.avatar} width={'40px'} height={'40px'}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .user {
                    border-radius: 6px;
                    margin: 1rem 0;
                }
                .user-image {
                    border-radius: 129px;
                    margin-top: -0.5rem;
                }
                .btn-user {
                    margin-bottom: -1rem;
                }
            `}</style>
        </section>
    )
}

export default User