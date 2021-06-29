import {combineReducers} from "redux";
import billReducer from "./billReducer";
import  currencySymbol  from "./currencySymbol";
import sideBarReducer from "./discountReducer"; 
import userReducer from "./userReducer"; 
import invoiceReducer from "./invoiceReducer";

const reducers = combineReducers({
    billReducer, currencySymbol, sideBarReducer, userReducer, invoiceReducer
});

export default reducers;
