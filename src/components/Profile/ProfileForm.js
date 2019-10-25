import React from 'react';
import { withFormik, Form, Field } from "formik";
import axios from "axios";

import styled from "styled-components";

const Who = styled.div`

    input {
        width: 40vw;
        height: 5vh;
        text-align: center;
        font-size: 2rem;
        border-radius: 8px;
        margin: 2%;
        border: 1px solid black;
    }
    button {
        font-size: 1.3rem;
        padding: 2%;
        border-radius: 8px;
        background: #83a931;
        border: 1px solid black;
        margin: 2%;

        &:hover {        
        background: white;
        border: 3px solid #83a931;
        }//closes the hover
    }


`;

function ProfileForm() {
    
    return (
        <Who>
            <Form>
                <Field type="text" name="name" placeholder="Name" /><br />
                {/* <Field type="text" name="location" placeholder="city" /><br />
                <Field
                    component="textarea"
                    type="text"
                    name="bio"
                    placeholder="Bio"
                /><br />
                <Field
                    component="textarea"
                    type="text"
                    name="idealExperience"
                    placeholder="Ideal Experience"
                /><br /> */}

                <button type="submit">Submit!</button>

            </Form>
        </Who>
    )
}

const FormikProfileForm = withFormik({
    mapPropsToValues({ name, location, bio, idealExperience  }) {
        return {
            name: name || "",
            // location: location || "",
            // bio: bio || "",
            // idealExperience: idealExperience || ""
        };
    },

    handleSubmit(values, { resetForm }) {
        axios.post('', values)
            .then(response => {
                console.log(response)
                
                resetForm()
            })
            .catch(err => console.log(err.response));
    }
})(ProfileForm);
export default FormikProfileForm;