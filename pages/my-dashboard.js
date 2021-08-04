import Head from "next/head";
import Header from "../components/Header";
import DashBoard from "../components/Dashboard";

const MyDashboard = () => {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Header />
            <DashBoard />
        </>
    )
}

export default MyDashboard