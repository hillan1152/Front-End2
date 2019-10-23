
/*import {
    FETCH_Item_START,
    FETCH_Item_SUCCESS,
    FETCH_Item_FAILURE,
    ADD_Item_START,
    ADD_Item_SUCCESS,
    ADD_Item_FAILURE,
    EDIT_ITEM_START,
    EDIT_ITEM_SUCCESS,
    EDIT_ITEM_FAILURE,
} from './';

const initialState = {
    items:[],
    errors:"",
    isFetching: false
}

export const rootReducer = (state = initialState, { type, payload,}) =>{
    switch (type) {
        case FETCH_ITEM_START:
            return {
                ...state,
                errors:"",
                fetching:true
            };
        case FETCH_ITEM_SUCCESS:
            return{
                ...state,
                errors:"",
                items: payload,
                fetching: false
            };
        case FETCH_ITEM_FAILURE:
            return {
                ...state,
                errors: payload,
                fetching: false
            };
        case ADD_ITEM_START:
            return {
                ...state,
                fetching: true,
                error: ''
            };
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                items: payload,
                fetching:false,
                error: ""
            };    
        case ADD_ITEM_FAILURE:
            return {
                ...state,
                error: payload
            };
        case EDIT_ITEM_START:
            return {
                ...state,
                fetching: true,
                error: ''
            };
            case EDIT_ITEM_SUCCESS:
            return {
                ...state,
                items: payload,
                fetching:false,
                error: ""
            };
        case EDIT_ITEM_FAILURE:
            return {
                ...state,
                error: payload
            }
            default:
                 return state;
    }
} */
