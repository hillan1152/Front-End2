import React from 'react'
import VacationForm from "../Vacation/VacationForm";
import NavBar from "../Navigation/NavBar";
import VacationList from "../Vacation/VacationList";
import Footer from '../InfoPages/Footer';

import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width:100%;

    .middle {
        display: flex;
        height: 84vh;
    }
`;



function Trips(props) {
    return (
        <Container>
            <NavBar />
            <div className="middle"> 
                <VacationForm />    
                <VacationList />
            </div>
            
            <Footer />
        </Container>
    )
}

export default Trips
