import data from "../data";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchProductData = () => dispatch => {
    dispatch({
        type: FETCH_START
    });

    setTimeout(() => {
        if(data) {
            dispatch({
                type: FETCH_SUCCESS,
                payload: data
            });
        } else {
            dispatch({
                type: FETCH_FAILURE,
                payload: "Could not fetch product data"
            })
        }
    }, 500)
}