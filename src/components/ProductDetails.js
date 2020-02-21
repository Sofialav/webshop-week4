import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchProducts,
  displayProduct
} from "../store/products/productsActions";

class ProductDetails extends Component {
  componentDidMount() {
    const productId = this.props.match.params.productId;
    // this.props.dispatch(fetchProducts);
    this.props.dispatch(displayProduct(productId));
  }
  render() {
    return (
      <div>
        <div key={this.props.products.id} className="media">
          <img src={this.props.products.imageUrl} className="mr-3" alt="" />
          <div className="media-body">
            <h3>{this.props.products.title}</h3>
            <p>{this.props.products.author}</p>
            <p>{this.props.products.resume}</p>
            <button
              type="button"
              className="btn btn-danger disabled"
              onClick={() => this.handleAddClick(this.props.prod)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { products: reduxState.products.resume };
}

export default connect(mapStateToProps)(ProductDetails);
