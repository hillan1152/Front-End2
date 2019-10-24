import React from 'react'
import VacationForm from "./VacationForm";
import NavBar from "./NavBar";
import VacationList from "./VacationList";
import Footer from './Footer';

function Trips(props) {
    return (
        <div>
            <NavBar />
            <VacationForm />
            <VacationList />
            <Footer />
        </div>
    )
}

export default Trips
