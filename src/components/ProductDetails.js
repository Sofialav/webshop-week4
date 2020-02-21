import React, { Component } from "react";
import { connect } from "react-redux";
import { displayProduct } from "../store/products/productsActions";
import { addToCart } from "../store/products/productsActions";

class ProductDetails extends Component {
  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.dispatch(displayProduct(productId));
  }
  handleAddClick = product => {
    if (!product.inStock) {
      return alert("Sorry, this product is temporary out of stock");
    }
    return this.props.dispatch(addToCart(product));
  };

  render() {
    return (
      <div>
        <div key={this.props.product.id} className="media">
          <img src={this.props.product.imageUrl} className="mr-3" alt="" />
          <div className="media-body">
            <h3 className="mt-0">{this.props.product.title}</h3>
            <p>{this.props.product.author}</p>
            <p>{this.props.product.resume}</p>
            <div>Status: {getStatus(this.props.product)}</div>
            <button
              type="button"
              className="btn btn-danger disabled"
              onClick={() => this.handleAddClick(this.props.product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
function getStatus(product) {
  if (product.inStock) {
    return "IN STOCK";
  } else {
    return "OUT OF STOCK";
  }
}

function mapStateToProps(reduxState) {
  return { product: reduxState.products.resume };
}

export default connect(mapStateToProps)(ProductDetails);
