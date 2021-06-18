import { ADD, DELETE } from "../constants/actionTypes";

const initialState = {
    billItems: [],
};

const billReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                billItems: [...state.billItems, action.payload],
            };
        case DELETE:
            return {
                ...state,
                billItems: state.billItems.filter(
                    (item, index) => index !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default billReducer;
