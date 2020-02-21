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
        Book details
        <div key={this.props.products.id} className="prodPreview">
          <img src={this.props.products.imageUrl} className="mr-3" alt="" />
          <h3>{this.props.products.title}</h3>
          <p>{this.props.products.author}</p>
          <div className="btn-group" role="group">
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
  return { products: reduxState.products.products };
}

export default connect(mapStateToProps)(ProductDetails);
