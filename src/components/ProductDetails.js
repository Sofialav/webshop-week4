import React, { Component } from "react";
import { connect } from "react-redux";
import { displayProduct } from "../store/products/productsActions";
import { addToCart } from "../store/cart/cartActions";
import Comments from "./Comments";
import "./ProductDetails.css";
import {
  fetchComments,
  getCommentsByProduct
} from "../store/comments/commentsActions";

class ProductDetails extends Component {
  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.dispatch(displayProduct(productId));
    this.props.dispatch(fetchComments);
    this.props.dispatch(getCommentsByProduct(productId));
  }
  handleAddClick = product => {
    if (!product.inStock) {
      return alert("Sorry, this product is temporary out of stock");
    }
    return this.props.dispatch(addToCart(product));
  };

  render() {
    const displayComments = this.props.comments.map(comm => {
      return (
        <Comments
          key={comm.id}
          id={comm.id}
          user={comm.name}
          comment={comm.comment}
        />
      );
    });
    return (
      <div>
        <div key={this.props.product.id} className="media details-block">
          <img
            src={this.props.product.imageUrl}
            className="mr-3"
            id="details-image"
            alt=""
          />
          <div className="media-body">
            <h2 className="mt-0">{this.props.product.title}</h2>
            <p>{this.props.product.author}</p>
            <p>{this.props.product.resume}</p>
            <div>Status: {getStatus(this.props.product)}</div>
            <button
              type="button"
              className="btn btn-danger disabled mt-3"
              onClick={() => this.handleAddClick(this.props.product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <h2 className="my-4 border-bottom">Users reviews</h2>
        <div className="media-body">{displayComments}</div>
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
  return {
    product: reduxState.products.resume,
    comments: reduxState.comments.by_book
  };
}

export default connect(mapStateToProps)(ProductDetails);
