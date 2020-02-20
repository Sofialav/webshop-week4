import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  componentDidMount() {
    console.log("Cart did mount");
  }
  render() {
    return (
      <div>
        This is cart
        <ul className="list-group">
          {this.props.cart.map(prod => {
            return (
              <li className="list-group-item" key={prod.id}>
                <div>
                  <h3>{prod.title}</h3>
                  <p>{prod.author}</p>
                  <p>{prod.price}</p>
                </div>
                <span className="badge">{prod.qty}</span>
                <span className="badge">{prod.qty * prod.price}</span>
              </li>
            );
          })}
          <li className="list-group-item">
            <p>Total:</p>
            <button>Proceed to checkout</button>
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
