import React, { useState, useEffect } from 'react';
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
// import styled from "styled-components";


function AddVacation({ status, props }) {
    const [vacation, setVacation] = useState([])

    useEffect(() => {
        status && setVacation(vacation => [...vacation, status])
    }, [status])
    return (
        <div>

            <Form>
                <Field type="text" name="place" placeholder="Add Vacation" /><br />
                <Link to="/trip-page"><button type="submit">Submit!</button></Link>
            </Form>
            <div className="outCont">
                {vacation.map(trip => (
                    <div className="output">
                        <ul key={trip.id}>
                            {/* Not Sure Code below is needed */}
                            {/* <Link to="/trip-page"
                                onClick={props.tripPage}>
                                <button>
                                    <li>
                                        {trip.place}
                                    </li>
                                </button>
                            </Link> */}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

const FormikAddVacation = withFormik({
    mapPropsToValues({ place }) {
        return {
            place: place || "",
        };
    },

    handleSubmit(values, { setStatus, resetForm }) {
        axios.post('https://reqres.in/api/vacation', values)
            .then(response => {
                console.log(response)
                setStatus(response.data);
                resetForm()
            })
            .catch(err => console.log(err.response));
    }
})(AddVacation);
export default FormikAddVacation;




