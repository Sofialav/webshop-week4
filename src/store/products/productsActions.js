export function fetchProducts(dispatch) {
  fetch("http://localhost:4000/products")
    .then(res => res.json())
    .then(data => {
      dispatch(setProduct(data));
    });
}

export function setProduct(products) {
  return {
    type: "SET_PRODUCTS",
    payload: products
  };
}
export function displayProduct(productId) {
  return {
    type: "DISPLAY_PRODUCT",
    payload: {
      id: parseInt(productId)
    }
  };
}
export function searchByTitle(input) {
  return {
    type: "SEARCH_RESULTS",
    payload: input
  };
}
