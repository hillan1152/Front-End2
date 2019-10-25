import React, { useEffect, useState } from "react";

import axios from "axios";

import ProfileCard from "./ProfileCard";

import styled from "styled-components";

const Output = styled.div`
    width: 90%;
    /* height: 10vh; */
    /* background: lightgrey; */
    /* border-radius: 8px; */
    /* box-shadow: 0 0 5px 5px darkgrey; */
    /* border: 2px solid black; */
    margin: 5%;
    display:flex;
    
    /* justify-content:center;
    align-items:center; */

    h2 {
        font-size: 2.5rem;
    }
`;

function VacationList() {
    const [person, setPerson] = useState([
        { 
            name: 'Jeremy',
            location: 'Bay Area',
            bio: 'Midwest Man living it up in the Bay!',
            idealExperience: 'Fun adventure with friends!'
        },
        
])
    useEffect(() => {
        axios
            .get(
                // `http://bw-vacaplanning.herokuapp.com/vacations/vacations/${this.location}`
                )
            .then((response) => {
                console.log(response);
                // setPerson(response);

            })
            .catch(error => {
                console.log("the data was not return", error);
            });
    }, []);
    return (
        <section>
            <Output>
                {person.map((item, id) => {
                return (
                    <ProfileCard
                        key={id} 
                        name={item.name}
                        // location={item.location}
                        // bio={item.bio}
                        // idealExperience={item.idealExperience}
                    />
                );
                })}
            </Output>
           
        </section>
    )
}

export default VacationList