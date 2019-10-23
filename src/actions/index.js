import axios from 'axios';
import { connect } from 'react-redux';
import React, { Component } from 'react';

export const FETCH_ITEM_START = "FETCH_ITEM_START";
export const FETCH_ITEM_SUCESS = "FETCH_ITEM_SUCCESS";
export const FETCH_ITEM_FAILURE = "FETCH_ITEM_FAILURE"



export const logInUser = (user) => dispatch => {
    let URL = baseURL + "/login";
    dispatch({ type: FETCH_ITEM_START, payload: "Logging In..."})
    axiosWithAuth().post(URL, user)
        .then(res =>{ dispatch({
            type: FETCH_ITEM_SUCESS,
            payload: res.data
        })
    }, true)
//            console.log(res.data) )
        .catch(err => dispatch ({type: FETCH_ITEM_FAILURE,payload: err})) 
           // console.log(err) ) 
           // .dispatch({type: ERROR, payload: err.response.data.code})
}

export const signUpUser = (user) => dispatch => {
    let URL = baseURL + "/register";
    dispatch({
        type: FETCH_ITEM_START})
        axios
        .post(URL, user)
        .then(res =>{
            console.log(res.data)
        })
        .catch(err =>
            console.log(err)
             .dispatch({ type:ERROR, payload: err.response.data.code}))
}
    
