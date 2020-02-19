const initialState = {};

export function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CATEGORIES": {
      return {
        ...state,
        categoriesDetails: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
