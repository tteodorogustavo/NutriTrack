import { combineReducers } from "redux";
import { AuthReducer } from "./reducers/AuthReducer";

const reducers = combineReducers ({
    auth:AuthReducer
});

export default reducers;