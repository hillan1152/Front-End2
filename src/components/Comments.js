
import React, { useState, useEffect } from 'react';
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

    /* ::placeholder {
        width:85%;
    } */
`;

function UserForm({ status }) {
    const [comments, setComment] = useState([])
    console.log(useState);
    useEffect(() => {
        status && setComment(comments => [...comments, status])
    }, [status])
    return (
        <div>
            <div>
                {comments.map(words => (
                    <div className="output">
                        <ul key={words.id}>

                            <li>{words.commentary}</li>
                        </ul>
                    </div>
                ))}
            </div>

            <Form>
                <Field
                    component="textarea"
                    type="text"
                    name="commentary"
                    placeholder="comments"
                />

                <button type="submit">Submit!</button>
            </Form>

        </div>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ commentary }) {
        return {
            commentary: commentary || ""
        };
    },

    handleSubmit(values, { setStatus, resetForm }) {
        axios.post('https://reqres.in/api/comments', values)
            .then(response => {
                console.log(response)
                setStatus(response.data);
                resetForm()
            })
            .catch(err => console.log(err.response));
    }
})(UserForm);
export default FormikUserForm;


