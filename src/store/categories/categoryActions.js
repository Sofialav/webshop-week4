export function fetchCategories() {
  return function thunk(dispatch, getState) {
    dispatch({ type: "GET_API_REQUEST" });
    fetch("http://localhost:4000/categories")
      .then(res => res.json())
      .then(categoriesDetails => {
        dispatch(setCategories(categoriesDetails));
      });
  };
}
export function setCategories(categoriesDetails) {
  return {
    type: "FETCH_CATEGORIES",
    payload: categoriesDetails
  };
}

export function fetchCategoryProducts(id) {
  return function thunk(dispatch, getState) {
    dispatch({ type: "GET_API_REQUEST" });
    fetch(`http://localhost:4000/products`)
      .then(res => res.json())
      .then(productsDetails => {
        const productsOfSingleCategory = productsDetails.filter(
          product => product.categoryId === parseInt(id)
        );
        dispatch(setCategory(productsOfSingleCategory));
      });
  };
}
export function setCategory(productsOfSingleCategory) {
  return {
    type: "FETCH_CATEGORY_PRODUCTS",
    payload: productsOfSingleCategory
  };
}
