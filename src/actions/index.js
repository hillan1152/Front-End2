import axios from 'axios';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { newItem } from './action'
import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCH_ITEM_START = "FETCH_ITEM_START";
export const FETCH_ITEM_SUCCESS = "FETCH_ITEM_SUCCESS";
export const FETCH_ITEM_FAILURE = "FETCH_ITEM_FAILURE";

export const ADD_ITEM_START = "ADD_ITEM_START";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const ADD_ITEM_FAILURE = "ADD_ITEM_FAILURE";

export const EDIT_ITEM_FAILURE = "EDIT_ITEM_FAILURE";
export const EDIT_ITEM_START = "ADD_ITEM_START";
export const EDIT_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";

const baseURL = 'http://bw-vacaplanning.herokuapp.com';

export const logInUser = (user) => dispatch => {
    let URL = baseURL + "/login";
    dispatch({ type: FETCH_ITEM_START, payload: "Logging In..."})
    axiosWithAuth().post(URL, user)
        .then(res =>{ dispatch({
            type: FETCH_ITEM_SUCCESS,
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
        type: ADD_ITEM_START})
        axios
        .post(URL, user)
        .then(res =>{ dispatch({
            type: ADD_ITEM_SUCCESS,
            payload:res.data
        })
    }, true)
    .catch(err => dispatch({type:ADD_ITEM_FAILURE, payload:err}))
//            console.log(res.data)
//        })
//       .catch(err =>
//            console.log(err)
//             .dispatch({ type:ERROR, payload: err.response.data.code}))
}
    
