export function searchBook(input) {
  return function thunk(dispatch) {
    // fetch("http://localhost:4000/products/?title=${input}").then(book => {
    //   dispatch(searchByTitle(book));
    // });
  };
}

export function searchByTitle(books) {
  return {
    type: "SEARCH_RESULTS",
    payload: books
  };
}
