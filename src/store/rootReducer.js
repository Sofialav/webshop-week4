import { combineReducers } from "redux";
import { categoryReducer } from "./categories/categoryReducers";
import productsReducer from "./products/productsReducer";

export default combineReducers({
  havingFun: havingFunReducer,
  categories: categoryReducer,
   products: productsReducer
  });

function havingFunReducer(state = "yes", action) {
  switch (action.type) {
    case "SET_HAVING_FUN": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
