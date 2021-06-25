import {combineReducers} from "redux";
import billReducer from "./billReducer";
import  currencySymbol  from "./currencySymbol";
import sideBarReducer from "./discountReducer"; 
import userReducer from "./userReducer"; 

const reducers = combineReducers({
    billReducer, currencySymbol, sideBarReducer, userReducer
});

export default reducers;
