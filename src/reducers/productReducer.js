import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from "../actions/productActions";

export const productState = {
    data: [],
    isFetching: false,
    error: ""
}

export const productReducer = (state = productState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false,
                error: ""
            };
        case FETCH_FAILURE:
            return {
                ...state,
                data: {},
                isFetching: false,
                error: action.payload
            };
        default: 
            return state;
    }
}