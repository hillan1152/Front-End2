import axiosWithAuth from '../utils/axiosWithAuth';

export const AUTHORIZING = "AUTHORIZING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const ERROR = "ERROR"

const baseURL = 'http://bw-vacaplanning.herokuapp.com';

export const logInUser = (user) => dispatch => {
    let URL = baseURL + "/login";
    dispatch({ type: AUTHORIZING, payload: "Logging In..."})
    axiosWithAuth().post(URL, user)
        .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data.token, user: user.username}))
        .catch(err => dispatch({type: ERROR, payload: err.response.data.code}))
}