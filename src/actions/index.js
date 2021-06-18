import { ADD, DELETE } from "../constants/actionTypes";

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
