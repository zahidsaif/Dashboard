import React, { useState } from 'react'
import Values from "./Values";
import faker from 'faker';
import Chart from "./Chart";
import Results from "./Results";
import NavBarTop from "./NavBarTop";
import NavBarSide from "./NavBarSide";

const Dashboard = () => {
    const [dataFromAPI, setDataFromAPI] = useState(null);

    const data = {
        countryData: {
            country: faker.address.country(),
            countryCode: faker.address.countryCode(),
            state: faker.address.state(),
            latitude: faker.address.latitude(),
            longitude: faker.address.longitude(),
            timezone: faker.address.timeZone()
        },
        financeData: {
            amount: faker.finance.amount(),
            currencyName: faker.finance.currencyName(),
            currencyCode: faker.finance.currencyCode(),
            currencySymbol: faker.finance.currencySymbol()
        },
        userData: {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            userName: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar()
        },
        randomData: {
            number: faker.datatype.number(),
            float: faker.datatype.float(),
            date: faker.date.weekday(),
            month: faker.date.month()
        }
    }

    return (
        <section className={"container-fluid"}>
            <div className={"row"}>
                <NavBarTop data={data} />

                <div className={"col-lg-3 col-xl-3"}>
                    <NavBarSide data={data} />
                </div>

                <div className={"col-lg-9 col-xl-9"}>
                    <Values data={data} />
                    <Chart />
                    <Results data={data}/>
                </div>
            </div>
        </section>
    )
}

export default Dashboard