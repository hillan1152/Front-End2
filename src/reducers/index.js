import { AUTHORIZING, LOGIN_SUCCESS, ERROR } from '../actions'

const initialState = {
    username: localStorage.getItem('username'),
    token: localStorage.getItem('token'),
    isFetching: false,

}


export const reducer = ( state = initialState, action) => {
    switch(action.type){
        case AUTHORIZING:
            return{...state, isFetching: true, fetching_message: action.payload}
        case LOGIN_SUCCESS:
            localStorage.setItem('token')
            
        default: 
            return state;
    }
}