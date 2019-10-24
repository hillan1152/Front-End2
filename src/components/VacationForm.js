import React from 'react';
import axios from "axios";
import { withFormik, Form, Field } from "formik";




function AddVacation() {
    return (
        <div>

            <Form>
                <Field type="text" name="place" placeholder="Add Vacation" /><br />

                <button type="submit">Submit!</button>

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
        axios.post('https://reqres.in/api/users/', values)

            .then(response => {
                console.log(response)
                
                resetForm()
            })
            .catch(err => console.log(err.response));
    }
})(AddVacation);
export default FormikAddVacation;




