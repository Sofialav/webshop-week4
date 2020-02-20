import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts, addToCart } from "../store/products/productsActions";
import "./AllProducts.css";

class AllProducts extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts);
  }
  handleAddClick(product) {
    if (!product.inStock) {
      return alert("Sorry, this product is temporary out of stock");
    }
    console.log("add to cart");
    return this.props.dispatch(addToCart(product));
  }
  render() {
    return (
      <div>
        <h1>All Books</h1>
        <div className="container">
          <div className="row">
            {this.props.products.map(prod => {
              return (
                <div className="col-sm-4 prod-margin">
                  <div key={prod.id} className="prodPreview">
                    <img src={prod.imageUrl} className="mr-3" alt="picture" />
                    <h3>{prod.title}</h3>
                    <p>{prod.author}</p>
                    <div className="btn-group" role="group">
                      <button
                        type="button"
                        className="btn btn-danger disabled"
                        onClick={() => this.handleAddClick(prod)}
                      >
                        Add to Cart
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning disabled"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { products: reduxState.products };
}
export default connect(mapStateToProps)(AllProducts);
