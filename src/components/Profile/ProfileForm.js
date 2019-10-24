import React from 'react';
import { withFormik, Form, Field } from "formik";
import axios from "axios";


function ProfileForm() {
    
    return (
        <div>
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
        </div>
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