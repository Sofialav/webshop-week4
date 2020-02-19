export function fetchProducts(dispatch) {
  fetch("http://localhost:4000/products")
    .then(res => res.json())
    .then(data => {
      dispatch(setProduct(data));
    });
}

export function setProduct(products) {
  console.log("set products func", products);
  return {
    type: "SET_PRODUCTS",
    payload: products
  };
}
