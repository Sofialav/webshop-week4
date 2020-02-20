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

export function addToCart(product) {
  return {
    type: "ADD_TO_CART",
    payload: {
      id: product.id,
      title: product.title,
      author: product.author,
      price: product.price,
      qty: 1
    }
  };
}
