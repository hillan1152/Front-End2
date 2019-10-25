import React, { useEffect, useState } from "react";

import axios from "axios";

import ProfileCard from "./ProfileCard";

import styled from "styled-components";

const Output = styled.div`
    display:flex;
    flex-wrap: wrap;
    padding: 3%;
    
`;

function VacationList() {
    const [person, setPerson] = useState([
        { name: 'Jeremy' },
        { name: 'April' },
        { name: 'Anthony' },
        { name: 'Diana' },
        { name: 'Kenneth' },
        { name: 'Damon' },
        { name: 'Manuel' },
        { name: 'Nabia' },
        { name: 'Christina' },

        
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