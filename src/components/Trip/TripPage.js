import React from 'react'

import NavBar from "../Navigation/NavBar";
import Comments from "../Comment/Comments";
import CommentList from "../Comment/CommentList";
import ContactsList from "../Contacts/ContactsList";
import Footer from '../InfoPages/Footer';

import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width:100%;

    .middle {
        display: flex;
        height: 85vh;

        .left {
            width: 20%;
            background:black;
        }
        .right {
            width: 80%;
            border: 10px solid #83a931;

            .output {
                height: 76.5vh;
                background: gray;
                
            }
        }
    }
`;


function TripPage() {
    return (
        <Container>
            <NavBar />
            <div className="middle">
                <div className="left">
                    <ContactsList />
                </div>
                <div className="right">
                    <div className="output">
                        <CommentList />
                    </div>
                    <Comments />
                </div>
            </div>
            <Footer />
        </Container>
    )
}

export default TripPage
