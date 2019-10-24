import React from 'react';
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";

const StyleForm = styled.div`
display: flex;
flex-direction: row;
padding-top: 4%;
//  justify-content: space-between;
 `;


function VacationForm() {
    return (
        <div>

            <Form>
                <StyleForm>
                    <Field type="text" name="place" placeholder="Add Vacation" /><br />

                    <button type="submit">Submit!</button>
                </StyleForm>
            </Form>

        </div>
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



