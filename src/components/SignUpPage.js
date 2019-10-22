import React from 'react';
import SignUp from './SignUp';
//the below line is for testing routes
import { Link } from "react-router-dom";

function SignUpPage() {
    return (
        <div>
            <Link to="/trips">
                <h1>testing routes</h1></Link>
            {/* <SignUp /> */}
        </div>
    )
}

export default SignUpPage;
