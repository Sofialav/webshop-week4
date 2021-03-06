import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products/productsActions";
import PreviewProducts from "./PreviewProducts";

class AllProducts extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts);
  }

  render() {
    if (this.props.products.length === 0) {
      return (
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    }
    const displayProducts = this.props.products.map(prod => {
      return (
        <PreviewProducts
          key={prod.id}
          imageUrl={prod.imageUrl}
          title={prod.title}
          author={prod.author}
          prod={prod}
          id={prod.id}
          price={prod.price}
        />
      );
    });
    return (
      <div>
        <div className="container">
          <div className="row">{displayProducts}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return { products: reduxState.products.products };
}
export default connect(mapStateToProps)(AllProducts);
