 import React, { useState, useEffect } from 'react';
 import axios from "axios";
 import { connect } from "react-redux";
 import { withFormik, Form } from "formik";
 import * as Yup from "yup";
 import { signUpUser } from "../actions";
 import { Link } from "react-router-dom";
 import styled from 'styled-components';

 const Interior = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items:center;

        h2 {
            font-size: 1.6rem;
            margin: 2%;
        }
        input {
            margin: 2.5%;
            border: 1px solid black;
            font-size: .8rem;
        }
        button {
            width: 50%;
            background: #83a931;
            font-size: 1rem;
            border: 1px solid black;
            border-radius: 6px;

            &:hover {
                background: white;
                border: 1px solid #83a931;
            }
        }
 `;



export function SignUp({ history, token }) {
     const [user, setUser] = useState({ username: '', password: '', confirmPassword:'', email: ''});

     useEffect(() => {
         if(token) {
             history.push("/vacations");
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
         if(user.username && user.password){
             setUser({ username:"", password: "", confirmPassword:"", email: ""});
         }
     };

     return (
         <Interior>
             <div className="signUp-page">
                 <h2>Sign Up</h2>
                 <Form onSubmit={handleSubmit}>
                     <input
                         type="text"
                         name="username"
                         placeholder="User Name"
                         value={user.username}
                         onChange={handleChange}
                     /><br/>
                     <input
                         type="text"
                         name="email"
                         placeholder="Email"
                         value={user.email}
                         onChange={handleChange}
                    />
                     <input
                         type="password"
                         name="password"
                         placeholder="Password"
                         value={user.password}
                         onChange={handleChange}
                     />
                      <input
                         type="password"
                         name="confirmPassword"
                         placeholder="Confirm Password"
                         value={user.confirmPassword}
                         onChange={handleChange}
                     /><br/>
                      <Link to="/trips"><button>Sign Up</button></Link>
                 </Form>
             </div>
         </Interior>
     )
 }

 const SignUpWithFormik = withFormik({
     mapPropsToValues: ({ username, password, confirmPassword }) => {
         return {
             username: username || "",
             password: password || "",
             confirmPassword: password || ""
         };
     },

     validationSchema: Yup.object().shape({
         username: Yup.string("Username is not valid").required(
             "Username is required"
         ),
         password: Yup.string().required("Password is required"),
         confirmPassword: Yup.string("Password is not valid").required("Password is required")
     }),
     handleSubmit(values,{props}) { //import from action
        props.signUpUser(values)
     }
 })(SignUp);

 const mapStateToProps = state => {
     return {
         token: state.token
     }
 }

 export default connect(
     mapStateToProps, 
     { signUpUser: signUpUser })(SignUpWithFormik);