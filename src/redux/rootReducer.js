import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { countReducer } from "./countReducer";

export const rootReducer=combineReducers({
    likes:likesReducer,
    count:countReducer
})