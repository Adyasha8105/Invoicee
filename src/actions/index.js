import { ADD, DELETE, UPDATE, UPDATE_CURRENCY, ADD_DISCOUNT, ADD_VAT } from "../constants/actionTypes";

export const addItem = (item) => (dispatch) => {
    dispatch({
        type: ADD,
        payload: item,
    });
};

export const deleteItem = (index) => (dispatch) => {
    dispatch({
        type: DELETE,
        payload: index,
    });
};

export const updateItem = (item, index) => (dispatch) => {
    dispatch({
        type: UPDATE,
        payload: { item: item, index: index },
    });
};

export const updateCurrency = (currency) => (dispatch) => {
    dispatch({
        type: UPDATE_CURRENCY ,
        payload: currency,
    });
};

export const addDiscount = (discount) => (dispatch) => {
    dispatch({
        type: ADD_DISCOUNT, 
        payload: discount, 
    })
}

export const addVAT = (vat) => (dispatch) => {
    dispatch({
        type: ADD_VAT, 
        payload: vat, 
    })
}
