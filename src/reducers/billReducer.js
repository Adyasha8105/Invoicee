import { ADD, DELETE, UPDATE } from "../constants/actionTypes";

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
        case UPDATE:
            return {
                ...state,
                billItems: state.billItems.map((item, index) => {
                    if (index === action.payload.index) {
                        console.log(action.payload.item);
                        return action.payload.item;
                    }
                    return item;
                }),
            };
        default:
            return state;
    }
};

export default billReducer;
