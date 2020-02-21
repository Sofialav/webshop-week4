import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/products/productsActions";
import "./PreviewProducts.css";

class PreviewProducts extends Component {
  handleAddClick = product => {
    if (!product.inStock) {
      return alert("Sorry, this product is temporary out of stock");
    }
    return this.props.dispatch(addToCart(product));
  };

  displayIsInCart = () => {
    const inCart = this.props.cartItems.find(item => item.id === this.props.id);
    console.log("IS IN CART", inCart);

    if (inCart) {
      const itemInCart = `- ${inCart.qty} in your cart`;
      console.log(itemInCart);
      return itemInCart;
    } else {
      const itemInCart = " ";
      return itemInCart;
    }
  };
  render() {
    return (
      <div className="col-sm-4 prod-margin">
        <div key={this.props.id} className="prodPreview">
          <img src={this.props.imageUrl} className="mr-3" alt="" />
          <h5>{this.props.title}</h5>
          <p>{this.props.author}</p>
          <p>
            € {this.props.price}{" "}
            <span className="inCart">{this.displayIsInCart()}</span>
          </p>
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-danger disabled"
              onClick={() => this.handleAddClick(this.props.prod)}
            >
              Add to Cart
            </button>
            <Link to={`/products/${this.props.id}`}>
              <button type="button" className="btn disabled">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    cartItems: reduxState.cart
  };
}

export default connect(mapStateToProps)(PreviewProducts);
