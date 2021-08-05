import { PersonCircle, Search, BellFill, BoxArrowRight } from "react-bootstrap-icons";

const Header = () => {
    return (
        <header className={"container-fluid header-style"}>
            <div className={"row"}>
                <div className={"brand col-4"}>
                    <h4>GOAFFPRO</h4>
                </div>

                <section className={"user col-5 col-sm-4 col-md-3 col-lg-3 col-xl-2"}>
                    <button className={"btn btn-1"}><PersonCircle /></button>
                    <button className={"btn btn-2"}><Search /></button>
                    <button className={"btn btn-3"}><BellFill /></button>
                </section>

                <div className={"logout col-3 col-md-4"}>
                    <button className={"btn btn-logout col-md-12"}><BoxArrowRight /></button>
                </div>
            </div>
            <style jsx>{`
                .header-style {
                    background-color: #444;
                    padding: 2rem 0 2.5rem 1rem;
                }
                .brand {
                    padding-left: 1rem;
                    margin-top: 1rem;
                    color: white;
                }
                .btn-logout {
                    color: white;
                    font-size: x-large;
                }
                .user {
                    display: flex;
                    padding: 0 1rem;
                    background-color: white;
                    border-radius: 25px;
                    color: black;

                }
                .btn-1 {
                    margin-right: 4rem;
                }
            `}</style>
        </header>
    )
}

export default Header