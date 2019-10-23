import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { withFormik, Form, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { logInUser } from "../actions";

const baseURL = 'http://bw-vacaplanning.herokuapp.com';


function Login({ history, token }) {
    const [user, setUser] = useState({ username: '', password: ''});

    useEffect(() => {
        if(token) {
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
        if(user.username&& user.password){
            setUser({ username:"", password: ""});
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
                    <button>Lets Go!</button>
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
    mapStateToProps, 
    { logInUser: logInUser })(LoginWithFormik);
