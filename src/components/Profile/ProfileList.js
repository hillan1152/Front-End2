import React, { useEffect, useState } from "react";

import axios from "axios";

import ProfileCard from "./ProfileCard";

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
                `http://bw-vacaplanning.herokuapp.com/vacations/vacations/${this.location}`
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
            <div>
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
            </div>
           
        </section>
    )
}

export default VacationList