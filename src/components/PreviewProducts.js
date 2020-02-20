import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/products/productsActions";

class PreviewCategory extends Component {
  handleAddClick = product => {
    if (!product.inStock) {
      return alert("Sorry, this product is temporary out of stock");
    }
    console.log("add to cart");
    return this.props.dispatch(addToCart(product));
  };

  render() {
    return (
      <div className="col-sm-4 prod-margin">
        <div key={this.props.id} className="prodPreview">
          <img src={this.props.imageUrl} className="mr-3" alt="" />
          <h3>{this.props.title}</h3>
          <p>{this.props.author}</p>
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-danger disabled"
              onClick={() => this.handleAddClick(this.props.prod)}
            >
              Add to Cart
            </button>
            {/* temporary linked to card
                      change later!!! */}
            <Link to={`/cart`}>
              <button type="button" className="btn btn-warning disabled">
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
  return {};
}

export default connect(mapStateToProps)(PreviewCategory);
