import React from 'react'

import NavBar from "./NavBar";
import Comments from "./Comment/Comments";
import ContactsList from "./ContactsList"
import Footer from './Footer';

import styled from "styled-components";

const Center = styled.div`
    width: 100%;
    display: flex;

    .left {
        width: 20%;
    }
    .right {
        width: 70%;
        background: lightgray;
    }

`;

function TripPage() {
    return (
        <div>
            <NavBar />
            <Center>
                <div className="left">
                    <ContactsList />
                </div>
                <div className="right">
                    <Comments />
                </div>
            </Center>
<<<<<<< HEAD

=======
            <Footer />
>>>>>>> 007772a9953afed732fc2d5d273e90031001352c
        </div>
    )
}

export default TripPage
