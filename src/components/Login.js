import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";

const baseURL = 'http://bw-vacaplanning.herokuapp.com';


function Login({ history, token }) {
    const [user, setUser] = useState({ username: '', password: ''});

    useEffect(() => {
        if(token) {
            history.push("/homepage");
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
            
        }
    }
}