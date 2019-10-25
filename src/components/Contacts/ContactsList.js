import React, { useEffect, useState } from "react";
import axios from "axios";

import ContactCard from "./ContactCard";

import styled from "styled-components";

const Output = styled.div`
     padding: 1%;
     margin:2% 0;
`;

function ContactList() {
    const [person, setPerson] = useState([
        { username: 'Jeremy' },
        { username: 'April' },
        { username: 'Anthony' },
        {username: 'Diana' },
        { username: 'Kenneth' },
        { username: 'Damon' },
        { username: 'Manuel' },
        { username: 'Nabia' },
        { username: 'Christina' },
    ])
    useEffect(() => {
        axios
            .get(
                // 'http://bw-vacaplanning.herokuapp.com/users/users/all'
            )
            .then((response) => {
                console.log(response);
                // setPerson(response.data);

            })
            .catch(error => {
                console.log("the data was not return", error);
            });
    }, []);
    return (
        <Output>
            {person.map((item, userName) => {
                return (

                    <ContactCard
                        key={userName}
                        name={item.username}
                    />

                );
            })}
        </Output>
    )
}

export default ContactList
