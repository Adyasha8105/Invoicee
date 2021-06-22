import {combineReducers} from "redux";
import billReducer from "./billReducer";
import  currencySymbol  from "./currencySymbol";
import sideBarReducer from "./discountReducer"; 

const reducers = combineReducers({
    billReducer, currencySymbol, sideBarReducer
});

export default reducers;
