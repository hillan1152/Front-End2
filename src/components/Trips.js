import React from 'react'
import VacationForm from "./VacationForm";
import NavBar from "./NavBar";
import VacationList from "./VacationList";
import styled from "styled-components";


const Container = styled.div`
background-color: #FBFFF4;
height: 100%;
text-align: center;
`;

const AddForm = styled.div`
display: flex;
flex-direction: row;
padding: 4% 0 0 4%;
background-color: #FBFFF4;
//  justify-content: space-between;
 `;

const Card = styled.div`
 display: flex;
 flex-direction: colum;
 margin-left: 5%;
 margin-top: 4%;

 //  justify-content: space-between;
  `;

function Trips(props) {
    return (
        <div>
            <NavBar />
            <Container>

                <AddForm>
                    <VacationForm />
                </AddForm>
                <Card>
                    <VacationList />
                </Card>
            </Container>
        </div>
    )
}

export default Trips
