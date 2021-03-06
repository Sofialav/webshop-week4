import { defineState } from "redux-localstore";

const defaultState = [];
const initialState = defineState(defaultState)("cart");

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const productId = action.payload.id;
      const duplicate = state.find(obj => obj.id === productId);
      if (duplicate) {
        const updatedCart = state.map(it =>
          it.id === productId ? { ...it, qty: it.qty + 1 } : it
        );
        return updatedCart;
      } else {
        return [...state, action.payload];
      }
    }
    case "REMOVE_FROM_CART": {
      const productId = action.payload.id;
      const duplicate = state.find(obj => obj.id === productId);
      if (duplicate) {
        // if element is in cart
        if (duplicate.qty > 1) {
          // if I have more than one, I substract
          const updatedCart = state.map(it =>
            it.id === productId ? { ...it, qty: it.qty - 1 } : it
          );
          return updatedCart;
        } else {
          // I have only one, I filter it out
          const y = state.filter(obj => obj.id !== duplicate.id);
          return y;
        }
      } else {
        // It's not there, i don't do anything
        return state;
      }
    }
    case "CLEAR_CART": {
      return (state = []);
    }
    default:
      return state;
  }
}
