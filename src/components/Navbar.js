import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  render() {
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
            <div className="navbar-brand">Cart</div>
          </Link>
          <div className="navbar-brand">0</div>
          <Link to={"/checkout"}>
            <div className="navbar-brand">Login</div>
          </Link>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    categories: reduxState.categories.categoriesDetails
  };
}

export default connect(mapStateToProps)(Navbar);
