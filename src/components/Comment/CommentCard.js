import React from 'react';

import styled from "styled-components";

const Card = styled.div`
    width: 80%;
    background: white;
    border-radius: 9px;
    border: 2ps solid black;
`;

const CommentCard = (props) => {
    return (
        <Card>
            {/* <h2>{props.name}</h2> */}
            <p>{props.comment}</p>
        </Card>
    );
};

export default CommentCard;