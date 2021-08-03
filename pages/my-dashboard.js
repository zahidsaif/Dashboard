import Head from "next/head";
import Header from "../components/Header";
import DashBoard from "../components/Dashboard";
import NavBar from "../components/NavBar";

const MyDashboard = () => {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Header />
            <NavBar />
            <DashBoard />
        </>
    )
}

export default MyDashboard