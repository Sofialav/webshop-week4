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
        <ul class="list-group">
          {this.props.cart.map(prod => {
            return (
              <li class="list-group-item" key={prod.id}>
                <div>
                  <h3>{prod.title}</h3>
                  <p>{prod.author}</p>
                  <p>{prod.price}</p>
                </div>
                <span class="badge">14</span>
                <span class="badge">Total item price</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { cart: reduxState.cart };
}
export default connect(mapStateToProps)(Cart);
