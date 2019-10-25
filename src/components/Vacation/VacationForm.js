import React from 'react';
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";

const StyleForm = styled.div`
    padding: 4%;

    input {
        width: 25vw;
        height: 3vh;
        border: 2px solid #83a931;
        border-radius: 9px;
        text-align:center;
        font-size: 1.5rem;
        margin: 5%;
    }
    button {
        width: 15vw;
        height: 3vh;
        font-size: 1.5rem;
        border-radius: 9px;
        background: black;
        color: white;

        &:hover {
            background: white;
            color: black;
            border: 2px solid #83a931;

        }
    }

 `;


function VacationForm() {
    return (
        <StyleForm>

            <Form>
                <Field type="text" name="place" placeholder="Add Vacation" /><br/>
                <button type="submit">Submit!</button>
            </Form>

        </StyleForm>
    )
}

const FormikAddVacation = withFormik({
    mapPropsToValues({ place }) {
        return {
            place: place || "",
        };
    },

    handleSubmit(values, { resetForm }) {
        axios.post('http://bw-vacaplanning.herokuapp.com/vacations/newvaca/', values)

            .then(response => {
                console.log(response)

                resetForm()
            })
            .catch(err => console.log(err.response));
    }
})(VacationForm);
export default FormikAddVacation;




