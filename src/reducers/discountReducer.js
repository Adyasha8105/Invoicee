import {  ADD_DISCOUNT, ADD_VAT  } from "../constants/actionTypes";

const initialState = {
    discount: 0, 
    vat: 0,
};

const sideBarReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_DISCOUNT: 
          return {
              ...state, 
              discount: action.payload, 
          };
      case ADD_VAT: 
          return {
              ...state, 
              vat: action.payload, 
          };
      default:
          return state;
  }
};

export default sideBarReducer;
