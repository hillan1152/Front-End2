import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentCard from './CommentCard';

import styled from "styled-components";


const Output = styled.div`
    height: 84vh;
    position: sticky;
`;


export default function Comment() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('http://bw-vacaplanning.herokuapp.com')
            .then((response) => {
                console.log(response);
                // setData(response);

            })
            .catch(error => {
                console.log("the data was not return", error);
            });
    }, []);
    return (
        <Output >
            {data.map((comments, id) =>
                <CommentCard 
                key={id} 
                data={comments} 
                />)
            }
        </Output>
    );
}
