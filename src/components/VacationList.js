import React, { useEffect, useState } from "react";
import axios from "axios";
import VacationCard from "./VacationCard";

function VacationList() {
    const [trip, setTrip] = useState([
        { place: 'Hawaii'},
        { place: 'France'},
        { place: 'Thailand'}
])
    useEffect(() => {
        axios
            .get(
                // 'http://bw-vacaplanning.herokuapp.com/vacations/vacations/{place}'
                )
            .then((response) => {
                console.log(response);
                setTrip(response);

            })
            .catch(error => {
                console.log("the data was not return", error);
            });
    }, []);
    return (
        <div>
            {trip.map((item, id) => {
              return (
                  <VacationCard
                    key={id} 
                    place={item.place}
                  />
              );
            })}
        </div>
    )
}

export default VacationList
