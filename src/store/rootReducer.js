import { combineReducers } from "redux";
import { categoryReducer } from "./categories/categoryReducers";
import productsReducer from "./products/productsReducer";

export default combineReducers({
  categories: categoryReducer,
  products: productsReducer
});
