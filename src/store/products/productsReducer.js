const initialState = { products: [], search: [] };

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SEARCH_RESULTS": {
      const inputTitle = action.payload;
      const result = state.products.filter(obj => obj.title === inputTitle);

      if (result.length > 0) {
        return { ...state, search: result };
      } else {
        return state;
      }
    }
    case "DISPLAY_PRODUCT": {
      const details = state.products.find(obj => obj.id === action.payload.id);
      if (details) {
        return { ...state, products: details };
      } else {
        return state;
      }
    }
    default:
      return state;
  }
}
