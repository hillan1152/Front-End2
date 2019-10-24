import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import { logInUser } from "../actions";
//this is for the link on the button
import { Link } from "react-router-dom";



function Login({ history, token }) {
    const [user, setUser] = useState({ username: '', password: '' });

    useEffect(() => {
        if (token) {
            history.push("/HomePage");
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
        if (user.username && user.password) {
            setUser({ username: "", password: "" });
            
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
                    /><br/>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                    /><br/>
                    <Link to="/trips"><button>Lets Go!</button></Link>
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
    }),
     handleSubmit(values, { props }) { //import from action
         props.logInUser(values)}
})
(Login);

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

export default connect(
    mapStateToProps,
    { logInUser: logInUser })(LoginWithFormik);
