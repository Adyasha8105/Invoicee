import { LOGIN, LOGOUT } from "../constants/actionTypes"; 

const initialState = {
    user: null,
};
  
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN :
            return {
                ...state, 
                user: action.payload,
            };

        case LOGOUT : 
            return {
                user: null,
            };
        default:
            return state;
    }
};

export default userReducer;