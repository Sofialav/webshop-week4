import React, { Component } from "react";
import { connect } from "react-redux";
import {
  removeFromCart,
  clearCart,
  addToCart
} from "../store/cart/cartActions";
import { Link } from "react-router-dom";

class Cart extends Component {
  handleAddClick = product => {
    return this.props.dispatch(addToCart(product));
  };

  handleRemoveClick = product => {
    return this.props.dispatch(removeFromCart(product));
  };
  handleClearCart = () => {
    return this.props.dispatch(clearCart());
  };
  render() {
    const priceQtyPerItem = this.props.cart.map(prod => prod.qty * prod.price);
    const totalprice = priceQtyPerItem.reduce((acc, prod) => acc + prod, 0);
    if (this.props.cart.length < 1) {
      return <h2 className="mt-4">Your cart is empty</h2>;
    }
    return (
      <div>
        <ul className="list-group">
          {this.props.cart.map(prod => {
            return (
              <li className="list-group-item" key={prod.id}>
                <div>
                  <h3>{prod.title}</h3>
                  <p>{prod.author}</p>
                  <p>€{prod.price}</p>
                </div>

                <p className="badge">Units</p>
                <button onClick={() => this.handleAddClick(prod)}>+</button>
                <span className="badge">{prod.qty}</span>
                <button onClick={() => this.handleRemoveClick(prod)}>-</button>

                <p className="badge">Total price</p>
                <span className="badge">{prod.qty * prod.price}</span>
              </li>
            );
          })}
          <li className="list-group-item">
            <p>Total: € {totalprice}</p>
            <Link to={"/checkout"}>
              <button className="mr-1">Proceed to checkout</button>
            </Link>
            <button className="ml-1" onClick={this.handleClearCart}>
              CLear cart
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { cart: reduxState.cart };
}
export default connect(mapStateToProps)(Cart);
