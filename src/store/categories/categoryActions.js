export function fetchCategories() {
  console.log("THISLINE");
  return function thunk(dispatch, getState) {
    fetch("http://localhost:4000/categories")
      .then(res => res.json())
      .then(categoriesDetails => {
        console.log(categoriesDetails);
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
