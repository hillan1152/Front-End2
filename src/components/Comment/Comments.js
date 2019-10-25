// import React, { useState, useEffect } from 'react';
import React from 'react';
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";

// const CommentPrint = styled.div `
//     width: 100%;
//     background: lightgray;
//     height: 70vh;
// `;

const Input = styled.div`
    width:100%;
    box-sizing: border-box;
    background: black;

    textarea {
        width: 85%;
        height: 4.8vh;
    }
    button {
        font-size: 1.3rem;
        padding: 1%;
        margin: 1%;
        background: #83a931;

        &:hover {
            background: darkgrey;
        }
    }

    /* ::placeholder {
        width:85%;
    } */
`;

function UserForm({ status }) {
    // const [comments, setComment] = useState([])
    // console.log(useState);
    // useEffect(() => {
    //     status && setComment(comments => [...comments, status])
    // }, [status])
    return (
        <Input>
            {/* <div>
                {comments.map(words => (
                    <div className="output">
                        <ul key={words.id}>

                            <li>{words.details}</li>
                        </ul>
                    </div>
                ))}
            </div> */}

            <Form>


                <Field
                    component="textarea"
                    type="text"
                    name="commentary"
                    placeholder="comments"
                />
                <button type="submit">Submit!</button>
            </Form>

            

        </Input>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ commentary }) {
        return {
            commentary: commentary || ""
        };
    },

    handleSubmit(values, {  resetForm }) {
        axios.post('http://bw-vacaplanning.herokuapp.com/comments/newcom', values)
            .then(response => {
                console.log(response)
                // setStatus(response.data);
                resetForm()
            })
            .catch(err => console.log(err.response));
    }
})(UserForm);
export default FormikUserForm;


