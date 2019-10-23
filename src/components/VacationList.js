import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import VacationCard from "./VacationCard";

function VacationList() {
    const [trip, setTrip] = useState([
        // { place: 'Hawaii'},
        // { place: 'France'},
        // { place: 'Thailand'}
])
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
        <div>
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
        </div>
    )
}

export default VacationList
