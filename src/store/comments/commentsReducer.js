const initialState = { comments: [], by_book: [] };

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_COMMENTS":
      return { ...state, comments: action.payload };
    case "COMMENTS_BY_BOOK":
      const match = state.comments.filter(
        comm => comm.book_id === action.payload
      );
      if (match) {
        return { ...state, by_book: match };
      } else {
        return state;
      }
    default:
      return state;
  }
}
