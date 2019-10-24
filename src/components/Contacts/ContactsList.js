import React, { useEffect, useState } from "react";
import axios from "axios";

import ContactCard from "./ContactCard";

function ContactList() {
    const [person, setPerson] = useState([])
    useEffect(() => {
        axios
            .get(
                'http://bw-vacaplanning.herokuapp.com/users/users/all'
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
        <div>
            {person.map((item, userName) => {
                return (

                    <ContactCard
                        key={userName}
                        name={item.username}
                    />

                );
            })}
        </div>
    )
}

export default ContactList
