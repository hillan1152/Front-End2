import React from 'react';
import Login from './Login';
//this is for testing routes
import { Link } from "react-router-dom";


function LoginPage() {
    return (
        <div>
            <Link to="/trips"><h1>testing routes</h1></Link>
            {/* <Login /> */}
        </div>
    )
}

export default LoginPage
