const initialState = [];

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_COMMENTS":
      return [...state, action.payload];
    default:
      return state;
  }
}
