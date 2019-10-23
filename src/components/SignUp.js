 import React, { useState, useEffect } from 'react';
 import axios from "axios";
 import { connect } from "react-redux";
 import { withFormik, Form } from "formik";
 import * as Yup from "yup";
 import { signUpUser } from "../actions";
 import { Link } from "react-router-dom";

 const baseURL = 'http://bw-vacaplanning.herokuapp.com';


 function SignUp({ history, token }) {
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
         <div className="signUp-container">
             <div className="signUp-page">
                 <h2>Sign Up</h2>
                 <Form onSubmit={handleSubmit}>
                     <input
                         type="text"
                         name="username"
                         placeholder="User Name"
                         value={user.username}
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
                         value={user.password}
                         onChange={handleChange}
                     />
                      <Link to="/trips"><button>Sign Up</button></Link>
                 </Form>
             </div>
         </div>
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
     handleSubmit(values, {setStatus, resetForm}) { 
         axios.post('http://bw-vacaplanning.herokuapp.com/roles/role', values) 
               .then(response => { 
                   console.log(response)
                   setStatus(response.data); 
                   resetForm()
                 }) 
               .catch(err => console.log(err.response));
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