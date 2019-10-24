import React from 'react'
import VacationForm from "./VacationForm";
import NavBar from "./NavBar";
import VacationList from "./VacationList";

function Trips(props) {
    return (
        <div>
            <NavBar />
            <VacationForm />
            <VacationList />
        </div>
    )
}

export default Trips
