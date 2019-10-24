import React from 'react'

import NavBar from "../Navigation/NavBar";
import Comments from "../Comment/Comments";
import ContactsList from "../Contacts/ContactsList";
import Footer from '../InfoPages/Footer';

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
            <Footer />
        </div>
    )
}

export default TripPage
