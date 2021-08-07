import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header className={"row"}>
            <div className={"col"}>
                <div className={"header"}>
                    <div className={"logo col-4 col-md-5"}>
                        <Link href={'/my-dashboard'}>
                            <button style={{backgroundColor: "inherit", border: "none"}}>
                                <Image src={'/icon-square.svg'} width={'45px'} height={'45px'} alt={"goaffpro-logo"}/>
                            </button>
                        </Link>
                    </div>

                    <div className={"title"} style={{textAlign: "center", marginLeft: '1rem'}}>
                        <h3>GoAffPro</h3>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .header {
                    background-color: #D7DBDD;
                    display: flex;
                    color: black;
                    width: 100vw;
                    padding: 1rem;
                }
                @media (min-width: 992px) {
                    .header {
                        display: none;
                    }
                }
            `}</style>
        </header>
    )
}

export default Header