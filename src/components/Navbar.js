import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const QtyPerItem = this.props.cartItems.map(prod => prod.qty);
    const NumberOfItems = QtyPerItem.reduce((acc, prod) => acc + prod, 0);

    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container navbar">
          <Link to={"/"}>
            <div className="navbar-brand">Home</div>
          </Link>
          <Link to={"/products"}>
            <div className="navbar-brand">Products</div>
          </Link>
          <Link to={"/cart"}>
            <div className="navbar-brand">Cart ({NumberOfItems})</div>
          </Link>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    cartItems: reduxState.cart
  };
}

export default connect(mapStateToProps)(Navbar);
