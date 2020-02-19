import { combineReducers } from "redux";
import { categoryReducer } from "./categories/categoryReducers";

export default combineReducers({
  havingFun: havingFunReducer,
  categories: categoryReducer
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
