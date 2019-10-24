import React from 'react'
import VacationForm from "../Vacation/VacationForm";
import NavBar from "../Navigation/NavBar";
import VacationList from "../Vacation/VacationList";
import Footer from '../InfoPages/Footer';


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
