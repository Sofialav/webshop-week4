const initialState = [];

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
}
