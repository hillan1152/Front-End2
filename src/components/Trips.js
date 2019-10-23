import React from 'react'
import AddVacation from "./addVacation";
import NavBar from "./NavBar";
// import VacationList from "./VacationList";

function Trips(props) {
    return (
        <div>
            <NavBar />
            <AddVacation />
            {/* <VacationList /> */}
        </div>
    )
}

export default Trips
