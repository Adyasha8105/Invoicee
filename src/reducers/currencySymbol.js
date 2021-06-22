import { UPDATE_CURRENCY  } from "../constants/actionTypes";

const currencystate = {
  currency: "Rs",
}

const currencySymbol = (state = currencystate, action) => {
  switch (action.type) {
      case UPDATE_CURRENCY :
          return {
              ...action.payload
          };
      default:
          return state;
  }
};

export default currencySymbol;