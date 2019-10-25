import React from 'react'

import NavBar from '../Navigation/NavBar';
import ProfileForm from './ProfileForm';
import ProfileList from './ProfileList';
import Footer from '../InfoPages/Footer';

import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width:100%;

    .middle {
        display: flex;
        flex-direction:column;
        height: 87vh;

        .top {
            background:black;
            height: 30vh;
        }
        .bottom {
            background:darkgrey;
            height: 57vh;
            display: flex;
            justify-content:center;
            align-items: center;
        }
    }
`;


function ProfilePage() {
    return (
        <Container>
            <NavBar />
            <div className="middle">
                <div className="top">
                    <ProfileList />
                </div>
                <div className="bottom">
                    <ProfileForm/>
                </div>
            </div>
             <Footer />
        </Container>
    )
}

export default ProfilePage
