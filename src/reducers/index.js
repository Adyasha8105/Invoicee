import {combineReducers} from "redux";
import billReducer from "./billReducer";
import  currencySymbol  from "./currencySymbol";

const reducers = combineReducers({
    billReducer, currencySymbol
});

export default reducers;
