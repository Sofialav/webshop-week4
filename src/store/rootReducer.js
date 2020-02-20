import { combineReducers } from "redux";
import { categoryReducer } from "./categories/categoryReducers";
import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";

export default combineReducers({
  categories: categoryReducer,
  products: productsReducer,
  cart: cartReducer
});
