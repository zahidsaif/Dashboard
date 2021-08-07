import Head from "next/head";
import Dashboard from "../components/Dashboard";

const MyDashboard = () => {
    return(
        <>
            <Head>
                <title>My Dashboard</title>
            </Head>
            <Dashboard />
        </>
    )
}

export default MyDashboard