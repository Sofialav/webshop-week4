const initialState = {};

export function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CATEGORIES": {
      return {
        ...state,
        categoriesDetails: action.payload,
        loading: false
      };
    }
    case "FETCH_CATEGORY_PRODUCTS": {
      return {
        ...state,
        singleCategoryProducts: action.payload,
        loading: false
      };
    }
    case "GET_API_REQUEST":
      return { ...state, loading: true };
    default: {
      return state;
    }
  }
}
