const initialState = { products: [], search: [] };

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SEARCH_RESULTS":
      return { ...state, search: action.payload };
    default:
      return state;
  }
}
