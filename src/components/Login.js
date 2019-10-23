import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { withFormik, Form, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { logInUser } from "../actions";
<<<<<<< HEAD
=======
//this is for the link on the button
import { Link } from "react-router-dom";
>>>>>>> e8894bd26f940337032d872a1834abc86cfc6c3d

const baseURL = 'http://bw-vacaplanning.herokuapp.com';


function Login({ history, token }) {
<<<<<<< HEAD
    const [user, setUser] = useState({ username: '', password: ''});

    useEffect(() => {
        if(token) {
=======
    const [user, setUser] = useState({ username: '', password: '' });

    useEffect(() => {
        if (token) {
>>>>>>> e8894bd26f940337032d872a1834abc86cfc6c3d
            history.push("/addvacation");
        }
    }, [history, token])

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
<<<<<<< HEAD
        if(user.username&& user.password){
            setUser({ username:"", password: ""});
=======
        if (user.username && user.password) {
            setUser({ username: "", password: "" });
>>>>>>> e8894bd26f940337032d872a1834abc86cfc6c3d
        }
    };

    return (
        <div className="login-container">
            <div className="login-page">
                <h2>Login</h2>
                <Form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="User Name"
                        value={user.username}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                    />
<<<<<<< HEAD
                    <button>Lets Go!</button>
=======
                    <Link to="/trips"><button>Lets Go!</button></Link>
>>>>>>> e8894bd26f940337032d872a1834abc86cfc6c3d
                </Form>
            </div>
        </div>
    )
}

const LoginWithFormik = withFormik({
    mapPropsToValues: ({ username, password }) => {
        return {
            username: username || "",
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string("Username is not valid").required(
            "Username is required"
        ),
        password: Yup.string().required("Password is required")
    })
})(Login);

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

export default connect(
<<<<<<< HEAD
    mapStateToProps, 
    { logInUser: logInUser })(LoginWithFormik);
=======
    mapStateToProps,
    { logInUser: logInUser })(LoginWithFormik);
>>>>>>> e8894bd26f940337032d872a1834abc86cfc6c3d
