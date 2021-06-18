import { ADD, DELETE, UPDATE } from "../constants/actionTypes";

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
