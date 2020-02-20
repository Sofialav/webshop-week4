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
    default:
      return state;
  }
}
