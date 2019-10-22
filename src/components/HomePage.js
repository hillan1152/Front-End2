import React from 'react';
import { Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
    height: 100vh;

    .header {

    }

    .cta {
        display: flex;


        .btnBox {
            display: flex;
            justify-content: space-evenly;

            button {
                font-size: 
            }
        }
    }
`;


function HomePage() {
    return (
        <Container>
            <div className="header">

            </div>
        <section className="cta">
            <div>
                <h1>The Vacation Plannner.</h1>
                <h3>Vacation Planning made super easy!</h3>
                <div className="btnBox">
                    <Link to="/sign-up"><button>Sign Up</button></Link>
                    <Link to="/login"><button>Let's Go!</button></Link>
                    
                </div>
            </div>
            <div>
                
            </div>
        </section>
        <div className="footer">
            <h5>About Us</h5>
            <h5>Site Map</h5>
        </div>
        </Container>
    )
}

export default HomePage

