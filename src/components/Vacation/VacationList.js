import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import VacationCard from "./VacationCard";

import styled from "styled-components";

const Output = styled.div`
    display: flex;
    flex-direction:column;
    width: 60%;
    margin-top: 10%;
`;

function VacationList() {
    const [trip, setTrip] = useState([])
    useEffect(() => {
        axios
            .get(
                'http://bw-vacaplanning.herokuapp.com/vacations/vacations/'
                )
            .then((response) => {
                console.log(response.data);
                setTrip(response.data);

            })
            .catch(error => {
                console.log("the data was not return", error);
            });
    }, []);
    return (
        <Output>
            {trip.map((item, vacaid) => {
              return (
                  <Link to="/trip-page">
                  <VacationCard
                    key={vacaid} 
                    place={item.place}
                  />
                  </Link>
              );
            })}
        </Output>
    )
}

export default VacationList
