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
export function removeFromCart(product) {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      id: product.id,
      title: product.title,
      author: product.author,
      price: product.price,
      qty: 1
    }
  };
}
export function clearCart() {
  return {
    type: "CLEAR_CART"
  };
}
