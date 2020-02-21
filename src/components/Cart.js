import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/products/productsActions";
import { removeFromCart } from "../store/products/productsActions";
import { Link } from "react-router-dom";

class Cart extends Component {
  handleAddClick = product => {
    return this.props.dispatch(addToCart(product));
  };

  handleRemoveClick = product => {
    return this.props.dispatch(removeFromCart(product));
  };

  render() {
    const priceQtyPerItem = this.props.cart.map(prod => prod.qty * prod.price);

    const totalprice = priceQtyPerItem.reduce((acc, prod) => acc + prod, 0);

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
              <button>Proceed to checkout</button>
            </Link>
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
