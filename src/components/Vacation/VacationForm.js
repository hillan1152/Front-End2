import React from 'react';
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";

const StyleForm = styled.div`
    padding: 4%;

    Form {
        /* display: flex;
    justify-content: center; */
        placeholder {
        width: 85%;
        height: 4.8vh;
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




