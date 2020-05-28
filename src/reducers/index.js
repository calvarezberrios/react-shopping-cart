import { combineReducers } from "redux";

import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer.js";

export const rootReducer = combineReducers({
    productReducer,
    cartReducer
});