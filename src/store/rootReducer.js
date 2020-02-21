import { combineReducers } from "redux";
import { categoryReducer } from "./categories/categoryReducers";
import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";
import commentsReducer from "./comments/commentsReducer";

export default combineReducers({
  categories: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
  comments: commentsReducer
});
